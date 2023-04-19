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
						<text> {{backItem[name].name}}</text>
					</view>
				</view>
				<view class="biceps" v-if="res=='二头'" v-for="(item, name) in bicepsItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)"></image>
						<text> {{bicepsItem[name].name}}</text>
					</view>
				</view>
				<view class="triceps" v-if="res=='三头'" v-for="(item, name) in tricepsItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)"></image>
						<text> {{tricepsItem[name].name}}</text>
					</view>
				</view>
				<view class="abs" v-if="res=='腹部'" v-for="(item, name) in absItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)"></image>
						<text> {{abstItem[name].name}}</text>
					</view>
				</view>
				<view class="leg" v-if="res=='腿'" v-for="(item, name) in legItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)"></image>
						<text> {{legItem[name].name}}</text>
					</view>
				</view>
				<view v-if="res=='有氧'">
					<view class="box"></view>
				</view>
				<view class="chest" v-if="res=='胸'" v-for="(item, name) in chestItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)"></image>
						<text> {{chestItem[name].name}}</text>
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
				chestItem: [{
						img: 'Butterfly-Chest-Clip',
						name: '蝴蝶机夹胸'
					},
					{
						img: 'Decline-Barbell-Bench-Press',
						name: '下斜杠铃卧推'
					},
					{
						img: 'Decline-Dumbbell-Bench-Press',
						name: '下斜哑铃卧推'
					},
					{
						img: 'Dumbbell-Bench-Press',
						name: '哑铃平板卧推'
					},
					{
						img: 'Dumbbell-Flye',
						name: '哑铃飞鸟'
					},
					{
						img: 'Narrow-Bench-Press',
						name: '窄距卧推'
					},
					{
						img: 'Parallel-Bar-Extension',
						name: '双杆臂屈伸'
					},
					{
						img: 'Push-Ups',
						name: '俯卧撑'
					},
					{
						img: 'Smith-Barbell-Bench-Press',
						name: '史密斯杠铃卧推'
					},
					{
						img: 'Weighted-Push-Ups',
						name: '负重俯卧撑'
					},
				],
				legItem: [{
						img: 'Back-Pedal',
						name: '器械倒蹬'
					},
					{
						img: 'Barbell-Front-Squat',
						name: '前蹲'
					},
					{
						img: 'Barbell-Hip-Punch',
						name: '臀冲'
					},
					{
						img: 'Barbell-Lunge',
						name: '杠铃箭步蹲'
					},
					{
						img: 'Barbell-Single-Hip-Thrust',
						name: '单腿臀冲'
					},
					{
						img: 'Bulgarian-Barbell-Squat',
						name: '保加利亚杠铃深蹲'
					},
					{
						img: 'Bulgarian-Dumbbell-Squat',
						name: '保加利亚哑铃深蹲'
					},
					{
						img: 'High-Box-Squat',
						name: '高箱深蹲'
					},
					{
						img: 'Seated-Hip-Abduction',
						name: '坐姿髋内收'
					},
					{
						img: 'Seated-Hip-Adduction',
						name: '坐姿髋外展'
					},
					{
						img: 'Seated-Leg-Extension',
						name: '坐姿腿屈伸'
					},
					{
						img: 'Squat',
						name: '自重深蹲'
					},
					{
						img: 'Zech-Squat',
						name: '泽奇深蹲'
					}
				],
				absItem: [{
						img: 'Hanging-Leg-Raise',
						name: '悬挂抬腿'
					},
					{
						img: 'Rope-Kneeling-Crunch',
						name: '跪姿绳索卷腹'
					},
					{
						img: 'Russian-Twist',
						name: '俄罗斯转体'
					},
					{
						img: 'Sit-Ups',
						name: '仰卧起坐'
					},
				],
				bicepsItem: [{
						img: 'Barbell-Forehand-Curl',
						name: '正手杠铃弯举'
					},
					{
						img: 'Dumbbell-Curl',
						name: '哑铃弯举'
					},
					{
						img: 'Dumbbell-Overhand-Curl',
						name: '哑铃正手弯举'
					},
					{
						img: 'ez-Bar-Curl',
						name: 'ez杆弯举'
					},
					{
						img: 'Rope-Reverse-Curl',
						name: '反手绳索弯举'
					},
				],
				backItem: [{
						img: 'Assisted-Chin-Up',
						name: '辅助引体向上'
					},
					{
						img: 'Backhand-Barbell-Row',
						name: '反手杠铃划船'
					},
					{
						img: 'Barbell-Row',
						name: '杠铃划船'
					},
					{
						img: 'Dumbbell-Row',
						name: '哑铃划船'
					},
					{
						img: 'High-Pull-Down-Rope',
						name: '高位绳索下拉'
					},
					{
						img: 'Lever-Bent-Over-Row',
						name: '俯身划船'
					},
					{
						img: 'Prone-Incline-Wide-Grip-Upright-Row',
						name: '上斜仰卧宽距划船'
					},
					{
						img: 'Pull-Up',
						name: '引体向上'
					},
					{
						img: 'Wide-Pull-Downs',
						name: '高位下拉'
					}
				],
				tricepsItem: [{
						img: 'Barbell-Skull-Crusher',
						name: '碎颅者'
					},
					{
						img: 'Bent-Knee-Bench-Dip',
						name: '仰卧撑'
					},
					{
						img: 'Close-Grip-Push-Up',
						name: '窄距俯卧撑'
					},
					{
						img: 'Narrow-Bench-Press',
						name: '窄距卧推'
					},
					{
						img: 'Reverse-Grip-Triceps-Pushdown',
						name: '反手三头绳索臂屈伸'
					},
					{
						img: 'Seated-Bent-Over-Two-Arm-Dumbbell-Kickback',
						name: '坐姿俯身哑铃双手臂屈伸'
					},
					{
						img: 'Seated-Dumbbell-Overhead-Triceps-Extension',
						name: '坐姿哑铃过头臂屈伸'
					},
					{
						img: 'Standing-Barbell-Dips',
						name: '站姿杠铃臂屈伸'
					},
					{
						img: 'Triceps-Dip',
						name: '窄距双杆臂屈伸'
					},
					{
						img: 'Triceps-Rope-Push-Down',
						name: '绳索臂屈伸'
					}
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
