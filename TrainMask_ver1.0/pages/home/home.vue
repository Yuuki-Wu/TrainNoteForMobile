<template>
	<view class="tit">
		<button @click="click">1</button>
	</view>
</template>

<script>
	import movement from '@/common/util.js'
	export default {
		data() {
			return {
				m:movement
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
