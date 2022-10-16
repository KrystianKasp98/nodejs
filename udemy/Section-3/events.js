const EventEmitter = require('events');
const celebrity = new EventEmitter();

// will fire before exit script
process.on("exit", (code) => {
  console.log("greetings to trzepaki", code);
}); 

// Subscribes to celebrity for Observer 1
celebrity.on('race win', () => {
  console.log('Congratulations! You are the best!');
});

// Subscribes to celebrity for Observer 2
celebrity.on('race win', () => {
  console.log('Boo I could have better than that!');
});

celebrity.emit('race win'); // fires an event
celebrity.emit('race lost'); // fires an event but nothing will change because there aren't any celebrity listener on event 'race lost'
