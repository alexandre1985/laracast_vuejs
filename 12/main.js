Vue.component('coupon', {
	template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',
	methods: {
		onCouponApplied() {
			this.$emit('applied');
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
	}
});

Vue.config.devtools = true;
