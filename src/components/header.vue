<style lang="less">
	.header {
		display: flex;

		.logo-container {
			height: 96px;
			width: 250px;
			background-color: #222B37;
			padding-left: 20px;
			padding-top: 16px;
			border-bottom: 1px solid #FFFFFF;
			display: flex;
			line-height: 30px;

			.logo-text {
				padding-left: 10px;
				font-family: AndaleMono;
				font-size: 26px;
				color: #FFFFFF;
				letter-spacing: 0;
				text-align: 0;
			}
		}
		.header-content {
			border-bottom: 1px solid rgba(151,151,151,0.32);
			display: flex;
			justify-content: flex-end;
			flex-grow: 1;

			.purchase-button-container {
				padding-top: 12px;
			}

			.auth-container {
				padding-top: 30px;
				padding-left: 35px;
				padding-right: 55px;
			}
		}
	}
</style>

<template>
	<div class="header">
		<div class="logo-container">
			<div class="logo-icon" />
			<div class="logo-text">
				RIGS<br />CONTROL
			</div>
		</div>
		<div class="header-content">
			<div class="purchase-button-container">
				<purchase-button></purchase-button>
			</div>
			<div class="auth-container">
				<auth></auth>
			</div>
		</div>
	</div>
</template>

<script>
	import PurchaseButton from './controls/purchase-button.vue';
  	import Auth from './controls/login.vue';

	export default {
		name: "header",

		components: {
	      PurchaseButton,
	      Auth
	    }
	}
</script>

