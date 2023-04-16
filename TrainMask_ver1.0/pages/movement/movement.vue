<template>
	<view class="content">
		<!-- <view>
			<cp-goods-select height="100vh" :props="{label:'label',value:'value',children:'children'}" :options="list">
				<cp-goods-item v-for="(item,index) in list" :key="index" :category="item.label">
					<view v-for="(cell,k) in item.children" :key="k" class="goods__item ">
						{{ cell.label}}
					</view>
				</cp-goods-item>
			</cp-goods-select>
		</view> -->
		<view class="" style="margin-top: 100upx;">
			自定义类型样式
		</view>
		<cp-goods-select height="100vh" :options="list" @scrolltolower="handelScrolltolower"
			@category-change="handelCategoryChange">
			<!-- 自定义类型样式 -->
			<template v-slot:category>
				<cp-goods-select-category>
					<template v-slot:bottom>
						<view style="width: 100%; background-color: #007AFF; color: #fff; text-align: center;">设置</view>
					</template>
					<template v-for="(row,k) in list">
						<cp-goods-category-item :key="k" :category="row">
							<text>{{row.label}}</text><text class="num">3</text>
						</cp-goods-category-item>
					</template>
				</cp-goods-select-category>
			</template>
			<!-- 商品列表 -->
			<cp-goods-item v-for="(item,index) in list3" :key="index" :category="item.label" customClass="cloumn-2">
				<template v-slot:category>
					<text style="color: red;">{{item.label}}</text>
				</template>
				<template v-for="(cell,k) in item.children">
					<view :key="k" class="goods__item ">
						{{ cell.label}}
					</view>
				</template>
			</cp-goods-item>
		</cp-goods-select>

	</view>



</template>

<script>
	export default {
		data() {
			return {
				list: [],
				list3: [{
						label: '胸',
						value: '2',
						children: [{
							label: '3',
							value: '5'
						},
						{
							label: '3',
							value: '4'
						},
						]
					},
					{
						label: '背',
						value: '3',
						children: '3'
					},
					{
						label: '腿',
						value: '4',
						children: '3'
					},
					{
						label: '肩',
						value: '2',
						children: '3'
					},
					{
						label: '二头',
						value: '2',
						children: '3'
					},
					{
						label: '三头',
						value: '2',
						children: '3'
					},
					{
						label: '有氧',
						value: '2',
						children: '3'
					}
				],
				goods: []
			}
		},
		methods: {
			initList() {
				let result = []
				let i = 0
				while (++i < 20) {
					let children = []
					let j = 0
					while (++j < 10) {
						children.push({
							label: '商品' + j,
							value: j,
						})
					}
					result.push({
						label: '分类' + i,
						value: i,
						children: children
					})
				}
				return result
			},
			handelCategoryChange(e) {
				console.log('handelCategoryChange', e)
				let goods = [],
					j = 0;
				while (++j < 10) {
					goods.push({
						label: e.label + ': 商品' + j,
						value: j,
					})
				}
				this.goods = goods
			},
			handelScrolltolower(e) {
				console.log('handelScrolltolower', e)
			},
		},
		onLoad() {
			this.list = this.initList()
		}
	}
</script>

<style lang="scss">
	.content {
		background-color: #eceff5;
		height: 100%;
	}

	.num {
		border-radius: 50%;
		background-color: #ff0099;
		color: #fff;
		display: inline-block;
		width: 30upx;
		height: 30upx;
		line-height: 30upx;
		text-align: center;
		padding: 2px;
		position: absolute;
		top: 4px;
	}
</style>
