const componentGenerator = require('./components/index.js');
const reduxGenerator = require('./redux/index.js');
const containerGenerator = require('./containers/index.js');

module.exports = (plop) => {
    plop.setGenerator('component', componentGenerator);
    plop.setGenerator('redux', reduxGenerator);
    plop.setGenerator('container', containerGenerator);
};
