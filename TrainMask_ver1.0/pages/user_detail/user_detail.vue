<template>
	<view>
		<input placeholder="昵称" />
		<input placeholder="kg" />
		<input placeholder="cm" />
		<button @click="changeImg()">更换头像</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			changeImg() {
				uni.chooseImage({
					count: 1,
					success: function(res) {

						console.log(JSON.stringify(res.tempFilePaths));

					}
				})
			}
		}
	}
</script>

<style>

</style>
