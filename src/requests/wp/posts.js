import qs from 'querystring'

import { getCache } from '../../services/redis'
import api from './api'

export const getAll = (params) => {
  return getCache(api, `/wp/v2/posts/?${qs.stringify(params)}`)
}

export const getById = (id, params) => {
  return getCache(api, `/wp/v2/posts/${id}?${qs.stringify(params)}`)
}

export const getBySlug = (slug, params) => {
  return getCache(api, `/wp/v2/posts/?${qs.stringify({...params, ...{slug}})}`)
}
