import transformFeaturedMedia from '../../../helpers/transform-featured-media'

const transformPost = ({
  id,
  content,
  excerpt,
  title,
  _embedded: embedded
}) => ({
  id,
  content: content.rendered,
  excerpt: excerpt.rendered,
  featuredMedia: transformFeaturedMedia(embedded['wp:featuredmedia'][0]),
  title: title.rendered
})

export default (post, related) => ({
  ...transformPost(post[0]),
  related: related.map((data) => transformPost(data))
})

export { transformPost }
