import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listNotes() {
        return axios.get(`${apiPrefix}/notes`);
    },

    createNote(data) {
        //console.log('api',data);
        return axios.post(`${apiPrefix}/notes`, data);
    },

    updateNote(newdata) {
        console.log('api', newdata);
        return axios.post(`${apiPrefix}/notes/`, newdata);
    }
}
