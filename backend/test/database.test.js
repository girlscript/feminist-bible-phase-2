const expect = require('chai').expect;
const User = require('../database/models/userModel');

describe('TEST: user schema', () => {
  it('should be invalid if name is empty', (done) => {
    const schema = new User();
    schema.validate(function (err) {
      expect(err.errors.name).to.exist;
      done();
    });
  });
});
