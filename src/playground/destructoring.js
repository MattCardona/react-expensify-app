// console.log('destructoring');

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin'
  }
};

const {title, author} = book;
const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(`The book ${title} by ${author} was published by ${publisherName}`);


//ARRAYS DESTRUCTURING
//
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, small, medium, large] = item;

console.log(`A medium ${coffee} cost ${medium}.`);