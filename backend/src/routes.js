const { Router } = require('express');
// const { page } = require('./controller/frontend.controller');
const { fileUploader, FILE_FIELD } = require('./utils');
const API_VERSION = process.env.API_VERSION;
const router = Router();
// middlewares
const { apiErrorAnd404Handeler, webErrorAnd404Handeler, authorizationMiddleware } = require('./middlewares');
// controllers
const userController = require('./controller/user.controller');
const fileController = require('./controller/file.controller');
const categoriesController = require('./controller/categories.controller');
const contentsController = require('./controller/contents.controller');
const tagsController = require('./controller/tags.controller');
const utilsController = require('./controller/utils.controller');
const settingsController = require('./controller/settings.controller');


router.post('/api/' + API_VERSION + '/login', userController.login);
// 404 and error handeler
router.get('/api/' + API_VERSION + '/users', authorizationMiddleware, userController.index)
      .put('/api/' + API_VERSION + '/users', authorizationMiddleware, userController.create)
      .get('/api/' + API_VERSION + '/users/:id', authorizationMiddleware, userController.get)
      .patch('/api/' + API_VERSION + '/users/:id', authorizationMiddleware, userController.update)
      .delete('/api/' + API_VERSION + '/users/:id', authorizationMiddleware, userController.remove);
//files
router.get('/api/' + API_VERSION + '/files', authorizationMiddleware, fileController.index)
      .put('/api/' + API_VERSION + '/files', authorizationMiddleware, fileUploader.single(FILE_FIELD), fileController.create)
      .delete('/api/' + API_VERSION + '/files/:id', authorizationMiddleware, fileController.remove);
//files
router.get('/api/' + API_VERSION + '/content', authorizationMiddleware, contentsController.index)
.put('/api/' + API_VERSION + '/content', authorizationMiddleware, contentsController.create)
.get('/api/' + API_VERSION + '/content/:id', authorizationMiddleware, contentsController.get)
.patch('/api/' + API_VERSION + '/content/:id', authorizationMiddleware, contentsController.update)
.delete('/api/' + API_VERSION + '/content/:id', authorizationMiddleware, contentsController.remove);
// // menu 
router.get('/api/' + API_VERSION + '/settings', authorizationMiddleware, settingsController.index)
      .get('/api/' + API_VERSION + '/settings/:name', authorizationMiddleware, settingsController.get)
      .patch('/api/' + API_VERSION + '/settings/:name', authorizationMiddleware, settingsController.update);

// // content
router.get('/api/' + API_VERSION + '/categories', authorizationMiddleware, categoriesController.index)
      .get('/api/' + API_VERSION + '/categories/parent', authorizationMiddleware, categoriesController.getParentCategories)
      .put('/api/' + API_VERSION + '/categories', authorizationMiddleware, categoriesController.create)
      .get('/api/' + API_VERSION + '/categories/:id', authorizationMiddleware, categoriesController.get)
      .patch('/api/' + API_VERSION + '/categories/:id', authorizationMiddleware, categoriesController.update)
      .delete('/api/' + API_VERSION + '/categories/:id', authorizationMiddleware, categoriesController.remove);



// // content
router.get('/api/' + API_VERSION + '/tags', authorizationMiddleware, tagsController.index)
      .put('/api/' + API_VERSION + '/tags', authorizationMiddleware, tagsController.create)
      .get('/api/' + API_VERSION + '/tags/:id', authorizationMiddleware, tagsController.get)
      .patch('/api/' + API_VERSION + '/tags/:id', authorizationMiddleware, tagsController.update)
      .delete('/api/' + API_VERSION + '/tags/:id', authorizationMiddleware, tagsController.remove);

router.get('/api/' + API_VERSION +'/logs', authorizationMiddleware, utilsController.getLogs)
      .get('/api/' + API_VERSION +'/logs/:filename', authorizationMiddleware, utilsController.readLog)
      .delete('/api/' + API_VERSION +'/logs/:filename', authorizationMiddleware, utilsController.removeLogs)
      .get('/api/' + API_VERSION +'/dashboard', authorizationMiddleware, userController.getUserDashboard)

router.get('/api/' + API_VERSION +'/read-directory', authorizationMiddleware, utilsController.readDirectory);


router.use('/api/v1', apiErrorAnd404Handeler)
// router
// router.get('*', page);
router.use(webErrorAnd404Handeler)

module.exports = router;