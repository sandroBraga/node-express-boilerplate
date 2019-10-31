const should  = require('should')
const request = require('request')
const chai    = require('chai')
const expect  = chai.expect
const urlBase = 'http://localhost:3000/'

describe('It should return 200 when get home', () => {
    it('When get /', (done) => {
        request.get({ url: urlBase }, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.own.include(JSON.stringify({"mensagem":"Hello world"}));
            done();
        });
    });
});
describe('It should return 404 when get route that not exists', () => {
    it('When get /cowabunga', (done) => {
        request.get({ url: urlBase + 'cowabunga'}, (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});