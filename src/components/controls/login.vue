<style lang="less">
	.auth {
		display: flex;
		font-size: 24px;
		color: #96A0A9;

		.separator {
			width: 20px;
		}
	}
</style>

<template>
	<div class="auth">
		<div class="user-name">{{ userName }}</div>
		<div class="separator" />
		<div class="auth-button">
			<a href="javascript:;">
				{{ buttonText }}
			</a>
		</div>
	</div>
</template>

<script>

export default {
	name: "auth",

	props: {
		userName: {
			default: 'Andrey Churkin'
		}
	},

	data: function() { 
		return {
    		buttonText: 'Logout'
  		};
  	}
}
</script>

