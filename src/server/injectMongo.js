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
  lastName: 'Pinto',
  firstName: 'Ana',
  inami: '',
  sexe: FEMALE,
  languages: ['Français'],
  email: 'pinto.ana@fake.mail',
  phone: '12345678',
  description: '',
  zone: [{
    adress: 'Haren',
    postCode: 1130
  }],
  specificity: 'Oncologie',
  availability: {
    dayTimes: ['Midi', 'Soir'],
    weekTimes: ['Vendredi', 'Samedi', 'Dimanche']
  },
  logicalDelete: false,
  cuid: 'APIN',
  index: true
});

const inf2 = new Infirmier({
  lastName: 'Decooman',
  firstName: 'Laurane',
  inami: '',
  sexe: FEMALE,
  languages: ['Néerlandais'],
  email: 'decooman.laurane@fake.mail',
  phone: '12345678',
  description: '',
  zone: [{
    adress: 'Molenbeek',
    postCode: 1080
  }],
  specificity: '',
  availability: {
    dayTimes: ['Midi', 'Soir'],
    weekTimes: ['Vendredi', 'Samedi', 'Dimanche']
  },
  logicalDelete: false,
  cuid: 'LDEC',
  index: true
});

const inf3 = new Infirmier({
  lastName: 'Decooman',
  firstName: 'Etienne',
  inami: '4/75139/64/408',
  sexe: MALE,
  languages: ['Néerlandais', 'Français'],
  email: 'decooman.etienne@fake.mail',
  phone: '12345678',
  description: '',
  zone: [
    {
      adress: 'Woluwe',
      postCode: 1200
    },
    {
      adress: 'Kraainem',
      postCode: 1950
    },
    {
      adress: 'Sterrebeek',
      postCode: 1933
    },
    {
      adress: 'Evere',
      postCode: 1110
    },
    {
      adress: 'Auderghem',
      postCode: 1160
    }, {
      adress: 'BoisFort',
      postCode: 1170
    }
  ],
  specificity: 'Gériatrie',
  availability: {
    dayTimes: ['Midi', 'Soir'],
    weekTimes: ['Vendredi', 'Samedi', 'Dimanche']
  },
  logicalDelete: false,
  cuid: 'EDEC',
  index: true
});

inf1.save();
inf2.save();
inf3.save();




