<style lang="less">
	.treeview {
		font-size: 13px;
		color: #000000;
		line-height: 13px;

		.header {
			cursor: pointer;
			display: flex; 
			padding-bottom: 10px;
		}

		.item {
			padding-left: 20px;
		}
			
		.expand-icon {
			margin-top: 1px;
		}

		.collapse-icon {
			margin-top: 3px;
		}

		.column:first-child {
			padding-left: 5px;
		}
	}
</style>

<template>
	<div class="treeview">
		<div class="header" v-if="showRoot" @click="toggle">
			<div class="expand-icon" v-if="!open && isExpandble" />
			<div class="collapse-icon" v-if="open && isExpandble" />
			<div class="flex-row">
			    <div class="column" v-for="column in model.columns" :style="{ width: column.width + 'px' }">
			    	{{ column.text }}
			    </div>
		    </div>
	    </div>
	    <div class="item" v-show="open || !showRoot" v-if="isExpandble">
	      <treeview showRoot="true" v-for="(model, index) in model.children" 
	      	:key="index" :model="model" />
	    </div>
	 </div>
</template>

<script>
	export default {
		name: 'treeview',

		props: {
		    model: Object,

		    showRoot: {
		    	default: false
		    }
		},
		
		data: function () {
		    return {
		      	open: false
		    }
		},
		
		computed: {	
		    isExpandble: function () {
		    	return this.model.children && this.model.children.length;
		    }
		},
		
		methods: {	
		    toggle: function () {
		    	if (this.isExpandble)
		        	this.open = !this.open
			}
		}
	}
</script>

