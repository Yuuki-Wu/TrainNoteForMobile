<template>
	<view>
		<button @click="navigator">开始训练</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			navigator(){
				uni.navigateTo({
					url:'/pages/start_train/start_train'
				})
			}
		},
		onLoad() {

		}
	}
</script>

<style lang="scss">

</style>
