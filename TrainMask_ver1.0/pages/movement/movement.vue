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
				<view class="back" v-if="res=='背'" v-for="(item, name) in backItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)"></image>
					</view>
				</view>
				<view class="chest" v-if="res=='二头'" v-for="(item, name) in bicepsItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)"></image>
					</view>
				</view>
				<view class="chest" v-if="res=='三头'" v-for="(item, name) in tricepsItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)"></image>
					</view>
				</view>
				<view class="chest" v-if="res=='腹部'" v-for="(item, name) in absItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)"></image>
					</view>
				</view>
				<view class="leg" v-if="res=='腿'" v-for="(item, name) in legItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)"></image>
					</view>
				</view>
				<view class="chest" v-if="res=='有氧'">
					<view class="box"></view>
				</view>
				<view class="chest" v-if="res=='胸'" v-for="(item, name) in chestItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)"></image>
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
				chestItem: [
					'Butterfly-Chest-Clip',
					'Decline-Barbell Bench-Press',
					'Decline-Dumbbell-Bench-Press',
					'Decline-Dumbbell-Bench-Press',
					'Dumbbell-Flye',
					'Narrow-Bench-Press',
					'Parallel-Bar-Extension',
					'Push-Ups',
					'Smith-Barbell-Bench-Press',
					'Weighted-Push-Ups'
				],
				legItem: [
					'Back-Pedal',
					'Barbell-Front-Squat',
					'Barbell-Hip-Punch',
					'Barbell-Lunge',
					'Barbell-Single-Hip-Thrust',
					'Bulgarian-Barbell-Squat',
					'Bulgarian-Dumbbell-Squat',
					'High-Box-Squat',
					'Seated-Hip-Abduction',
					'Seated-Hip-Adduction',
					'Seated-Leg-Extension',
					'Squat',
					'Zech-Squat'
				],
				absItem: [
					'Hanging-Leg-Raise',
					'Rope-Kneeling-Crunch',
					'Russian-Twist',
					'Sit-Ups'
				],
				bicepsItem: [
					'Barbell-Forehand-Curl',
					'Dumbbell-Curl',
					'Dumbbell-Overhand-Curl',
					'ez-Bar-Curl',
					'Dumbbell-Overhand-Curl'
				],
				backItem: [
					'Assisted-Chin-Up',
					'Backhand-Barbell-Row',
					'Barbell-Row',
					'Dumbbell-Row',
					'High-Pull-Down-Rope',
					'Lever-Bent Over-Row',
					'Prone-Incline-Wide-Grip-Upright-Row',
					'Pull-Up',
					'Wide-Pull-Downs'
				],
				tricepsItem: [
					'Barbell-Skull-Crusher',
					'Bent-Knee-Bench-Dip',
					'Close-Grip-Push-Up',
					'Narrow-Bench-Press',
					'Reverse-Grip-Triceps-Pushdown',
					'Seated-Bent-Over-Two-Arm-Dumbbell-Kickback',
					'Seated-Dumbbell-Overhead-Triceps-Extension',
					'Standing-Barbell-Dips',
					'Triceps-Dip',
					'Triceps-Rope-Push-Down'
				]
			}
		},
		methods: {
			clickImg(position, name) {
				uni.navigateTo({
					url: '/pages/movement-detail/' + position + '/' + name + '/' + name
				})
			},
			selectPosition(res) {
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
				this.selectedItem = this[this.position + 'Item']
			},
			getImg(position, name, selectedItem) {

				return require("@/static/movement/" + this.position + '/' + this.selectedItem[name] + '.gif');

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
