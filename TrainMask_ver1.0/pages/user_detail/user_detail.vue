<template>
	<view>
		<view class="name">
			<text>昵称</text>
			<input placeholder="昵称" v-model="userInfo.name" type="nickname" />
		</view>
		<view class="weight">
			<text>体重</text>
			<input placeholder="请输入体重" v-model="userInfo.weight" type="digit"/>
			<text>kg</text>
		</view>
		<view class="height">
			<text>身高</text>
			<input placeholder="请输入身高" v-model="userInfo.height" type="digit"/>
			<text>cm</text>
		</view>
		<view class="image">
			<button plain="true" @click="changeImg()">更换头像</button>
		</view>
		<view class="sumbit">
			<button plain="true" @click="sumbit()">完成更改</button>
		</view>




	</view>
</template>

<script>
	import AppVue from '../../App.vue';
	export default {
		data() {
			return {
				userInfo: {
					name: '',
					img: '',
					height: undefined,
					weight: undefined
				}
			}
		},
		methods: {
			changeImg() {
				uni.chooseImage({
					count: 1,
					success: function(res) {
						const paths = res.tempFilePaths;
						let index = paths[0].indexOf(".");
						let format = paths[0].substr(index);
						uni.uploadFile({
							url: 'http://192.168.1.107:920/upload/user/image?uid=' + getApp()
								.globalData //url http://??:920 ??改成后端ip
								.uid,
							filePath: paths[0],
							name: 'file',
							formData: {
								'user': 'test'
							},
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data);
								uni.request({
									url: 'http://192.168.1.107:920/userinfo/updateUserInfo?uid=' +
										//url http://??:920 ??改成后端ip
										getApp().globalData.uid + '&img=' + getApp()
										.globalData.uid + format,
									success() {
										uni.showToast({
											title: '更改成功',
											icon: 'success'
										})
									}
								})

							}
						})
					}
				})
			},
			sumbit() {
				uni.request({
					url: 'http://192.168.1.107:920/userinfo/updateUserInfo?uid=' + getApp().globalData.uid +
						//url http://??:920 ??改成后端ip
						'&name=' + this.userInfo.name + '&height=' + this.userInfo.height + '&weight=' + this
						.userInfo.weight,
					success() {
						uni.showToast({
							title: '更改完成',
							icon: 'success'
						})
					},
					fail() {
						uni.showToast({
							title: '更改失败，请重试',
							icon: 'error'
						})
					}
				})


			}
		}
	}
</script>

<style lang="scss">
	.name {
		display: flex;
	}

	.weight {
		display: flex;
	}

	.height {
		display: flex;
	}

	.image {}

	.sumbit {}
</style>
