'use strict';
import business from '../buisness/business.container';
import auth from '../middleware/auth';
import applicationException from '../service/applicationException';
const userEndpoint = (router) => {
    router.post('/api/user/auth', async (request, response, next) => {
        console.log('Jestem w endpoint auth: ',request.body)
        let data = JSON.parse(request.body.data)
        try {
            let result = await business(request).getUserManager(request).authenticate(data.login, data.password);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.post('/api/user/create', async (request, response, next) => {
        console.log("Endpoint: ", request.body);
        let data = JSON.parse(request.body.data)
        try {
            let result = await business(request).getUserManager(request).createNewOrUpdate(data);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
    });

    router.delete('/api/user/logout/:userId', auth, async (request, response, next) => {
      
        try {
            let result = await business(request).getUserManager(request).removeHashSession(request.body.userId);
            response.status(200).send(result);
        } catch (error) {
            applicationException.errorHandler(error, response);
        }
});
}

export default userEndpoint;
