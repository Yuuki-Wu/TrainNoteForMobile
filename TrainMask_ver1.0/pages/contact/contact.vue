<template>
	<view>
		<view>
			<textarea placeholder="请输入您想反馈的内容(限制200字符)" @input="getInfo($event)" maxlength="200"></textarea>
			<image src="../../static/icon/send.png" @click="send()"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:'',
				time:new Date().toISOString()
			}
		},
		methods: {
			async send(){
				let _this = this;
				const res = this.$upload({
					url:'/uploadInfo/info?uid=' + getApp().globalData.uid + '&time=' + _this.dateFormat(this.time) + '&info=' + this.info
				})
			},
			getInfo(e){
				this.info = e.target.value
			},
			dateFormat(time) {
				let date = new Date(time);
				let year = date.getFullYear();
				let month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
				let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
				let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
				let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
				let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
				let today = year + '-' + month + '-' + day + " " + hour + ':' + minute + ':' + second;
				return today
			}
		}
	}
</script>

<style lang="scss">
 image{
	 height: 250rpx;
	 width: 250rpx;
 }
</style>
