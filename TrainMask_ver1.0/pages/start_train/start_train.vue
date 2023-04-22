<template>
	<view>
		<view class="top">
			<view class="time"></view>
			<view class="title"></view>
		</view>
		<view class="bottom">
			<view class="mini">
				<button>最小化</button>
			</view>
			<view class="add-movement">
				<button @click="addmovement">添加动作</button>
			</view>
			<view class="setting">
				<button>设置</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			addmovement(){
				uni.switchTab({
					url:'/pages/home/home'
				})
				console.log("click")
			}
		}
	}
</script>

<style>

</style>
