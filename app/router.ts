import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;

  router.get('/', controller.home.index);

  router.get('/csrf', controller.home.csrf);

  router.post(
    '/account/signin',
    middleware.validateParams.validateAccountPostBody,
    controller.home.signin,
  );

  router.post(
    '/account/signinGetToken',
    middleware.validateParams.validateAccountPostBody,
    controller.home.signinGetToken,
  );

  router.get(
    '/user/:id',
    middleware.validateUser.validateParams,
    controller.user.getUserById,
  );
};
