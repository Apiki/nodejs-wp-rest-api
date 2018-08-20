import { Router } from 'express'

import single from './single'

const router = new Router()

router.use('/single', single)

export default router
