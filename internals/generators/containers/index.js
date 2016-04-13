/**
 * Generate components
 */

const componentExists = require('../utils/componentExists');


const config = {
    containerDirectory: '../../app/scripts/containers/'
}

module.exports = {
    description: 'Add a connected component for redux',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Container',
    }, {
        type: 'input',
        name: 'component',
        message: 'What component does it wrap?',
        default: 'Component',
    }],
    actions: data => {
        const actions = [{
            type: 'add',
            path: config.containerDirectory + '{{properCase name}}.js',
            templateFile: './containers/container.js.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: config.containerDirectory + '{{properCase name}}.test.js',
            templateFile: './container/container.test.js.hbs',
            abortOnFail: true,
        }];

        return actions;
    },
};
