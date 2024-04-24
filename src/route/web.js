import express from "express";
import homeController from "../controllers/homeController";
import userContronller from "../controllers/userController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    router.post('/api/login', userContronller.handleLogin);
    router.get('/api/get-all-userss', userContronller.handleGetAllUser);
    router.post('/api/create-new-userss', userContronller.handleCreaeteNewUser);
    router.put('/api/edit-user', userContronller.handleEditUser);
    router.delete('/api/delete-user', userContronller.handleDeleteUser)
    //rest api
    return app.use("/", router);
}
module.exports = initWebRoutes;