<style lang="less">
	.grid-header {
		border-bottom: 1px solid #979797; 
		padding-top: 35px; 
		padding-bottom: 4px;

		& > .item:first-child {
			padding-left: 8px;
		}
	}
</style>

<template>
	<div class="grid-header flex-row">
        <div class="item" v-for="item in items" :style="{ width: item.width + 'px' }">
        	{{ item.text }}
        </div>
     </div>
</template>

<script>
	export default {
		name:  'grid-header',
		props: [ 'items' ]
	}
</script>