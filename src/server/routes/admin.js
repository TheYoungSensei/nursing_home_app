import * as AdminController from '../controllers/admin.controller';

module.exports.setup = function (app, prefix) {

  app.get(prefix, AdminController.getAdmins);

  app.get(prefix+'/:cuidInf', AdminController.getAdmin);

  app.post(prefix+'/updateAdmin/:cuidInf', AdminController.updateAdmin);

  app.delete(prefix+'/:cuidInf', AdminController.deleteAdmin);

};

