Vue.component('modal', {
	template: `
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-card">
		    <header class="modal-card-head">
		      <p class="modal-card-title">
		      	<slot name="header"></slot>
		      </p>
		      <button class="delete" aria-label="close" @click="$emit('close-modal')"></button>
		    </header>
		    <section class="modal-card-body">
		      <slot>
		      Conteúdo por omissão
		      </slot>
		    </section>
		    <footer class="modal-card-foot">
		      <slot name="footer">
		      	<button class="button is-success">Ok</button>
		      </slot>
		    </footer>
		  </div>
		</div>
	`
});

new Vue({
	el: '#root',
	data: {
		showModal: true
	}
});

Vue.config.devtools = true;
