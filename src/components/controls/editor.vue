<style lang="less">
	.text-editor {
		& > div {
			padding-bottom: 3px;
		}

		input {
			font-size: 16px;
			line-height: 24px;

			-webkit-border-radius: 3px;
			-moz-border-radius: 3px;
			border-radius: 3px;

			font-family: Helvetica;
			color: #000000;

			background: #FFFFFF;
			border: 1px solid #979797;
			box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.50);
		}
	}
</style>

<template>
	<div class="text-editor">
		<div v-if="!!caption">{{ caption }}</div>
		<input class="text-editor" type="text" :value="defaultText" :style="styleObject" />
	</div>
</template>

<script>

	export default {
		name: "text-editor",

		props: {
			defaultText: {
				default: ''
			}, 

			caption: {
				default: ''
			},

			width: {
				default: 100
			}
		},

		data: function() { 
			return {
	  			styleObject: {
	    			width: this.width + 'px'
	  			}
	  		};
	  	}
	}
	
</script>

