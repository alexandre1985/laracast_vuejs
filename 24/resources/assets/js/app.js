/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));


let model = {
	user: 'Daniel Santos'
};

new Vue({
    el: '#one',

    data: model
});

new Vue({
    el: '#two',

    data: model
});
