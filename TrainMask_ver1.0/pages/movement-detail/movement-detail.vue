<template>
	<view>
		<view class="top">
			<image :src="url"></image>
		</view>
		<view class="bottom">
			<view class="tit">
				<view class="main-point">
					<view class="note"></view>
					<view class="detail">
						<text>{{ this.detail }}</text>
					</view>
					<view class="steps">
						<text>{{ this.steps }}</text>
					</view>
				</view>
				<view class="history"></view>
				<view class="graph"></view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		name: 'detail',
		data(){
			return{
				url:'',
				detail:'',
				steps:''
			}
		},
		onLoad:function(option){
			this.url = option.Img
			this.detail = option.detail
			this.steps = option.steps
		}
	}
</script>

<style>
</style>
