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

function getPlaylistDetail(id) {
  return axiosInstance({
    url: '/playlist/detail',
    method: 'GET',
    params: { id }
  })
}

function getSongDetail(ids) {
  return axiosInstance({
    url: '/song/detail',
    method: 'GET',
    params: {
      ids: ids,
      br: 320000
    }
  })
}

function getSongUrl(id) {
  return axiosInstance({
    url: '/song/url',
    method: 'GET',
    params: {
      id,
      br: 320000
    }
  })
}
export default {
  getBanner,
  getPlaylist,
  getPlaylistDetail,
  getSongDetail,
  getSongUrl
}