import Admin from './models/adminSchema';
import Infirmier, {FEMALE, MALE} from './models/infirmierSchema';

// Admin mocks
const a1 = new Admin({
  name: 'Admin',
  password: 'Admin',
  dateSignUp: '1/1/2014',
  logicalDelete: false,
  cuid: 'cuidUiUi'
});

a1.save();

const inf1 = new Infirmier({
  lastName: 'Maniet',
  firstName: 'Antoine',
  sexe: MALE,
  languages: ['Français', 'Anglais'],
  email: 'maniet.antoine@fake.mail',
  phone: '04729275',
  description: 'cookie',
  zone: ['Woluwe'],
  postCodes: ['1200'],
  specificity: 'Oncologie',
  availability: {
    dayTimes: ['Matin', 'Midi'],
    weekTimes: ['Lundi', 'Mardi', 'Mercredi']
  },
  logicalDelete: false,
  cuid: 'Maniet',
  index: true
});

const inf2 = new Infirmier({
  lastName: 'Sacré',
  firstName: 'Christopher',
  sexe: FEMALE,
  languages: ['Néerlandais', 'Français'],
  email: 'sacre.christopher@fake.mail',
  phone: '04729275',
  description: 'cookie',
  zone: ['Woluwe', 'Ixelles'],
  postCodes: ['1050', '1200'],
  specificity: 'Coloscopie',
  availability: {
    dayTimes: ['Matin', 'Midi'],
    weekTimes: ['Lundi', 'Mardi', 'Mercredi']
  },
  logicalDelete: false,
  cuid: 'Sacré',
  index: true
});

inf1.save();
inf2.save();
