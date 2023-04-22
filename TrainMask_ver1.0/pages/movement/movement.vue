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
				<view class="back" v-if="res=='背'" v-for="(item, name) in movement.backItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)" @click="goDetail(name)"></image>
						<text> {{movement.backItem[name].name}}</text>
					</view>
				</view>
				<view class="biceps" v-if="res=='二头'" v-for="(item, name) in movement.bicepsItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)" @click="goDetail(name)"></image>
						<text> {{movement.bicepsItem[name].name}}</text>
					</view>
				</view>
				<view class="triceps" v-if="res=='三头'" v-for="(item, name) in movement.tricepsItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)" @click="goDetail(name)"></image>
						<text> {{movement.tricepsItem[name].name}}</text>
					</view>
				</view>
				<view class="abs" v-if="res=='腹部'" v-for="(item, name) in movement.absItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)" @click="goDetail(name)"></image>
						<text> {{movement.absItem[name].name}}</text>
					</view>
				</view>
				<view class="leg" v-if="res=='腿'" v-for="(item, name) in movement.legItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)" @click="goDetail(name)"></image>
						<text> {{movement.legItem[name].name}}</text>
					</view>
				</view>
				<view v-if="res=='有氧'">
					<view class="box"></view>
				</view>
				<view class="chest" v-if="res=='胸'" v-for="(item, name) in movement.chestItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)" @click="goDetail(name)"></image>
						<text> {{movement.chestItem[name].name}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>

</template>

<script>
	import movement from '@/common/util.js'
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
				movement:movement.data
			}
		},
		methods: {
			goDetail(n) {
				uni.navigateTo({
					url: '/pages/movement-detail/movement-detail?Name=' + this.selectedItem[n].name + '&Img=' +
						"../../static/movement/" + this.position + '/' + this.selectedItem[n].img +
						'.gif&detail=' + this.selectedItem[n].detail + '&steps=' + this.selectedItem[n].steps
				})
			},
			clickImg(position, name) {
				uni.navigateTo({
					url: '/pages/movement-detail/' + position + '/' + name + '/' + name
				})
			},
			selectPosition(res) {
				console.log(this.movement)
				this.res = res
				if (res === '胸') {
					this.position = 'chest'
				} else if (res === '腿') {
					this.position = 'leg'
				} else if (res === '背') {
					this.position = 'back'
				} else if (res === '二头') {
					this.position = 'biceps'
				} else if (res === '三头') {
					this.position = 'triceps'
				} else if (res === '腹部') {
					this.position = 'abs'
				} else if (res === '有氧') {

				}
				this.selectedItem = this.movement[this.position + 'Item']
				console.log(this.selectedItem)
			},
			getImg(position, name, selectedItem) {
				return require("@/static/movement/" + this.position + '/' + this.selectedItem[name].img + '.gif');
			}
		},
		onLoad() {

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
				width: 100rpx;
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
				flex-flow: row wrap;
				border-right: 1px solid #000000;
				border-left: 1px solid #000000;
				width: 100%;

				height: calc(100vh - var(--window-top));

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
