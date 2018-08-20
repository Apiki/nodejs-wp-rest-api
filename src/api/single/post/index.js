import { getPosts, getPostsBySlug } from '../../../requests/wp'
import transform from './transform'

const getRelated = (post) => {
  return getPosts({
    _embed: true,
    exclude: post[0].id,
    categories: (post[0].categories || []).join(','),
    per_page: 4
  })
}

export default async ({ params }, res, next) => {
  try {
    const postData = await getPostsBySlug(params.slug, {_embed: true})
    const relatedData = await getRelated(postData)

    res.status(200).send(transform(
      postData,
      relatedData
    ))

    next()
  } catch (e) {
    console.log(e)
    res.status(404).end()
  }
}
