import * as depend from 'eslint-plugin-depend';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';


/** @type {import('eslint-remote-tester').Config} */
const config = {
    repositories: ['staeco/iris-ql'],
    extensions: ['js'],
    rulesUnderTesting: (ruleId) => true,
    eslintConfig: [depend.configs['flat/recommended']],
    pathIgnorePattern: `(${[
        'node_modules',
        '\\/\\.', // Any file or directory starting with dot, e.g. ".git"
    ].join('|')})`,
};

export default config;
