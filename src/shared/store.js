import { init } from "@rematch/core";
import models from './models';
import logger from "redux-logger";
import fetch from './middlewares/fetch';

export default init({
  models,
  redux: {
    middlewares: [fetch, logger],
  }
});