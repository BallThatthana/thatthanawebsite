const controller = require('../controllers/tiktok_controller.js');
module.exports = ({ express }) => {
  const route = express.Router();

  route.post('/tiktok', controller.send_tiktok_event_api);

  return route;
};
