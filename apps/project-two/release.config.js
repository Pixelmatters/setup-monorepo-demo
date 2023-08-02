const sharedConfig = require('release-config')
const { name } = require('./package.json')

module.exports = {
  ...sharedConfig,
  tagFormat: `${name}@\${version}`,
}
