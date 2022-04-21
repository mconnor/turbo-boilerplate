module.exports = {
    extends: [
        'universe/native',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            globalReturn: false,
        },
        ecmaVersion: 'latest',
        requireConfigFile: false,
        jsxFragmentName: null,
        lib: ['ESNext'],
        tsconfigRootDir: process.cwd(),
        project: [
            '../../apps/hybrid-native/tsconfig.json',
            '../../packages/*/tsconfig.json',
            '../../shared/*/tsconfig.json',
            './tsconfig.json',
        ],
    },
    plugins: ['graphql', '@typescript-eslint'],
    rules: {
        // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'off',
        'react/function-component-definition': [
            0,
            { namedComponents: 'function-declaration' },
        ],
        // 'sort-import': 'off',
        'react/jsx-key': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-unused-vars': 'warn',

        'react/react-in-jsx-scope': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        'import/extensions': 0,
        'import/group-exports': 1,
        'react/prop-types': 1,
        'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
        'react/require-default-props': 0,
        'import/no-cycle': [2, { maxDepth: 1 }],
        'import/prefer-default-export': 0,
        'no-underscore-dangle': 'off',
        'react/forbid-prop-types': [
            1,
            {
                forbid: ['any', 'array', 'object'],
                checkContextTypes: true,
                checkChildContextTypes: true,
            },
        ],
        'no-shadow': 'off',
        camelcase: 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks:
                    '(useDrawer|useProductVisibility|useDeepCompareEffect)',
            },
        ],
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'dot-notation': 'off',
        'no-unused-vars': 'off',

        // It's not accurate in the monorepo style
        'import/no-extraneous-dependencies': 'off',
        // Use function hoisting to improve code readability
        'no-use-before-define': [
            'error',
            { functions: false, classes: true, variables: true },
        ],
        // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
                typedefs: true,
            },
        ],
        'func-names': ['error', 'always'],
        'react/no-unescaped-entities': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        'global-require': 'warn',
        // note you must disable the base rule as it can report incorrect errors
        'no-return-await': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    globals: {
        JSX: 'readonly',
    },
}
