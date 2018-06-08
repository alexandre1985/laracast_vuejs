Vue.component('progress-view', {
	data() {
		return {
			rateProgression: 50
		};
	}
});

new Vue({
	el: '#root',
});

Vue.config.devtools = true;
