import axios from 'axios'

import { apiPaths } from '../../config'

export default axios.create({
  baseURL: apiPaths.wp
  // timeout: 1000
})
