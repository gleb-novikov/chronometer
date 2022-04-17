module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9428944af6e54b50106851b692e9355a'),
  },
});
