import axios from 'axios'
import appConst from '../constants/app.constants'
import { getToken } from './utils'
const module = 'read-directory'
export const explorer = ({ extra_loc = '' }) => {

    return new Promise((res, rej) => {
        axios.get(appConst.apiRoute + module+"?extra_loc="+extra_loc, { headers: { 'Authorization': 'Bearer ' + getToken(), 'Content-Type': 'application/json' } }).then(response => {
            res(response);
        }).catch(err => {
            rej(err);
        })
    })
}
