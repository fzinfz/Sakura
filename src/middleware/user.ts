import { isUndefined } from "util";

function getUser(req, res, next) {
    if (!isUndefined(req.headers["x-user-token"]) && (!req.path.startsWith("/auth.login"))) {
        req.service.user.getFromToken(req.headers["x-user-token"]).then(user => {
            req.user = user
            next()
        }).catch(error => {
            res.status(401).json({
                "status": "error",
                "error": error.message
            })
        })
    } else {
        next()
    }
}

export default getUser;
