<template>
	<view>
		训练历史
		<view> {{ dateFormat(date) }}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				time: '',
				date: new Date().toISOString()
			}
		},
		methods: {

			dateFormat(time) {
				let date = new Date(time);
				let year = date.getFullYear();
				let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
				let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
				let today = year + '-' + month + '-' + day
				return today
			}
		}
	}
</script>

<style>

</style>
