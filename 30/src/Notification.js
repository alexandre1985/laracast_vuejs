export default {
	template: '<div>{{ message | capitalize }}</div>',

	props: ['message'],

	filters: {
		capitalize(text) {
			return text.toUpperCase();
		}
	}

};
