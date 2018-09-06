import axios from 'axios'

function getUserInfo() {
    return axios.get('user/info');
}

export default {
    getUserInfo
}
