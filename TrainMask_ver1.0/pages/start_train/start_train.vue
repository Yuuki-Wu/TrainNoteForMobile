<template>
	<view>
		<view class="top">
			<view class="time"></view>
			<view class="title">请输入标题</view>
		</view>
		<view class="middle">
			
		</view>
		<view class="bottom">
			<view class="mini">
				<button @click="mini" size="mini" type="primary">最小化</button>
			</view>
			<view class="add-movement">
				<button @click="addmovement" size="mini" type="default">添加动作</button>
			</view>
			<view class="setting">
				<button @click="setting" size="mini" type="primary">设置</button>
			</view>
		</view>
	</view>
</template>

<script>
	import data from "@/common/util.js"
	export default {
		data() {
			return {
				list: [],
				total_weight: 0,
				total_set: 0,
				total_movement: 0,
				feeling: '',
				data:data.data
			}
		},
		methods: {
			addmovement() {
				uni.navigateTo({
					url: '/pages/test/test'
				})
				console.log("click")
			},
			setting() {
				uni.navigateTo({
					url: '/pages/add_movement/add_movement'
				})
			},
			mini() {
				console.log(this.list)
			},
			find(){
				console.log(this.list[1])
			}
		},
		onLoad: function(option) {
			console.log(option)
			this.list = option
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		padding: 0;
	}

	.top {}

	.bottom {
		display: flex;
		margin-top: 80vh;
		margin-left: 50;
	}
</style>
