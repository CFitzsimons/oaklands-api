const generalRoutes = require('./general');
const minecraftRoutes = require('./minecraft');

const withRoutes = (app) => {
  // Health check and upkeep
  app.use(generalRoutes);

  // Connection to Oaklands Lodge minecraft DB
  app.use('/minecraft', minecraftRoutes);
};

module.exports = withRoutes;
