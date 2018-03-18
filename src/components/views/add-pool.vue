<style lang="less">
   .add-pool-view {
   		width: 346px;

   		.view-caption {
   			display: block;
   			padding-bottom: 30px;
   		}

   		.buttons {
   			padding-top: 4px;
   		}
   }
</style>

<template>
	<div class="view-content add-pool-view">
		<span class="view-caption">Settings / Add pool</span>
		<text-editor caption="Pool name" width="300" />
		<text-editor caption="Pool URL" width="300" />
		<div class="flex-row buttons">
			<small-button text="Cancel" />	
			<small-button text="Save" />
		</div>
	</div>
</template>

<script>
  import SmallButton from '../controls/button.vue';
  import TextEditor from '../controls/editor.vue';

  export default {
    components: {
      TextEditor,
      SmallButton
    },

    data () {
      return {
    
      }
    }
  }
</script>