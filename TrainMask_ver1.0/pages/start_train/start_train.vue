<template>
	<view>
		<view class="top">
			<view class="time"></view>
			<view class="title" @click="find">请输入标题</view>
		</view>
		<view class="middle">
			<view class="minibox">
				<view class="box">
					<view class="boxImg">
						<image src="../../static/logo.png"></image>
						<text>name</text>
						<text>totalweight</text>
					</view>
					<view class="boxNum">
						<text>num</text>
						<input class="weight" placeholder="次"/>
						<input class="times" placeholder="Kg"/>
						<button class="complete" size="mini">√</button>
						<button class="delete" size="mini">...</button>
					</view>
					<view class="boxOperate">
						<button size="mini">新增一组</button>
						<button size="mini">历史</button>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="mini">
				<button @click="getList" size="mini" type="primary">最小化</button>
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
	export default {
		data() {
			return {
				list: [],
				total_weight: 0,
				total_set: 0,
				total_movement: 0,
				feeling: '',
				addItem: [],
				movementList: [{
					movement_name: '',
					movement_weight: 0,
					movement_set: 0,
					movement_img: ''
				}]
			}
		},
		methods: {
			addmovement() {
				uni.redirectTo({
					url: '/pages/add_movement/add_movement'
				}, )
			},
			setting() {
				uni.switchTab({
					url:'/pages/home/home'
				})
				console.log("click")
			},
			mini() {},
			find() {
				
				// uni.request({
				// 	url: '/pages/add_movement/add_movement',
				// 	data:'this.addItem[0]',
				// 	method:"POST",
				// 	timeout:10000
				// })
				console.log(this.addItem)
			},
		     async getList() {	
				const res = await this.$getList({
					url:'/user/getListUser'
				})
				this.addItem = res.data[0]	
				console.log(res.data[0])
			}
		},
		onLoad() {
			console.log("1")
			uni.$on('addItem', res => {
				console.log(res);
				this.addItem = res;
			})
			console.log("2")
		},
		onUnload() {
			uni.$off('addItem')
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		padding: 0;
	}

	.top {}
	.middle{
		.minibox{
			border-width: 2rpx;
			border-style: solid;
			border-radius: 8rpx;
			border-bottom-color: #19d9ff; //设置底部边框色值为#EEEEEE透明度为35%
			border-top-color: #19d9ff; //设置顶部边框线为透明，如不设置则默认显示黑色
			border-left-color: #19d9ff; //设置左侧边框线为透明，如不设置则默认显示黑色
			border-right-color: #19d9ff;
			.box{
				.boxImg{
					display: flex;
					image{
						width: 50rpx;
						height: 50rpx;
					}
				}
				.boxNum{
					display: flex;
					.weight{
						background-color: #f0f0f0;
						width: 50rpx;
					
					}
					.times{
						margin-left: 20rpx;
						background-color: #f0f0f0;
						width: 50rpx;
					}
					.complete{
						background-color: #f0f0f0;
					}
					.delete{
						background-color: #f0f0f0;
					}
				}
				.boxOperate{
					
				}
			}
		}
	}
	.bottom {
		display: flex;
		margin-top: 80vh;
		margin-left: 50;
	}
</style>
