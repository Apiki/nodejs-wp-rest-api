import asyncRedis from 'async-redis'

import { redisParams } from '../../config'

const client = asyncRedis.createClient(redisParams)

export const getCache = async (api, path) => {
  try {
    const data = await client.get(path)

    if (data !== null) {
      return JSON.parse(data)
    }

    const result = await api.get(path)

    client.set(path, JSON.stringify(result.data))

    return result.data
  } catch (e) {
    console.log(e)
  }
}

export default client
