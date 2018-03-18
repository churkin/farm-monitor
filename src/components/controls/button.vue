<style lang="less">
	.small-button {
		&.hovered {
			background-color: #14AAF5;
			color: White;
		}
		
		background: rgba(0,0,0,0.00);
		border: 1px solid #14AAF5;
		
		-webkit-border-radius: 3px;
		-moz-border-radius: 3px;
		border-radius: 3px;

		cursor: pointer;
		  
		font-size: 13px;
		color: #000000;
		text-align: center;
		line-height: 24px;
	}
</style>

<template>
	<div v-on:mouseover="classObject.hovered = true" 
		 v-on:mouseleave="classObject.hovered = false"
		 v-on:click="$emit('click')"
		 :class="classObject"
		 :style="styleObject">
		{{ text }}
	</div>
</template>

<script>

	export default {
		name: "small-button",

		props: {
			text: {
				default: 'default'
			}, 
			width: {
				default: 68
			}, 
			height: {
				default: 24
			}
		},

		data: function() { 
			return {
	    		classObject: {
	    			'small-button': true,
	    			hovered: false
	  			},
	  			styleObject: {
	    			width:  this.width + 'px',
	    			height: this.height + 'px'
	  			}
	  		};
	  	}
	}
	
</script>

