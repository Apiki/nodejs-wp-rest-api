const transformSizes = (sizes) => Object.keys(sizes).reduce((previous, current) => {
  previous[current] = {
    width: sizes[current].width,
    height: sizes[current].height,
    url: sizes[current].source_url
  }

  return previous
}, {})

export default ({
  alt_text: alt,
  media_details: mediaDetails
}) => ({
  alt,
  sizes: transformSizes(mediaDetails.sizes)
})
