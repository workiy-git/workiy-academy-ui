import devConfig from "./config.development";
import prodConfig from "./config.production";


const configMap = {
  development: devConfig,
  production: prodConfig,
};

const environment = "development"; // Change this to switch environment
console.log(`Running in ${environment} mode`); 
const config = configMap[environment];

export default config;
