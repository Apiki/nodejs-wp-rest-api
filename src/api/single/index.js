import { Router } from 'express'

import getPostsBySlug from './post'

const router = new Router()

/**
 * @api {get} /posts Retrieve posts
 * @apiName RetrievePosts
 * @apiGroup Post
 * @apiPermission admin
 * @apiParam {String} access_token Post access_token.
 * @apiUse listParams
 * @apiSuccess {Object[]} posts List of posts.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 401 Admin access only.
 */
router.get('/post/:slug', getPostsBySlug)

export default router
