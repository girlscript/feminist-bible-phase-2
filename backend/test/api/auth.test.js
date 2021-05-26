const assert = require('assert');
const server = require('../../app');
const request = require('supertest');
const mongoose = require('mongoose');
require('dotenv').config();
var app;

before(async () => {
  const url = `${process.env.DATABASE_URI}`;
  await mongoose.connect(url, {
    useNewUrlParser: true,
  });
  app = server.listen(9111, () => {
    console.log('Test server running');
  });
});

describe('TEST: auth', () => {
  // it('POST request to /singup with correct credentials', (done) => {
  //   request(app)
  //     .post('/api/auth/signup')
  //     .send({
  //       name: "Jack Sparrow",
  //       phone: "9999999999",
  //       email: "Jack@gmail.com",
  //       password: "Jack",
  //       passwordConfirm: "Jack"
  //     })
  //     .set('Accept', 'application/json')
  //     .expect(201)
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       assert.strictEqual(res.body.msg, 'success!')
  //       return done();
  //     });
  // })

  it('POST request to /singup with already existing account', (done) => {
    request(app)
      .post('/api/auth/signup')
      .send({
        name: 'Jack Sparrow',
        phone: '9999999999',
        email: 'Jack@gmail.com',
        password: 'Jack',
        passwordConfirm: 'Jack',
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.body.msg, 'user already exist');
        return done();
      });
  });

  it('POST request to /singup with incomplete credentials', (done) => {
    request(app)
      .post('/api/auth/signup')
      .send({
        name: 'Chris Evans',
        email: 'Chris@gmail.com',
        password: 'USA',
        passwordConfirm: 'USA',
      })
      .set('Accept', 'application/json')
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(res.body.msg, 'fill up all the credentials');
        return done();
      });
  });

  it('POST request to /singup with mismatching passwords', (done) => {
    request(app)
      .post('/api/auth/signup')
      .send({
        name: 'Thor Singhania',
        phone: '7777777777',
        email: 'Thor@gmail.com',
        password: 'Thor',
        passwordConfirm: 'USA',
      })
      .set('Accept', 'application/json')
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        assert.strictEqual(
          res.body.msg,
          'password and confirm password dont match'
        );
        return done();
      });
  });

  // it('POST request to /signin with invalid credentials', (done) => {
  //   request(app)
  //     .post('/api/auth/signin')
  //     .send({
  //       email: 'Jack@gmail.com',
  //       password: 'Jack',
  //       passwordConfirm: 'Pirate',
  //     })
  //     .set('Accept', 'application/json')
  //     .expect(400)
  //     .end((err, res) => {
  //       if (err) return done(err);
  //       assert.strictEqual(res.body.msg, 'invalid credentials');
  //       return done();
  //     });
  // });
});

after(() => {
  mongoose.connection.close();
  app.close();
});
