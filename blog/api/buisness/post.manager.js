'use strict';

import postDAO from '../DAO/postDAO';


function create(context) {
    async function createNew(data) {
        console.log("Jestem w post post manager")
        let result = await postDAO.createNewOrUpdate(data);
        if (result) {
            return result;
        }
    }

    async function query() {
        let result = await postDAO.query();
        if (result) {
            return result;
        }
    }

    async function get(id) {
        let result = await postDAO.get(id);
        if (result) {
            return result;
        }
    }

    return {
        createNew: createNew,
        query: query,
        get: get,
    };
}

export default {
    create: create
};