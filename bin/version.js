const { exec } = require('child_process');

const type = process.argv[2];

function getNextVersion(currentVersion, type) {
  const [major, minor, patch] = currentVersion.split('.').map((x) => Number(x));
  const versionsMap = {
    major: `${major + 1}.0.0`,
    minor: `${major}.${minor + 1}.0`,
    patch: `${major}.${minor}.${patch + 1}`,
  };
  return versionsMap[type];
}

if (!['patch', 'minor', 'major'].includes(type)) {
  console.log('Select valid type');
  return;
}

exec('npm show @thesaurus/components version', (err, stdout) => {
  if (err) {
    console.error(err);
  } else {
    const nextVersion = getNextVersion(stdout, type);

    exec(`npm version ${nextVersion}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`npm version ${nextVersion}`);
      }
    });
  }
});
