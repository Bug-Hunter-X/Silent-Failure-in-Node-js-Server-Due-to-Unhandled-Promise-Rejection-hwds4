const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  const asyncOperation = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random failure
      if (Math.random() < 0.5) {
        reject(new Error('Asynchronous operation failed'));
      } else {
        resolve('Asynchronous operation succeeded');
      }
    }, 1000);
  });

  asyncOperation
    .then((result) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    })
    .catch((error) => {
      // Error handling is missing here.  This will cause a silent failure.
      console.error('Error:', error);
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});