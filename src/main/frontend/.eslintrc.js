module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "no-var": [
            "error"
        ],
        "indent": [
            "warn",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "curly": [
            "error",
            "all"
        ],
        "eqeqeq": [
            "warn",
            "always"
        ],
        "no-useless-return": [
            "warn"
        ],
        "no-console":  [
            "error", {allow: ["log", "warn", "error"]}
        ],
        "eqeqeq": [
            "error"
        ],
        "yoda": [
            "error"
        ],
        "no-console": [
            "warn", {allow: ["log", "warn", "error"]}
        ],
        "no-unused-vars": [
            "off"
        ],
        "no-undef": [
            "off"
        ]
    }
};
