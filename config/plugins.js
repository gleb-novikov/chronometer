module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'mail5tudio@yandex.ru',
        defaultReplyTo: 'mail5tudio@yandex.ru',
      },
    },
  },
  // ...
});