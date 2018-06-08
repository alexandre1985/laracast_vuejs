Vue.component('task', {
	template: '<li><slot></slot></li>'
});

Vue.component('task-list', {
	template: '<div><task v-for="task in tasks">{{ task.description }}</task></div>',
	data() {
		return {
			tasks: [
				{ description: 'Ir passear', completed: false },
				{ description: 'Ir meditar', completed: true },
				{ description: 'Ir dormir', completed: false },
			]
		};
	}
});

new Vue({
	el: '#root',
});

Vue.config.devtools = true;
