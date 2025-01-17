import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(client) {
  client.on('error', (err) => {
    console.log(err);
  });
  client.on('message', function incoming(message) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        console.log('received: %s', message);

        client.send(JSON.stringify(message));
      }
    });
  });
});
