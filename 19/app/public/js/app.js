class Errors {
	constructor() {
		this.errors = {};
	}
	has(field) {
		return this.errors.hasOwnProperty(field);
	}
	get(field) {
		if(this.errors[field]) {
			return this.errors[field][0];
		}
	}
	record(errors) {
		this.errors = errors;
	}
	clear(field) {
		delete this.errors[field];
	}
	any() {
		return Object.keys(this.errors).length !== 0;
	}
}

new Vue({
	el: '#app',

	data: {
		name: '',
		description: '',
		errors: new Errors()
	},

	methods: {
		onSubmit() {
			axios.post('/projects', {
				name: this.name,
				description: this.description
			}).then(this.onSuccess)
			.catch(error => this.errors.record(error.response.data.errors));
		},

		onSuccess(response) {
			alert(response.data.message);
			this.name = '';
			this.description = '';
		}
	}
});
