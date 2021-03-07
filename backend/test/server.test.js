const assert = require('assert');
const server = require('../app');
const request = require('supertest');

describe('TEST: Server', () => {
  it('GET request to /', (done) => {
    // for now, / endpoint should return 404 as no route is defined
    const app = server.listen(3412, () => {
      request(app)
        .get('/')
        .expect(404)
        .end((err, res) => {
          if (err) throw err;
          assert.strictEqual(res.status, 404);
          app.close((err) => {
            done(err);
          });
        });
    });
  });
});
