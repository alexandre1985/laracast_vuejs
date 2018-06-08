Vue.component('message', {
	template: `
		<article class="message">
			<div class="message-header">
				<p>{{ title }}</p>
				<button class="delete" aria-label="delete" @click="isVisible"></button>
			</div>
			<div class="message-body" v-show="visible">
				<slot></slot>
			</div>
		</article>
	`,
	props: ['title', 'body'],
	data() {
		return {
			visible: true,
		};
	},
	methods: {
		isVisible() {
			this.visible = ! this.visible;
		}
	}
});

new Vue({
	el: '#root',
});

Vue.config.devtools = true;
