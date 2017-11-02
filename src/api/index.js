import axios from 'axios'

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
  config.user_id = window.user_id
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export const getUsers = (params = {}) =>
  axios.get('https://randomuser.me/api', {
    params: {
      results: 10,
      ...params
    }
  }).then(data => data.data)
export const getBookInfo = (id = 6548683) =>
  axios.get(`/api/book/${id}`).then(data => data.data)
