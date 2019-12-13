require("dotenv").config();
require("./node").loadStage();

const WHITELISTED_KEYS = [
  "DB_HOST",
  "DB_NAME",
  "DB_USER",
  "DB_PORT",
  "DB_PASSWORD",
  "TEST_ENV"
];

const setDefaults = (prop, result) => {
  if (result !== undefined) {
    return result;
  }
  switch (prop) {
    default:
      throw new Error(`Environmental variable ${prop} is undefined`);
    case "__TEST_DEFAULTED":
      return "DEFAULTED";
    case "EB_ENV":
      return "LOCAL";
    case "ENV_STAGE":
      return "dev";
    case "NEW_RELIC_LICENSE_KEY":
      return "__not_valid__";
    case "NODE_ENV":
      return "dev";
  }
};

class ENV {
  constructor() {
    return new Proxy(this, this);
  }

  get(target, prop) {
    if (!WHITELISTED_KEYS.includes(prop) && prop.substr(0, 7) !== "__TEST_") {
      throw new Error(`Environmental variable ${prop} not whitelisted`);
    }
    const result = setDefaults(prop, process.env[prop]);
    return result;
  }
}

module.exports = new ENV();
