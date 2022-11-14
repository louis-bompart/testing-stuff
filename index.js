const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log(process.version)
} catch (error) {
  core.setFailed(error.message);
}
