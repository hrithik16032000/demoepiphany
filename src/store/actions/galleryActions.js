// import axios from 'axios';
// import { config } from '../../config/env-setup'

// export const fetchInstagram = () => {
//     return (dispatch, getState) => {
//         axios.get(`https://graph.instagram.com/me/media?fields=id,timestamp,media_type,media_url,permalink&access_token=${config.INSTGRAM_USER_TESTER_TOKEN}`)
//         .then((response) => {
//             dispatch({ type: 'INSTAGRAM_FETCHED', ...response.data })
//         })
//         .catch((err) => {
//             dispatch({ type: 'INSTAGRAM_FETCH_FAILED', err})
//         })
        
//     }
// }
