<style lang="less">
	.purchase-button {
		cursor: pointer;

		background: #F5A623;

		-webkit-border-radius: 10px;
		-moz-border-radius: 10px;
		border-radius: 10px;

		font-family: HelveticaNeue-Medium;
		font-size: 25px;
		line-height: 25px;
		padding-top: 20px;
		color: #FFFFFF;
		text-align: center;
	}
</style>

<template>
	<div v-on:click="$emit('click');this.alert('Buy it!!!')" class="purchase-button" :style="styleObject">
		{{ text }}
	</div>
</template>

<script>

export default {
	name: "purchase-button",

	props: {
		text: {
			default: 'Upgrade to Pro'
		}, 
		width: {
			default: 270
		}, 
		height: {
			default: 70
		}
	},

	data: function() { 
		return {
  			styleObject: {
    			width:  this.width + 'px',
    			height: this.height + 'px'
  			}
  		};
  	}
}
</script>

