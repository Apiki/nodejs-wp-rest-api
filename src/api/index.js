import { Router } from 'express'
import posts from './posts'

const router = new Router()

router.use('/posts', posts)

export default router
