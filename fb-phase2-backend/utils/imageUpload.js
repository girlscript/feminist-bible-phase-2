const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  accessKeyId: process.env.ACCESS_KEY_ID,
  region: `AWS_REGION`,
});

const s3 = new aws.S3();

const filefilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg'
  ) {
    cb(null, true);
  } else {
    cb(new Error('Invalid Mime Type, only PNG, JPG, JPEG are allowed.', false));
  }
};

const upload = multer({
  fileFilter: filefilter,
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: `bucket-name`,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '.png');
    },
  }),
});

module.exports = upload;
