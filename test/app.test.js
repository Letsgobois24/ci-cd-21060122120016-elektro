const request = require('supertest');
const http = require('http');

const app = http.createServer((req, res) => {
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello, GitHub Actions!\n');
});

test('GET / responds with correct message', async () => {
const response = await request(app).get('/');
expect(response.status).toBe(200);
expect(response.text).toBe('Hello, GitHub Actions!\n');
});

test('GET / responds with 200 status', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
});

test('GET / responds with text content type', async () => {
    const response = await request(app).get('/');
    expect(response.headers['content-type']).toBe('text/plain');
});

test('GET / responds with non-empty body', async () => {
    const response = await request(app).get('/');
    expect(response.text).not.toBe('');
});