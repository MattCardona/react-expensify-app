import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database};

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot, prevsnapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').once('value').then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach((child) => {
//     expenses.push({
//       id: child.key,
//       ...child.val()
//     });
//   });
//   console.log(expenses);
// });

// const expensesOn = database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((child) => {
//     expenses.push({
//       id: child.key,
//       ...child.val()
//     });
//   });
//   console.log(expenses);
// });




// const expensesArray =
// [{
//   description: 'water bill',
//   note: '',
//   amount: 123,
//   createdAt: 4000
// },
// {
//   description: 'gas bill',
//   note: '',
//   amount: 300,
//   createdAt: 6000
// },
// {
//   description: 'milk',
//   note: '',
//   amount: 200,
//   createdAt: 1000
// }
// ];

// expensesArray.forEach((expense) => {
//   database.ref('expenses').push(expense);
// });


// database.ref('notes').push({title: 'to do list', body: 'run'});

// database.ref().on('value', (snapshot) => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
// });

// database.ref('location').once('value').then((snapshot) => {
//   console.log(snapshot.val());
// }).catch((e) => {
//   console.log(`There was a error fetching data: ${e}`);
// });

// database.ref().set({
//     name: "Ralph C",
//     age: 4,
//     isSingle: true,
//     stressLevel: 6,
//     job: {
//       title: 'Software Devloper',
//       company: 'Google'
//     },
//     location: {
//       city: 'SF',
//       country: 'US',
//     }
// }).then(() => {
//   console.log(`Data is saved.`);
// }).catch((error) => {
//   console.log(`There was a error ${error}`);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });


// database.ref().update({
//   name: 'Ralph C.',
//   isSingle: null,
//   job: 'software engineer',
//   'location/city': 'Philly'
// }).then(() => {
//   console.log(`Data was removed`);
// }).catch((e) => {
//   console.log(`Their was error: ${e}`);
// });
// database.ref().remove().then(() => {
//   console.log(`Data was removed`);
// }).catch((e) => {
//   console.log(`Their was error: ${e}`);
// });