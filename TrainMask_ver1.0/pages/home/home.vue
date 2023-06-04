<template>
	<view class="tit">
		<view class="img" v-if="state">
			<image :src=getImg() ></image>
		</view>
		<view class="info">
			<view class="name">
				<image src="../../static/icon/name.png"></image>
				<text> {{ info[0].name }}</text>
			</view>
			<view class="weight">
				<image src="../../static/icon/weight.png"></image>
				<text> {{ "体重: " + info[0].weight +'kg'}}</text>
			</view>
			<view class="height">
				<image src="../../static/icon/height.png"></image>
				<text> {{ "身高: " + info[0].height + 'cm'}}</text>
			</view>
			<view class="edit">
				<button @click="navigator" plain="true" size="mini">修改个人信息</button>
			</view>

		</view>
		<view class="contact" @click="contact()">
			<image src="../../static/icon/contact.png"></image>
			<text>联系我们</text>
		</view>
	</view>
</template>

<script>
	import AppVue from '../../App.vue'
	export default {
		data() {
			return {
				uid: '',
				info: [],
				state: false
			}
		},
		methods: {
			click() {
				uni.getStorage({
					key: 'uid'
				})
			},
			getImg() {
				let url = "http://localhost:920/view/userinfo/" + this.info[0].img //url http://??:920 ??改成后端ip
				console.log(url)
				return url;
			},
			navigator() {
				uni.navigateTo({
					url: '/pages/user_detail/user_detail'
				})
			},
			contact() {
				uni.navigateTo({
					url: '/pages/contact/contact'
				})
			}
		},
		onLoad: async function() {
			const res = await this.$getList({
				url: '/userinfo/getUserInfo?uid=' + getApp().globalData.uid
			});
			this.info = res.data
			if (this.info.length > 0) {
				this.state = true
			}
		},
		onShow: async function() {
			const res = await this.$getList({
				url: '/userinfo/getUserInfo?uid=' + getApp().globalData.uid
			});
			this.info = res.data
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		background-color: #f0f0f0;
	}

	.tit {
		.img {
			image {
				width: 250rpx;
				height: 250rpx;
				border-radius: 50%;
			}
			border-width: 2rpx;
			border-style: solid;
			border-radius: 8rpx;
			border-bottom-color: #ffffff; //设置底部边框色值为#EEEEEE透明度为35%
			border-top-color: #ffffff; //设置顶部边框线为透明，如不设置则默认显示黑色
			border-left-color: #ffffff; //设置左侧边框线为透明，如不设置则默认显示黑色
			border-right-color: #ffffff;
		}

		.info {
			display: flex;
			flex-direction: column;
			.name{
				image{
					width: 100rpx;
					height: 100rpx;
				}
				text{
					font-size: 40rpx;
				}
				border-width: 2rpx;
				border-style: solid;
				border-radius: 8rpx;
				border-bottom-color: #ffffff; //设置底部边框色值为#EEEEEE透明度为35%
				border-top-color: #ffffff; //设置顶部边框线为透明，如不设置则默认显示黑色
				border-left-color: #ffffff; //设置左侧边框线为透明，如不设置则默认显示黑色
				border-right-color: #ffffff;
			}
			.weight{
				image{
					width: 100rpx;
					height: 100rpx;
				}
				text{
					font-size: 40rpx;
				}
				border-width: 2rpx;
				border-style: solid;
				border-radius: 8rpx;
				border-bottom-color: #ffffff; //设置底部边框色值为#EEEEEE透明度为35%
				border-top-color: #ffffff; //设置顶部边框线为透明，如不设置则默认显示黑色
				border-left-color: #ffffff; //设置左侧边框线为透明，如不设置则默认显示黑色
				border-right-color: #ffffff;
			}
			.height{
				image{
					width: 100rpx;
					height: 100rpx;
				}
				text{
					font-size: 40rpx;
				}
				border-width: 2rpx;
				border-style: solid;
				border-radius: 8rpx;
				border-bottom-color: #ffffff; //设置底部边框色值为#EEEEEE透明度为35%
				border-top-color: #ffffff; //设置顶部边框线为透明，如不设置则默认显示黑色
				border-left-color: #ffffff; //设置左侧边框线为透明，如不设置则默认显示黑色
				border-right-color: #ffffff;
			}
			.edit{
				border-width: 2rpx;
				border-style: solid;
				border-radius: 8rpx;
				border-bottom-color: #ffffff; //设置底部边框色值为#EEEEEE透明度为35%
				border-top-color: #ffffff; //设置顶部边框线为透明，如不设置则默认显示黑色
				border-left-color: #ffffff; //设置左侧边框线为透明，如不设置则默认显示黑色
				border-right-color: #ffffff;
			}
			text {
				margin-top: 20rpx;
				border-width: 2rpx;
				border-style: solid;
				border-radius: 8rpx;
				background-color: #ffffff;
			}

			border-width: 2rpx;
			border-style: solid;
			border-radius: 8rpx;
			border-bottom-color: #f0f0f0; //设置底部边框色值为#EEEEEE透明度为35%
			border-top-color: #f0f0f0; //设置顶部边框线为透明，如不设置则默认显示黑色
			border-left-color: #f0f0f0; //设置左侧边框线为透明，如不设置则默认显示黑色
			border-right-color: #f0f0f0;
		}

		.contact {
			image {
				width: 200rpx;
				height: 200rpx;
				border-radius: 5rpx;
			}
		}
	}
</style>
