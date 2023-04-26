<template>
	<view>
		<view class="name">
			<text>ID</text>
			<input @input="getId" v-model="item.id" placeholder="请输入id" />

		</view>
		<view class="password">
			<text>密码</text>
			<input class="uni-input" v-model="item.password" @input="onInput" placeholder="请输入密码"
				:password="showPassword" />
		</view>
		<view class="login_button">
			<button @click="login">login</button>
		</view>
		<view>
			<button @click="register">register</button>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPassword: true,
				item: {
					"id": "",
					"password": ""
				},
				state: false,
				getData: ''
			}
		},
		methods: {
			async login() {
				if (this.item.id != "" && this.item.id != null && this.item.id != undefined && this.item.password !=
					"" && this.item.password != null && this.item.password != undefined) {
					const res = this.$getList({
						url: '/user/userLogin?uid=' + this.item.id + '&upd=' + this.item.password
					})
					res.then((result) => {
						console.log("result", result.data);
						if (result.data) {
							
							uni.showToast({
								title: '登录成功',
								icon: 'success'
							})
							let that = this
							setTimeout(function() {
								that.navigator()
							}, 1000)
						} else {
							uni.showToast({
								title: '密码错误',
								icon: 'error'
							})
						}
					})
				} else {
					uni.showToast({
						title: '请输入id和密码！',
						icon: 'error'
					})
				}

			},
			async register() {
				if (this.item.id != "" && this.item.id != null && this.item.id != undefined && this.item.password !=
					"" && this.item.password != null && this.item.password != undefined) {
					const res = this.$getList({
						url: '/user/userRegister?uid=' + this.item.id + '&upd=' + this.item.password
					})
					res.then((result) => {
						console.log("result", result.data);
						if (result.data) {
							uni.showToast({
								title: '注册成功',
								icon: 'success'
							})
							let that = this
							setTimeout(function() {
								that.navigator()
							}, 1000)

						} else {
							uni.showToast({
								title: '账户已存在',
								icon: 'error'
							})
						}
					})
				} else {
					uni.showToast({
						title: '请输入id和密码！',
						icon: 'error'
					})
				}

			},
			onInput(e) {
				this.password = e.target.value
			},
			getId(e) {
				this.id = e.target.value
			},
			stateChange() {
				this.state = true
			},
			navigator() {
				uni.switchTab({
					url: '/pages/home/home'
				})
			}
		},
		onLoad() {
			this.$userId
		},

	}
</script>

<style>

</style>
