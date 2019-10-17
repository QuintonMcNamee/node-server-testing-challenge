const request = require('supertest');

const server = require('./server.js');

describe('GET /', () => {
    it('should return http status code 200', () => {
        return request(server)
            .get('/')
            .then(response => {
                expect(response.status).toBe(200);
            });
    });

    test('should return JSON', async () => {
        const response = await request(server).get('/');

        expect(response.type).toMatch('json');
    });

    test('should return JSON using .then()', () => {
        return request(server)
            .get('/')
            .then(response => {
                expect(response.type).toMatch('json');
            });
    });

    it('should return { api: "up" }', async () => {
        const response = await request(server).get('/');

        expect(response.body).toEqual({ message: 'Server running' });
    });
});