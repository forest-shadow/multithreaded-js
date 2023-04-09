console.log('hello from main.js');

// instantiation of a new dedicated worker
const worker = new Worker('worker.js');

// a message handler is attached to the worker
worker.onmessage = (msg) => {
  console.log('message received from worker:', msg.data);
}

// a message is passed into the worker
worker.postMessage('message sent to worker');

console.log('hello from the end of main.js');