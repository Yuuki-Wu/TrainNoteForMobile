<template>
	<view>
		<view class="top">
			<view class="time"></view>
			<input class="title" placeholder="请输入本次训练标题" />
		</view>
		<view class="middle">
			<view class="minibox">
				<view class="box" v-for="(item,index) in addItem " :key="index">
					<view class="boxImg">
						<image :src="getImg(index)" @click="goDetail(index)"></image>
						<text>{{addItem[index].movementName}}</text>
						<text> {{ addItem[index].set + '组'}}</text>
						<text>totalweight</text>
					</view>

					<view class="boxNum" v-for="item in addItem[index].set">
						<input class="weight" placeholder="次" @input="setInput($event,item,0)" />
						<input class="times" placeholder="Kg" />
						<button class="complete" size="mini">√</button>
						<button class="delete" size="mini">...</button>
					</view>
					<view class="boxOperate">
						<button size="mini" @click="addgroup(index)">新增一组</button>
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
				movementList: [],
				planList: [],
				singalList: [],
				count: 0
			}
		},
		methods: {
			addmovement() {
				uni.navigateTo({
					url: '/pages/add_movement/add_movement'
				}, )
			},
			setting() {
				uni.switchTab({
					url: '/pages/home/home'
				})
				console.log("click")
			},
			mini() {},
			find() {

			},
			async getList() {
				const res = await this.$getList({
					url: '/user/getListUser'
				})
			},
			addgroup(index) {
				this.list = {
					movement_name: this.addItem[index].movementName,
					set: 0,
					data: {
						weight: 0,
						times: 0
					}
				}

				this.movementList.push(this.list)
				this.movementList[this.count].set = this.addItem[index].set
				this.addItem[index].set++
				this.count++
				console.log(this.movementList)
			},
			getImg(index) {
				let url = "http://localhost:920/view/movement/" + this.addItem[index].movementPositionEn + '/' + this
					.addItem[index].movementImg + '.gif'
				return url
			},
			goDetail(index) {
				uni.navigateTo({
					url: '/pages/movement-detail/movement-detail?img=' + this.addItem[index].movementImg
				})
			},
			weightInput: function(e) {

			},
			setInput(e, index, num) {
				console.log(index)
				this.movementList[index].data.times = e.target.value
			}
		},
		onLoad() {
			uni.$on('addItem', res => {
				this.addItem = res;
			})
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

	.middle {
		.minibox {
			border-width: 2rpx;
			border-style: solid;
			border-radius: 8rpx;
			border-bottom-color: #19d9ff; //设置底部边框色值为#EEEEEE透明度为35%
			border-top-color: #19d9ff; //设置顶部边框线为透明，如不设置则默认显示黑色
			border-left-color: #19d9ff; //设置左侧边框线为透明，如不设置则默认显示黑色
			border-right-color: #19d9ff;

			.box {
				margin-top: 30rpx;
				border-width: 2rpx;
				border-style: solid;
				border-radius: 8rpx;
				border-bottom-color: #ff0000; //设置底部边框色值为#EEEEEE透明度为35%
				border-top-color: #ff0000; //设置顶部边框线为透明，如不设置则默认显示黑色
				border-left-color: #ff0000; //设置左侧边框线为透明，如不设置则默认显示黑色
				border-right-color: #ff0000;

				.boxImg {
					display: flex;

					image {
						width: 100rpx;
						height: 100rpx;
					}
				}

				.boxNum {
					display: flex;

					.weight {
						background-color: #f0f0f0;
						width: 50rpx;

					}

					.times {
						margin-left: 20rpx;
						background-color: #f0f0f0;
						width: 50rpx;
					}

					.complete {
						background-color: #f0f0f0;
					}

					.delete {
						background-color: #f0f0f0;
					}
				}

				.boxOperate {}
			}
		}
	}

	.bottom {
		display: flex;
		margin-top: 70vh;
		margin-left: 50;
	}
</style>
