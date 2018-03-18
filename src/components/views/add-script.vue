<style lang="less">
   .add-script-view {
   		width: 346px;

   		.view-caption {
   			display: block;
   			padding-bottom: 30px;
   		}

   		.buttons {
   			padding-top: 4px;
   		}

   		.cancel-button {
   			margin-top: 3px;
   			margin-bottom: 14px;
   		}
   }
</style>

<template>
	<div class="view-content add-script-view">
		<span class="view-caption">Settings / Add miner script</span>		
		<text-editor caption="Miner script name" width="300" />
		<div>
			Script file
		</div>
		<small-button text="Cancel" class="cancel-button" />

		<text-area caption=".bat file" width="300" />
		<div class="flex-row buttons">
			<small-button text="Cancel" />	
			<small-button text="Save" />
		</div>
	</div>
</template>

<script>
  import SmallButton from '../controls/button.vue';
  import TextEditor from '../controls/editor.vue';
  import TextArea from '../controls/text-area.vue';

  export default {
    components: {
      TextEditor,
      SmallButton,
      TextArea
    },

    data () {
      return {
      };
    }
  }
</script>