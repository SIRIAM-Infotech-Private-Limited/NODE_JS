const EventEmitter = require('events');

const event = new EventEmitter();

// event.on('sayMyName', () => {
//     console.log("Your name is abcd")
// });
// event.on('sayMyName', () => {
//     console.log("Your name is efgh")
// });
// event.on('sayMyName', () => {
//     console.log("Your name is ijkl")
// });

// event.emit('sayMyName');//Created an event


event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit("CheckPage", 200, "okay");