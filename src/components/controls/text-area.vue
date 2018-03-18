<style lang="less">
	.text-area {
		& > div {
			padding-bottom: 3px;
		}

		textarea {
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
	<div class="text-area">
		<div v-if="!!caption">{{ caption }}</div>
		<textarea class="text-editor" type="text" :value="defaultText" :style="styleObject" />
	</div>
</template>

<script>

	export default {
		name: "text-area",

		props: {
			defaultText: {
				default: ''
			}, 

			caption: {
				default: ''
			},

			width: {
				default: 100
			},

			height: {
				default: 250
			}
		},

		data: function() { 
			return {
	  			styleObject: {
	    			width: this.width + 'px',
	    			height: this.height + 'px'
	  			}
	  		};
	  	}
	}
	
</script>

