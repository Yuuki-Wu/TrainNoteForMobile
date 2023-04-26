<template>
	<view class="mov">
		<view class="tit">
			<button @click="add" size="mini">添加</button>
		</view>
		<view class="content">
			<scroll-view enable-flex=true scroll-y="true" class="left">
				<view v-for="(item) in items" @click="selectPosition(item)">
					{{item}}
				</view>
			</scroll-view>
			<scroll-view enable-flex=true scroll-y="true" class="right">
				<view v-for="(item,index) in movement" :key="index">
					<view v-if="res==movement[index].movementPositionCn">
						<view :class="[movement[index].isSelected === 0? 'box' : 'box1']">
							<image :src="getImg(index)" @click="select(index)"></image>
							<text> {{ movement[index].movementName }}</text>
							<button @click="goDetail(index)" type="primary" size="mini">查看动作要点</button>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				items: ['腿',
					'胸',
					'二头',
					'三头',
					'腹部',
					'背'
				],
				flag: false,
				res: '',
				position: '',
				selectedItem: [],
				movement: [],
				addItem: []
			}
		},
		methods: {
			goDetail(index) {
				uni.navigateTo({
					url: '/pages/movement-detail/movement-detail?Index=' + index
				})
			},
			clickImg(position, name) {
				uni.redirectTo({
					url: '/pages/movement-detail/' + position + '/' + name + '/' + name
				})
			},
			selectPosition(res) {
				this.res = res
			},
			getImg(index) {
				let url = "http://localhost:920/view/movement/" + this.movement[index].movementPositionEn + '/' + this
					.movement[index].movementImg + '.gif'
				console.log(url)
				return url;
			},
			add(item) {
				setTimeout(() => {
					uni.$emit('addItem', this.addItem)
				}, 300)
				console.log(this.addItem)
				uni.redirectTo({
					url: '/pages/start_train/start_train'
				})
			},
			select(index) {
				if (this.movement[index].isSelected == 0) {
					this.movement[index].isSelected = 1;
				} else {
					this.movement[index].isSelected = 0;
				}
				if (this.movement[index].isSelected == 1) {
					this.addItem.push(this.movement[index].movementImg)
				} else {
					this.addItem.pop(this.movement[index].movementImg)
				}
				console.log(this.addItem)
			}
		},
		onLoad: async function() {
			const res = await this.$getList({
				url: '/user/getMovementList'
			});
			this.movement = res.data;
			console.log(res.data)
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.mov {
		background-color: #f0f0f0;

		.tit {
			position: absolute;

			text {
				font-size: 35rpx;
				margin-left: 20%;
			}
		}

		.content {
			display: flex;
			flex-direction: row;

			.left {
				border-right: 1px solid #000000;
				width: 20%;
				margin-top: 60rpx;

				.position {


					text {
						font-size: 50rpx;

					}
				}
			}

			.right {
				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
				border-right: 1px solid #000000;
				border-left: 1px solid #000000;
				width: 80%;

				height: 100vh;

				.box {
					display: flex;
					flex-direction: column;
					margin-left: 10rpx;
					margin-top: 15rpx;
					width: 35vw;

					image {
						height: 250rpx;
						width: 250rpx;
						border-radius: 50%;
					}

					button {
						color: #000000;
						background-color: #f0f0f0;
					}

					text {
						background-color: #ffffff;
						text-align: center;
						width: 250rpx;
					}

					background-color: #ffffff;
					border-width: 2rpx;
					border-style: solid;
					border-radius: 8rpx;
					border-bottom-color: #ffffff; //设置底部边框色值为#EEEEEE透明度为35%
					border-top-color: #ffffff; //设置顶部边框线为透明，如不设置则默认显示黑色
					border-left-color: #ffffff; //设置左侧边框线为透明，如不设置则默认显示黑色
					border-right-color: #ffffff;
				}

				.box1 {
					display: flex;
					flex-direction: column;
					margin-left: 10rpx;
					margin-top: 15rpx;
					width: 35vw;

					image {
						height: 250rpx;
						width: 250rpx;
						border-radius: 50%;
						background-color: #ff0000;

					}

					button {
						color: #000000;
						background-color: #f0f0f0;
					}

					text {
						background-color: #ffffff;
						text-align: center;
						width: 250rpx;
					}

					background-color: #ffffff;
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
