<template>
	<view class="mov">
		<view class="tit">tit</view>
		<view class="content">
			<view class="left" style="border-right: 20rpx color: #38a51f;;">left</view>
			<view class="right">

				<view class="box" >
					<image src="/static/movement/引体向上.gif" @click="clickImg('back','pull-up')"></image>
					<text>引体向上</text>
				</view>
				<view class="box">
					<image src="/static/movement/引体向上.gif"></image>
					<text>引体向上</text>
				</view>
				<view class="box">
					<image src="/static/movement/引体向上.gif"></image>
					<text>引体向上</text>
				</view>
				<view class="box">
					<image src="../../static/movement/杠铃划船.gif" @click="clickImg('chest','barbell-rows')"></image>
					<text>杠铃划船</text>
				</view>
			</view>
		</view>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				list: [],
				
			}
		},
		methods: {
			clickImg(position, name){
				uni.navigateTo({
					url:'/pages/movement-detail/'+position+'/'+name+'/'+name
				})
			}
		},
		onLoad() {

		}
	}
</script>

<style lang="scss">
	.mov {
		background-color: #f0f0f0;

		.tit {}

		.content {
			display: flex;

			.left {}

			.right {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;

				.box {
					display: flex;
					flex-direction: column;
					margin-left: 10rpx;
					margin-top: 15rpx;

					image {
						height: 200rpx;
						width: 200rpx;
					}

					text {
						background-color: #ffffff;
						text-align: center;
					}

					border-width: 2rpx;
					border-style: solid;
					border-radius: 8rpx;
					border-bottom-color: #ffffff; //设置底部边框色值为#EEEEEE透明度为35%
					border-top-color: #ffffff; //设置顶部边框线为透明，如不设置则默认显示黑色
					border-left-color: #ffffff; //设置左侧边框线为透明，如不设置则默认显示黑色
					border-right-color: #ffffff;
				}
			}
		}

	}
</style>
