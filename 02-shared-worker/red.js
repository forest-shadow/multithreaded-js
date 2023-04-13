console.log('red.js');

// instantiating the shared worker
const worker = new SharedWorker('shared-worker.js');

// using `worker.port` for communications
worker.port.onmessage = (event) => {
  console.log('Event', event.data);
}

window.addEventListener('beforeunload', () => {
  worker.port.postMessage('close');
});
