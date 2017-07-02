const path = require('path');

const SRC = path.join(__dirname, '../src');

module.exports = {
  // built-in
  // Support React Native Web
  // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
  'react-native': 'react-native-web',

  // customized
  actions: path.join(SRC, 'actions'),
  components: path.join(SRC, 'components'),
  constants: path.join(SRC, 'constants'),
  containers: path.join(SRC, 'containers'),
  reducers: path.join(SRC, 'reducers'),
  routes: path.join(SRC, 'routes'),
  sagas: path.join(SRC, 'sagas'),
  utils: path.join(SRC, 'utils'),
  img: path.join(SRC, 'assets', 'img'),
  stylesheet: path.join(SRC, 'stylesheet'),
};
