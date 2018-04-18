import * as PatientRequestController from '../controllers/patientRequest.controller';

module.exports.setup = function (app, prefix) {

  app.get(prefix, PatientRequestController.getPatientRequests);

  app.get(prefix+'/:cuidInf', PatientRequestController.getPatientRequest);

  app.delete(prefix+'/:cuidInf', PatientRequestController.deletePatientRequest);

};

