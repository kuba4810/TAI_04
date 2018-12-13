'use strict';
    import business from '../buisness/business.container';

    const postEndpoint = (router) => {
       router.get('/api/posts', async (request, response, next)
    => {
           try {
               let result = await business(request).getPostManager().query();
               response.status(200).send(result);
           } catch (error) {
               console.log(error);
           }
       });

       router.get('/api/posts/:id', async (request, response, next)
       => {
              try {
                  let result = await business(request).getPostManager().get(request.params.id);
                  response.status(200).send(result);
              } catch (error) {
                  console.log(error);
              }
          });

       router.post('/api/post', async (request, response, next) => {
           console.log("Jestem w post Endpoint a oto moje dane: ",JSON.parse(request.body.data));
             try {
                let result = await business(request).getPostManager().createNew(JSON.parse(request.body.data));
                console.log("Rezultat: ",result);
                response.json(result._id);
            } catch (error) {
                console.log(error);
            } 
           /*  response.send("Zwracam się kurła !") */
          
          });
    };






   
 export default postEndpoint;