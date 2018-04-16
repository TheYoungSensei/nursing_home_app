import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';
import PatientRequest from '../models/PatientRequestSchema';


/**
 * Get all PatientRequests
 * @param req todo
 * @param res todo
 * @param next todo
 * @returns void todo
 */
export function getPatientRequests(req, res, next) {
  PatientRequest.find().exec((err, tags) => {
    if (err) {
      next(new Error(JSON.stringify({ message: 'Erreur du serveur', status: 500 })));
    } else{
      res.json({ tags });
    }
  });
}

/**
 * Get a single PatientRequest
 * @param req todo
 * @param res todo
 * @param next todo
 * @returns void todo
 */
export function getPatientRequest(req, res, next) {
  if(!req.params.cuid)    {
    throw new Error(JSON.stringify({ message: 'Informations manquantes', status: 412 }));
  }
  PatientRequest.findOne({ cuid: req.params.cuid }).exec((err, tags) => {
    if (err) {
      next(new Error(JSON.stringify({ message: 'Erreur du serveur', status: 500 })));
    } else{
      res.json({ tags });
    }
  });
}

/**
 * Delete a single PatientRequest
 */
export function deletePatientRequest(req, res, next) {
  if (!req.params.cuid) {
    throw new Error(JSON.stringify({message: 'Informations manquantes', status: 412}));
  }
  PatientRequest.update(
    { cuid: req.params.cuid },
    { $set: {logicalDelete:  true }}
  ).exec((err) => {
    if (err) {
      next(new Error(JSON.stringify({message: 'Erreur du serveur', status: 500})));
    } else {
      res.json({message: 'Division supprimée avec succès'});
    }
  });
}
