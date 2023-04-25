<template>
	<view class="tit">
		<button @click="click">1</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			click(){
				console.log(this.m.data.absItem)
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
