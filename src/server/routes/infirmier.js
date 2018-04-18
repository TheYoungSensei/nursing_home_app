import * as InfirmierController from '../controllers/infirmier.controller';

module.exports.setup = function (app, prefix) {

  app.get(prefix, InfirmierController.getInfirmiers);

  app.get(prefix+'/:cuidInf', InfirmierController.getInfirmier);

  app.post(prefix+'/updateInfirmier/:cuidInf', InfirmierController.updateInfirmier);

  app.delete(prefix+'/:cuidInf', InfirmierController.deleteInfirmier);

};

