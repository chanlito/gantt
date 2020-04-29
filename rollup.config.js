import merge from 'deepmerge';
import sass from 'rollup-plugin-sass';
import uglify from 'rollup-plugin-uglify';

const dev = {
    input: 'src/index.js',
    output: {
        name: 'Gantt',
        file: 'dist/frappe-gantt.js',
        format: 'es'
    },
    plugins: [
        sass({
            output: 'dist/frappe-gantt.css'
        })
    ]
};

const prod = merge(dev, {
    output: {
        file: 'dist/frappe-gantt.min.js'
    },
    plugins: [uglify()]
});

export default [dev, prod];
