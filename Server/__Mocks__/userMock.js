import bcrypt from 'bcryptjs';

export const mockUsers = [
  {
    name: 'Soumava Banerjee',
    userName: 'Soumava21',
    email: 'soumava.rivu@gmail.com',
    password: bcrypt.hashSync('frost1234', 10),
    adhaarNumber: 727456789023,
    phoneNumber: 8777724254,
    assignments: [],
    isAdmin: true,
    geometry: {
      type: 'Point',
      coordinates: [84.825439453125, 20.331750177822833],
    },
  },
  {
    name: 'Shubham Dutta',
    email: 'shubhamduttanovember@gmail.com',
    userName: 'ShubhamDutta21',
    password: bcrypt.hashSync('frost1234', 10),
    adhaarNumber: 727456789023,
    assignments: [],
    phoneNumber: 9330715911,
    geometry: {
      type: 'Point',
      coordinates: [84.25140380859374, 20.486200430098492],
    },
  },
  {
    name: 'Frost Byte',
    email: 'frost.byte@gmail.com',
    userName: 'FrostByte420',
    password: bcrypt.hashSync('frost1234', 10),
    adhaarNumber: 727456789023,
    assignments: [],
    phoneNumber: 8943125754,
    geometry: {
      type: 'Point',
      coordinates: [84.7760009765625, 19.80805412808859],
    },
  },
  {
    name: 'Flame Bit',
    email: 'flame.bit@gmail.com',
    userName: 'FlameBi8',
    password: bcrypt.hashSync('frost1234', 10),
    adhaarNumber: 727456789032,
    assignments: [],
    phoneNumber: 7342000268,
    geometry: {
      type: 'Point',
      coordinates: [84.82269287109375, 19.691728302992512],
    },
  },
  {
    name: 'Flaming hearts',
    email: 'flaminghearts.bit@gmail.com',
    userName: 'flameheart32',
    password: bcrypt.hashSync('frost1234', 10),
    adhaarNumber: 727456789031,
    assignments: [],
    phoneNumber: 9830181429,
    geometry: {
      type: 'Point',
      coordinates: [83.902587890625, 20.20034600649375],
    },
  },
  {
    name: 'Kaustav Sir',
    email: 'banerjeekau.bit@gmail.com',
    userName: 'kaustav56',
    password: bcrypt.hashSync('frost1234', 10),
    adhaarNumber: 727456789030,
    assignments: [],
    phoneNumber: 8617786321,
    geometry: {
      type: 'Point',
      coordinates: [84.6661376953125, 19.64776095569737],
    },
  },
  {
    name: 'Rubi Chakraborty',
    email: 'chakrabortyrubi.bit@gmail.com',
    userName: 'ruby123',
    password: bcrypt.hashSync('frost1234', 10),
    adhaarNumber: 727456789025,
    assignments: [],
    phoneNumber: 6290896232,
    geometry: {
      type: 'Point',
      coordinates: [84.7760009765625, 19.80805412808859],
    },
  },
  {
    name: 'Euler Robert',
    email: 'eulerrobert.bit@gmail.com',
    userName: 'Euler34',
    password: bcrypt.hashSync('frost1234', 10),
    adhaarNumber: 727456789024,
    assignments: [],
    phoneNumber: 8777785008,
    geometry: {
      type: 'Point',
      coordinates: [84.82269287109375, 19.691728302992512],
    },
  },
];
