import Vue from 'vue';
import axios from 'axios';

import Form from './core/Form';


import Example from './components/Example';


/* assign to have access all over the project files */
window.axios = axios;
window.Form = Form;

new Vue({
    el: '#app',

    components: {
    	Example
    },
    data: {
        form: new Form({
            name: '',
            description: ''
        })
    },

    methods: {
        onSubmit() {
            this.form.post('/projects')
            .then(response => alert('Wahoo!'));
        }
    }
});
