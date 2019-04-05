// import { fetchAPIGET } from './fetchAPI'
// import { API_DOMAIN } from '../Constants/config'

// export const register = () => {
//     return {
//         type: 'REGISTER',
//         payload: 1
//     }
// }

// export const login = () => {
//     return {
//         type: 'LOGIN',
//         payload: 0
//     }
// }





// export const mainevents = (callback) => {
// 	console.log('ertyu')
// 	fetchAPIGET (`${API_DOMAIN}events/`,  (json,status) => {
// 		console.log(json, status, '-------------------------')
//     callback(json,status===200)
//   })
// }


// export const mainspeakers = callback => (dispatch) => {
// 	fetchAPIGET (`${API_DOMAIN}api/speakers`,  (json,status) => {
//     callback(json,status===200)
//   })
// }


// export const userprofiledetails = callback => (dispatch) => {
// 	fetchAPIGET (`${API_DOMAIN}api/users`,  (json,status) => {
//     callback(json,status===200)
//   })
// }