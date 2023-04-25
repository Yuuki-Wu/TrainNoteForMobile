<template>
	<view class="mov">
		<view class="tit">tit</view>
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
							<image :src="getImg(index)" @click="goDetail(index)"></image>
							<text> {{ movement[index].movementName }}</text>
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
					'背',
					'有氧'
				],
				flag: false,
				res: '',
				position: '',
				selectedItem: [],
				movement: []
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

		.tit {}

		.content {
			display: flex;

			.left {
				border-right: 1px solid #000000;
				width: 20%;
				height: calc(100vh - var(--window-top) - 50rpx);

				.position {
					margin-top: 10rpx;

					text {
						font-size: 50rpx;

					}
				}
			}

			.right {
				display: flex;
				flex-direction: row;
				flex-flow: wrap;
				border-right: 1px solid #000000;
				border-left: 1px solid #000000;
				width: 80%;

				height: calc(100vh - var(--window-top));

				.box {
					display: flex;
					flex-direction: column;
					margin-left: 25rpx;
					margin-top: 15rpx;
					background-color: #ffffff;
					image {
						height: 250rpx;
						width: 250rpx;
					}

					text {
						background-color: #ffffff;
						text-align: center;
						width: 250rpx;
						
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
