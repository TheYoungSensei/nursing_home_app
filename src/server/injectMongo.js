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
  languages: ['Français'],
  email: 'maniet.antoine@fake.mail',
  phone: '04729275',
  SPECIAL_STRANGE_NURSE_THING: 'cookie',
  zone: ['Woluwe'],
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
  languages: ['Néerlandais'],
  email: 'sacre.christopher@fake.mail',
  phone: '04729275',
  SPECIAL_STRANGE_NURSE_THING: 'cookie',
  zone: ['Woluwe', 'Ixelles'],
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
