<template>
	<view>
		<view class="uni-list-cell">
			<view class="uni-list-cell-left">
				<text>选择查询日期</text>
			</view>
			<view class="uni-list-cell-db">
				<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{date}}</view>
				</picker>
				<view class="query">
					<image src="../../static/icon/search.png" @click="query()"></image>
				</view>
			</view>
		</view>
		<view>
			<view class="showList">
				<uni-table border stripe emptyText="暂无数据" v-if="list.length > 0">
					<uni-tr>
						<uni-th width="100" align="center">动作</uni-th>
						<uni-th width="100" align="center">组数</uni-th>
						<uni-th width="100" align="center">总重量</uni-th>
						<uni-th width="100" align="center">感受</uni-th>
					</uni-tr>
					<uni-tr v-for="(item, index) in list" :key="index">
						<uni-td>{{item.movementName}}</uni-td>
						<uni-td>{{item.movementSets}}</uni-td>
						<uni-td>{{item.movementWeight}}</uni-td>
						<uni-td>{{item.movementFeeling}}</uni-td>
					</uni-tr>
				</uni-table>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				time: '',
				date: currentDate,
				list: []
			}
		},
		methods: {
			bindDateChange: function(e) {
				this.date = e.detail.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			async query() {
				const res = await this.$getList({
					url: '/trainmovement/searchList?uid=' + getApp().globalData.uid + '&date=' + this.date
				})
				this.list = res.data;
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
	}
</script>

<style lang="scss">
	.uni-list-cell {
		.uni-list-cell-db {
			display: flex;

			picker {
				border-width: 2rpx;
				border-style: solid;
				border-radius: 8rpx;
				border-bottom-color: #666666; //设置底部边框色值为#EEEEEE透明度为35%
				border-top-color: #666666; //设置顶部边框线为透明，如不设置则默认显示黑色
				border-left-color: #666666; //设置左侧边框线为透明，如不设置则默认显示黑色
				border-right-color: #666666;
			}

			.query {
				image {
					height: 100rpx;
					width: 100rpx;
					margin-left: 50vw;
				}
			}
		}

		.showList {}
	}
</style>
