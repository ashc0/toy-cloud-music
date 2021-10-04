import axiosInstance from './axios'

function getBanner(type = 1) {
  return axiosInstance({
    url: '/banner',
    method: 'GET',
    params: {
      type
    }
  })
}

function getPlaylist(offset = 0) {
  return axiosInstance({
    url: '/top/playlist',
    method: 'GET',
    params: {
      limit: 5,
      offset,
    }
  })
}
export default {
  getBanner,
  getPlaylist
}