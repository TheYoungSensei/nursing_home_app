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


const all_days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
const all_periods = ['Matin', 'Midi', 'Soir'];
const all_address = [['Schaerbeek',1030],
  ['Etterbeek',1040],
  ['Ixelles',1050],
  ['Saint-Gilles',1060],
  ['Anderlecht',1070],
  ['Molenbeek-St-Jean',1080],
  ['Koekelberg',1081],
  ['Berchem-Ste-Agathe',1082],
  ['Ganshoren',1083],
  ['Jette',1090],
  ['Evere',1140],
  ['Woluwé-St-Pierre',1150],
  ['Auderghem',1160],
  ['Watermael-Boitsfort',1170],
  ['Uccle',1180],
  ['Forest',1190],
  ['Woluwé-St-Lambert',1200],
  ['St Josse-ten-Noode',1210]];
const all_languages = ['Néerlandais', 'Français', 'Anglais', 'Allemand'];
const all_noms = ['Louise',
  'Camille',
  'Emma',
  'Inès',
  'Chloe',
  'Sarah',
  'Alice',
  'Lea',
  'Juliette',
  'Jeanne',
  'Eva',
  'Clara',
  'Lina',
  'Anna',
  'Charlotte'];
const all_specificities = ['Urgences', 'Soins intensifs', 'Gériatrie', 'Oncologie', 'Pédiatrie',
'Bloc opératoire', 'Santé communautaire'];

function autoAdd () {
  for (let i = 200; i >= 0; i--){
    const randomStart = Math.floor(Math.random() * (i + 1));
    const numDays = Math.floor(Math.random() * (i + 1)) % 7;
    const days = [];
    for (let j=numDays; j >= 0; j--){
      days.push(all_days[(j+randomStart)%(all_days.length)])
    }
    const numPeriods = Math.floor(Math.random() * (i + 1)) % 3;
    const periods = [];
    for (let j=numPeriods; j >= 0; j--){
      periods.push(all_periods[(j+randomStart)%(all_periods.length)])
    }
    const numSpec = i % 7;
    const numAddress = Math.floor(Math.random() * (i + 1)) % 18 ;
    const addresses = [];
    for (let j=numAddress; j >= 0; j--) {
      addresses.push({
        adress: all_address[(j + randomStart) % (all_address.length)][0],
        postCode: all_address[(j + randomStart) % (all_address.length)][1]
      });
    }
    const numLanguages = Math.floor(Math.random() * (i + 1)) % 4 ;
    const langages = [];
    for (let j=numLanguages; j >= 0; j--){
      langages.push(all_languages[(j+randomStart)%(all_languages.length)])
    }
    const numNom = Math.floor(Math.random() * (i + 1)) % 12;
    const numPrenom = Math.floor(Math.random() * (i + 1)) % 12;
    const numPhone = '067'+Math.floor(Math.random() * (i + 1)) % 9+''+Math.floor(Math.random() * (i + 1)) % 9
    +''+Math.floor(Math.random() * (i + 1)) % 9+''+Math.floor(Math.random() * (i + 1)) % 9+''+Math.floor(Math.random() * (i + 1)) % 9+''+Math.floor(Math.random() * (i + 1)) % 9;

    const newInfirmier =  new Infirmier({
      lastName: all_noms[numNom],
      firstName: all_noms[numPrenom],
      inami: '',
      sexe: FEMALE,
      languages: langages,
      email: all_noms[numNom]+'.'+all_noms[numPrenom]+'@gmail.com',
      phone: numPhone,
      description: '',
      zone: addresses,
      specificity: all_specificities[numSpec],
      availability: {
        dayTimes: periods,
        weekTimes: days,
      },
      logicalDelete: false,
      cuid: 'cuid_auto_'+i,
      index: true
    });
    newInfirmier.save();
    console.log(newInfirmier)
  }
}
autoAdd();
