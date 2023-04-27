<template>
	<view class="tit">
		<view class="info" v-if="state">
			<image :src="getImg()" @click=""></image>
			<text> {{ info[0].name }}</text>
			<text> {{info[0].weight +'kg'}}</text>
			<text> {{info[0].height + 'cm'}}</text>
			<button @click="navigator" plain="true">修改个人信息</button>
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
			},
			getImg() {
				let url = "http://localhost:920/view/userinfo/" + this.info[0].img + '.png'
				console.log(url)
				return url;
			},
			navigator(){
				uni.navigateTo({
					url:'/pages/user_detail/user_detail'
				})
			}
		},
		onLoad: async function() {
			const res = await this.$getList({
				url: '/userinfo/getUserInfo?uid=' + getApp().globalData.uid
			});
			this.info = res.data
			if(this.info.length > 0){
				this.state = true
			}
			
		}

		
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.tit{
		
	}
</style>
