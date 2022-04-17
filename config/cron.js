module.exports = {
  '59 59 23 * * *': async ({ strapi }) => {
    try {
      const entry = await strapi.entityService.update('api::statistic.statistic', 1, {
        data: {
          day: 0
        }
      });
      console.log(entry.day);
    } catch (err) {
      console.log(err);
    }
  },
};