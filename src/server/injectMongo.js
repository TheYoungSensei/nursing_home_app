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
  phone: '04729276',
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

const inf3 = new Infirmier({
  lastName: 'John',
  firstName: 'Doe',
  sexe: FEMALE,
  languages: ['Néerlandais'],
  email: 'sacre2.christopher@fake.mail',
  phone: '04729277',
  description: 'cookie',
  zone: ['Woluwe'],
  postCodes: ['1200'],
  specificity: 'Oncologie',
  availability: {
    dayTimes: ['Matin', 'Soir'],
    weekTimes: ['Jeudi', 'Dimanche']
  },
  logicalDelete: false,
  cuid: 'John1',
  index: true
});

const inf4 = new Infirmier({
  lastName: 'John2',
  firstName: 'Doe2',
  sexe: MALE,
  languages: ['Français'],
  email: 'sacre3.christopher@fake.mail',
  phone: '04729278',
  description: 'cookie',
  zone: ['Ixelles'],
  postCodes: ['1110'],
  specificity: 'Oncologie',
  availability: {
    dayTimes: ['Midi', 'Soir'],
    weekTimes: ['Vendredi', 'Samedi', 'Dimanche']
  },
  logicalDelete: false,
  cuid: 'John2',
  index: true
});

inf1.save();
inf2.save();
inf3.save();
inf4.save();
