const componentGenerator = require('./components/index.js');
const reduxGenerator = require('./redux/index.js');

module.exports = (plop) => {
    plop.setGenerator('component', componentGenerator);
    plop.setGenerator('redux', reduxGenerator);
};
