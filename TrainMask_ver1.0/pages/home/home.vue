<template>
	<view class="tit">
		<view class="info">
			<image @click=""></image>
			<text></text>
		</view>
	</view>
</template>

<script>
import AppVue from '../../App.vue'
	export default {
		data() {
			return {
				uid:'',
				info:[],
				state:false
			}
		},
		methods: {
			click(){
				uni.getStorage({
					key:'uid'
				})
			}
		},
		onInit:async function(){
			
		},
		onLoad: async function() {
			const res = await this.$getList({
				url: '/userinfo/getUserInfo?uid=' + getApp().globalData.uid
			});
			this.info = res.data
			this.state = true
		}
		// onShow: async function(){
			
		// }
		
		
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.tit{
		
	}
</style>
