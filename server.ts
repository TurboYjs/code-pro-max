import { createServer } from 'http';
import { WebSocketServer } from 'ws';
const { parse } = require('url')
const next = require('next')
const setupWSConnection = require('y-websocket/bin/utils').setupWSConnection;

const dev = process.env.NODE_ENV !== 'production'
const port = 3000
const hostname = 'localhost'
const app = next({ dev, port, hostname })
const handle = app.getRequestHandler()
app.prepare().then(() => {
    const server = createServer((req, res) => handle(req, res, parse(req.url, true)))
    const wss = new WebSocketServer({ noServer: true })

    wss.on("connection", async function connection(ws, req) {
        setupWSConnection(ws, req);
        console.log('incoming connection', ws);
        ws.onclose = () => {
            console.log('connection closed', wss.clients.size);
        };
    });

    server.on('upgrade', function (req, socket, head) {
        const { pathname } = parse(req.url, true);
        if (pathname !== '/_next/webpack-hmr') {
            wss.handleUpgrade(req, socket, head, function done(ws) {
                wss.emit('connection', ws, req);
            });
        }
    });

    // @ts-ignore
    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port} and ws://localhost:${port}`)
    })
})