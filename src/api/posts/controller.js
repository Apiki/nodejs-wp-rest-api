import request from 'request-promise'
import { success, notFound } from '../../services/response/'
import { Exception } from 'handlebars';

const defaultOptions = {
  json: true
}

export const index = (req, res, next) => {
  defaultOptions.uri = 'https://apiki.com/wp-json/wp/v2/posts'
  request(defaultOptions)
    .then(notFound(res))
    .then(success(res))
    .catch(function (err) {
      return err.message
    })
}

export const getPostById = ({ params }, res, next) => {
  defaultOptions.uri = `https://apiki.com/wp-json/wp/v2/posts/${params.id}`
  request(defaultOptions)
    .then(notFound(res))
    .then(success(res))
    .catch(err => err)
    .then(next)
}
