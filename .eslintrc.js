module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'camalCase': [
            2
        ],
        'id-length': [
            'error',
            15   
        ],
        'keyword-spacing': [
            'error', 
            { 'after': true,
              'before': true
            }
        ],
        'space-infix-ops': [
            'error', 
            { 'int32Hint': false}
        ],
        'comma-spacing': [
            'error',
             { 'before': false,
               'after': true }
        ],
        'space-before-blocks': [
           'error',
        ],
        'spaced-comment': [
            'error',
            'always'
        ],
        'beforeColon': [
            true
        ],
        'afterColon': [
            true
        ], 
        'no-multi-spaces': [
            'error'
        ],
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-before-function-paren': [
            'error',
            'never'
        ],
        'func-call-spacing': [
            'error',
            'never'
        ],
        'no-multiple-empty-lines': [
            'error', 
            {'max': 0 }
        ],
        'padded-blocks': [
            'error',
            {'blocks': 'never'}
        ],
        'no-floating-decimal': [
            'error'
        ],
        'object-property-newline': [
            'error'
        ],
        'brace-style': [
            'error'
        ],
        'eqeqeq': [
            'error',
             'always',
             {"null": "ignore"}
        ],
        'no-array-constructor': [
            'error',
        ]
    }
};