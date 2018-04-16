import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';
import Infirmier from '../models/infirmierSchema';


/**
 * Get all infirmiers
 * @param req todo
 * @param res todo
 * @param next todo
 * @returns void todo
 */
export function getInfirmiers(req, res, next) {
  Infirmier.find().exec((err, tags) => {
    if (err) {
      next(new Error(JSON.stringify({ message: 'Erreur du serveur', status: 500 })));
    } else{
      res.json({ tags });
    }
  });
}

/**
 * Get a single infirmier
 * @param req todo
 * @param res todo
 * @param next todo
 * @returns void todo
 */
export function getInfirmier(req, res, next) {
  if(!req.params.cuid)    {
    throw new Error(JSON.stringify({ message: 'Informations manquantes', status: 412 }));
  }
  Infirmier.findOne({ cuid: req.params.cuid }).exec((err, tags) => {
    if (err) {
      next(new Error(JSON.stringify({ message: 'Erreur du serveur', status: 500 })));
    } else{
      res.json({ tags });
    }
  });
}

/**
 * Update a single infirmier
 * @param req todo
 * @param res todo
 * @param next todo
 * @returns void todo
 */
export function updateInfirmier(req, res, next) {
  if(!req.params.cuid && !req.body.infirmier) {
    throw new Error(JSON.stringify({ message: 'Informations manquantes', status: 412 }));
  }
  const updatedInfirmier = new Infirmier(req.body.infirmier);
  updatedInfirmier.cuid = cuid();
  updatedInfirmier.save((err, saved) => {
    if (err)      {
      next(new Error(JSON.stringify({ message: 'Erreur du serveur', status: 500 })));
    }    else      {
      res.json({ infirmier: saved });
    }
  });
}

/**
 * Delete a single infirmier
 */
export function deleteInfirmier(req, res, next) {
  if (!req.params.cuid) {
    throw new Error(JSON.stringify({message: 'Informations manquantes', status: 412}));
  }
  Infirmier.update(
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
