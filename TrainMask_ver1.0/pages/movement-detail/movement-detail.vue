<template>
	<view>
		<view class="top" >
			<image :src="getImg()" v-if="movement.isSelected > -1"></image>
		</view>
		<view class="bottom">
			<view class="tit">
				<view class="main-point">
					<view class="note"></view>
					<view class="detail">
						<text>{{ "起始细节:"+ movement.movementDetail }}</text>
					</view>
					<view class="steps">
						<text>{{ "起始步骤:"+ movement.movementSteps }}</text>
					</view>
				</view>
				<view class="history"></view>
				<view class="graph"></view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		components: {},
		name: 'detail',
		data() {
			return {
				movement:[],
				index:-1,
				url:''
			}
		},
		methods:{
			getImg() {
					this.url = "http://localhost:920/view/movement/" + this.movement.movementPositionEn + '/' + this.movement.movementImg + '.gif'
					console.log(this.url)
					return this.url;
					
			},
		},
		onLoad: async function(option) {
			const res = await this.$getList({
				url:'/movement/getImg?img=' + option.img
			});
			this.movement = res.data[0]
		}
	}
</script>

<style lang="scss">
	.top {}

	.bottom {
		.tit {
			.main-point {
				.detail {
					border-width: 2rpx;
					border-style: solid;
					border-radius: 8rpx;
					border-bottom-color: #19d9ff; //设置底部边框色值为#EEEEEE透明度为35%
					border-top-color: #19d9ff; //设置顶部边框线为透明，如不设置则默认显示黑色
					border-left-color: #19d9ff; //设置左侧边框线为透明，如不设置则默认显示黑色
					border-right-color: #19d9ff;
				}

				.steps {
					margin-top: 20rpx;
					border-width: 2rpx;
					border-style: solid;
					border-radius: 8rpx;
					border-bottom-color: #19d9ff; //设置底部边框色值为#EEEEEE透明度为35%
					border-top-color: #19d9ff; //设置顶部边框线为透明，如不设置则默认显示黑色
					border-left-color: #19d9ff; //设置左侧边框线为透明，如不设置则默认显示黑色
					border-right-color: #19d9ff;
				}
			}
		}
	}
</style>
