window.Event = new Vue();

Vue.component('coupon', {
	template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',
	methods: {
		onCouponApplied() {
			Event.$emit('applied');
		}
	}
});

new Vue({
	el: '#root',
	data: {
		showCouponMessage: false,
	},
	methods: {
		onCouponApplied() {
			this.showCouponMessage = true;
		}
	},
	created() {
		Event.$on('applied', () => alert('Event Handled!'));
	}
});

Vue.config.devtools = true;
