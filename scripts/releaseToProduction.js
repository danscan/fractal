/* eslint-disable no-undef */
require('shelljs/global');

// - Ensure script dependencies are available -
if (!which('curl')) {
  echo('Sorry, this script requires curl');
  exit(1);
}

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

// - (Configuration) -
const apphubAppId = process.env.APPHUB_APP_ID;
const apphubAppSecret = process.env.APPHUB_APP_SECRET;
const apphubBuildTarget = 'all';
const apphubBuildLocation = './build.zip';
const latestCommitMessageQueryExecResult = exec('git log -1 --pretty=%B');
const apphubBuildDescription = latestCommitMessageQueryExecResult.code === 0
                              ? latestCommitMessageQueryExecResult.stdout
                              : '';

// - Create Apphub build -
if (exec('npm run apphub:build').code !== 0) {
  echo('Error: Apphub build failed');
  exit(1);
}

// - Ensure Apphub build yielded `build.zip` -
if (exec('ls ' + apphubBuildLocation).code !== 0) {
  echo('Error: Apphub build did not yield `build.zip`');
  exit(1);
}

// - Upload Apphub build & release for all users -
const releaseSuccessful = exec(
  'curl -X PUT '
  + '-H "X-AppHub-Application-ID: ' + apphubAppId + '"'
  + '-H "X-AppHub-Application-Secret: ' + apphubAppSecret + '"'
  + '-H "Content-Type: application/zip"'
  + '-H \'X-AppHub-Build-Metadata: {'
    + '"target": "' + apphubBuildTarget + '",'
    + '"description": "' + apphubBuildDescription + '",'
  + '}\''
  + '-L https://api.apphub.io/v1/upload'
  + '--upload-file ' + apphubBuildLocation
).code === 0;

if (releaseSuccessful) {
  echo('Apphub build released for all users');
}
