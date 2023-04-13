// random id for debugging
// as proof of persistent state
const id = Math.floor(Math.random() * 999999);
console.log('shared-worker.js', id);

// singleton list of ports
const ports = new Set();

// connection event handling
self.onconnect = (event) => {
  const port = event.ports[0];
  ports.add(port);
  console.log('conn', id, ports.size);

  // callback on message received
  port.onmessage = (event) => {
    console.log('message', id, event.data);

    if(event.data === 'close') {
      ports.delete(port);
      return;
    }

    // messages are dispatched to each window
    for(let p of ports) {
      p.postMessage([id, event.data])
    }
  };
};