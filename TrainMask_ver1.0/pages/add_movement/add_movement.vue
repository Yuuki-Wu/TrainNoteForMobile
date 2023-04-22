<template>
	<view class="mov">
		<view class="tit">
			<button @click="add" size="mini">添加</button>
			<text> 动作介绍 </text>
		</view>
		<view class="content">
			<scroll-view enable-flex=true scroll-y="true" class="left">

				<view v-for="(item) in items" @click="selectPosition(item)">
					{{item}}
				</view>
			</scroll-view>
			<scroll-view enable-flex=true scroll-y="true" class="right">
				<view class="back" v-if="res=='背'" v-for="(item, name) in movement.backItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)" mode="widthFix" ></image>
						<text> {{movement.legItem[name].name}}</text>
						<button @click="goDetail(name)" type="primary" size="mini">查看动作要点</button>
					</view>
				</view>
				<view class="biceps" v-if="res=='二头'" v-for="(item, name) in movement.bicepsItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)" mode="widthFix" ></image>
						<text> {{movement.legItem[name].name}}</text>
						<button @click="goDetail(name)" type="primary" size="mini">查看动作要点</button>
					</view>
				</view>
				<view class="triceps" v-if="res=='三头'" v-for="(item, name) in movement.tricepsItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)" mode="widthFix" ></image>
						<text> {{movement.legItem[name].name}}</text>
						<button @click="goDetail(name)" type="primary" size="mini">查看动作要点</button>
					</view>
				</view>
				<view class="abs" v-if="res=='腹部'" v-for="(item, name) in movement.absItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)" mode="widthFix" ></image>
						<text> {{movement.legItem[name].name}}</text>
						<button @click="goDetail(name)" type="primary" size="mini">查看动作要点</button>			
					</view>
				</view>
				<view class="leg" v-if="res=='腿'" v-for="(item, name) in movement.legItem" :key="name">
					<view class="box">
						<image :src="getImg(item, name)" mode="widthFix" ></image>
						<text> {{movement.legItem[name].name}}</text>
						<button @click="goDetail(name)" type="primary" size="mini">查看动作要点</button>
					</view>
				</view>
				<view class="chest" v-if="res=='胸'" v-for="(item, name) in movement.chestItem" :key="name" >
					<view class="box">
						<image :src="getImg(item, name)" mode="widthFix" @click="select(movement.chestItem[name].img)"></image>
						<text> {{movement.chestItem[name].name}}</text>
						<button @click="goDetail(name)" type="primary" size="mini">查看动作要点</button>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>

</template>

<script>
	import 	movement from '@/common/util.js'
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
				movement: movement.data,
				addItem:[],
				
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
			},
			add(){
				uni.navigateTo({
					url: '/pages/start_train/start_train?item=' + this.addItem
				})
			},
			select(item){
				this.addItem.push(item)
				console.log(this.addItem)
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

		.tit {
			
			text{
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
				

				.position {
					margin-top: 10rpx;

					text {
						font-size: 50rpx;

					}
				}
			}

			.right {
				display: flex;
				flex-wrap: nowrap;
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
					width: 350rpx;
					image {
						height: 350rpx;
						width: 350rpx;
						border-radius: 50%;
					}
					button {
						color: #000000;
						background-color: #f0f0f0;
					}
					text {
						background-color: #ffffff;
						text-align: center;
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
