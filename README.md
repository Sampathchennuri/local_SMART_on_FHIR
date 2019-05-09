# local_SMART_on_FHIR
Running SMART on FHIR App on localhost
This is a basic application that demonstrates a run through Cerner FHIR implementation.

STEPS
* Fork Repo
* Add config.js under src/
* config.js Format
var env = "dev";

const dev = {
  app: {
    port: ****
  },
  url: {
    launchURI: "http://localhost:****/launch.html",
    redirectURI: "http://localhost:****/index.html"
  }
};

const config = {
  dev
};

module.exports = config[env];
* Run npm install
* open console/terminal and cd into the application directory
* run node app.js
* You should see a message stating the app runs on specified port
