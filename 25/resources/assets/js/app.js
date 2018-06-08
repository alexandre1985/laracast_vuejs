/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));


Vue.component('coupon', {
	props: ['code'],

	template: '<input type="text" :value="code" @input="updateCode($event.target.value)" ref="input">',


	data() {
		return {
			invalids: ['ALLFREE', 'FREE2018']
		}
	},

	methods: {
		updateCode(newInput) {
			// validation
			if (this.invalids.includes(newInput)) {
				alert('This code is no longer valid. Sorry');

				this.$refs.input.value = newInput = '';
			}
			this.$emit('input', newInput);
		}
	}
});


new Vue({
    el: '#app',

    data: {
    	coupon: ''
    }
});
