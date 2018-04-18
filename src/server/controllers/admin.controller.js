import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';
import Admin from '../models/adminSchema';


/**
 * Get all Admins
 * @param req todo
 * @param res todo
 * @param next todo
 * @returns void todo
 */
export function getAdmins(req, res, next) {
  Admin.find().exec((err, tags) => {
    if (err) {
      next(new Error(JSON.stringify({ message: 'Erreur du serveur', status: 500 })));
    } else{
      res.json({ tags });
    }
  });
}

/**
 * Get a single Admin
 * @param req todo
 * @param res todo
 * @param next todo
 * @returns void todo
 */
export function getAdmin(req, res, next) {
  if(!req.params.cuid)    {
    throw new Error(JSON.stringify({ message: 'Informations manquantes', status: 412 }));
  }
  Admin.findOne({ cuid: req.params.cuid }).exec((err, tags) => {
    if (err) {
      next(new Error(JSON.stringify({ message: 'Erreur du serveur', status: 500 })));
    } else{
      res.json({ tags });
    }
  });
}

/**
 * Update a single Admin
 * @param req todo
 * @param res todo
 * @param next todo
 * @returns void todo
 */
export function updateAdmin(req, res, next) {
  if(!req.params.cuid && !req.body.Admin) {
    throw new Error(JSON.stringify({ message: 'Informations manquantes', status: 412 }));
  }
  const updatedAdmin = new Admin(req.body.Admin);
  updatedAdmin.cuid = cuid();
  updatedAdmin.save((err, saved) => {
    if (err)      {
      next(new Error(JSON.stringify({ message: 'Erreur du serveur', status: 500 })));
    }    else      {
      res.json({ Admin: saved });
    }
  });
}

/**
 * Delete a single Admin
 */
export function deleteAdmin(req, res, next) {
  if (!req.params.cuid) {
    throw new Error(JSON.stringify({message: 'Informations manquantes', status: 412}));
  }
  Admin.update(
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
