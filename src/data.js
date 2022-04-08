export const activities = [
  {
    id: 1,
    heading: 'Chronologické řazení',
    path: '/razeni',
    className: 'activity__hourglass',
  },
  {
    id: 2,
    heading: 'Přesouvání po mapě',
    path: '/presouvani',
    className: 'activity__map',
  },
];

export const places = [
  {
    id: 1,
    text: 'mys Dobré naděje',
    answer: 'AF',
    info: 'Mys Dobré naděje jako první Evropan obeplul v roce 1488 Bartolomeu Dias.',
  },
  {
    id: 2,
    text: 'Španělsko',
    answer: 'EU',
    info: 'Po objevení Ameriky v roce 1492 se Španělsko stalo přední globální supervelmocí.',
  },
  {
    id: 3,
    text: 'Ceuta',
    answer: 'AF',
    info: 'Maurské město Ceuta bylo první portugalskou kolonií mimo evropské území. Portugalci tak došli k poznání, jak je Afrika bohatá např. na slonovinu a zlato.',
  },
];

export const events = [
  {
    id: 1,
    cards: [
      {
        event: 'Objevení Ameriky K. Kolumbusem',
        order: 3,
        year: '1492',
        name: 'Item 1',
        box: 'Box 1',
      },
      {
        event: 'Obeplutí mysu Dobré naděje B. Diasem',
        order: 2,
        year: '1488',
        name: 'Item 2',
        box: 'Box 1',
      },
      {
        event: 'Doplutí Vikingů do Sev. Ameriky',
        order: 1,
        year: 'kolem r. 1000',
        name: 'Item 3',
        box: 'Box 1',
      },
      {
        event: 'Tordesillaská smlouva',
        order: 4,
        year: '1494',
        name: 'Item 4',
        box: 'Box 1',
      },
    ],
  },
];
