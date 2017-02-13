module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "rules": {
        'react/prefer-stateless-function': 0, //react 组件建议使用纯函数
        'no-mixed-spaces-and-tabs': 0,
        'comma-dangle': 0, //最后一项逗号
        'react/jsx-indent': 0,
        'react/jsx-indent-props': 0,
        'react/jsx-no-bind': 0,
        'indent': 0,
    }
};
