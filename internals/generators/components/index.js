/**
 * Generate components
 */

const componentExists = require('../utils/componentExists');


const config = {
    componentDirectory: '../../app/scripts/components/'
}

module.exports = {
    description: 'Add a component',
    prompts: [{
        type: 'list',
        name: 'type',
        message: 'Select the type of component',
        default: 'Stateless Function',
        choices: () => ['ES6 Class', 'Stateless Function'],
    }, {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Component',
        validate: value => {
            if ((/.+/).test(value)) {
                return componentExists(value) ? 'A component or container with this name already exists' : true;
            }
            return 'The name is required';
        },
    }],
    actions: data => {
        const actions = [{
            type: 'add',
            path: config.componentDirectory + '{{properCase name}}.js',
            templateFile: data.type === 'ES6 Class' ? './components/component.js.hbs' : './components/stateless.js.hbs',
            abortOnFail: true,
        }, {
            type: 'add',
            path: config.componentDirectory + '{{properCase name}}.test.js',
            templateFile: './components/test.js.hbs',
            abortOnFail: true,
        }];

        return actions;
    },
};
