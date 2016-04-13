/**
 * Generate components
 */

const componentExists = require('../utils/componentExists');


const config = {
    reducersDirectory: '../../app/scripts/reducers/',
    constantsDirectory: '../../app/scripts/constants/',
    actionsDirectory: '../../app/scripts/actions/',
}

module.exports = {
    description: 'Add redux code',
    prompts: [{
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'ReducerName',
    }],
    actions: data => {
        const actions = [{
            type: 'add',
            path: config.constantsDirectory + '{{camelCase name}}.js',
            templateFile: './redux/constants.js.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: config.reducersDirectory + '{{camelCase name}}.js',
            templateFile: './redux/reducer.js.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: config.reducersDirectory + '{{camelCase name}}.test.js',
            templateFile: './redux/reducer.test.js.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: config.actionsDirectory + '{{camelCase name}}.js',
            templateFile: './redux/action.js.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: config.actionsDirectory + '{{camelCase name}}.test.js',
            templateFile: './redux/action.test.js.hbs',
            abortOnFail: true,
        }];

        return actions;
    },
};
