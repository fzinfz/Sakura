import * as R from 'co-router'
import { Router } from 'express'
import * as list from './list'

const router: Router = R()

router.use('/', list.default.get)

export default router
