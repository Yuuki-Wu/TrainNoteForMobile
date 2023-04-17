<template>
	<view class="mov">
		<view class="tit">tit</view>
		<view class="content">
			<view class="left" style="border-right: 20rpx color: #38a51f;;">left</view>
			<view class="right">
				
				<view class="box" >
					<image src="/static/movement/引体向上.gif" style="margin-top: 50rpx;"></image>
					<text>引体向上</text>
				</view>
				<view class="box" >
					<image src="/static/movement/引体向上.gif" style="margin-top: 50rpx;"></image>
					<text>引体向上</text>
				</view>
				<view class="box" >
					<image src="/static/movement/引体向上.gif" style="margin-top: 50rpx;"></image>
					<text>引体向上</text>
				</view>
			</view>
		</view>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		methods: {

		},
		onLoad() {

		}
	}
</script>

<style lang="scss">
	.mov{
		
		.tit{
			
		}
		.content{
			display: flex;
			
			.left{
				
			}
			
			.right{
				display: flex;
				flex-direction: row;
				.box{
					display: flex;
					flex-direction: column;
					image{
						height: 200rpx;
						width: 200rpx;
					}
				}
			}
		}
		
	}
</style>
