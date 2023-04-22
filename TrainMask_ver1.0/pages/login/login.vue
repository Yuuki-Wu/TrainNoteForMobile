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
				id: '',
				password: '',
				item: {
					"id": "",
					"password": ""
				},
				state: false,
			}
		},
		methods: {
			login() {
				const db = uniCloud.database();
				db.collection('user').where('id == "test"').get().then((res)=>{
					if(this.password == res.result.data[0].password){
						console.log('success')
						this.$userId
						uni.switchTab({
							url:"/pages/home/home"
						})
					} else{
						uni.showToast({
							icon:'error',
							title:'输入的密码有误'
						})
					}
					console.log(res.result.data[0].password)
				}).catch((err)=>{
					console.log(err.code);
					console.log(err.message);
				});
			},
			register() {
				const db = uniCloud.database()
				db.collection('user').add(this.item).then(e => {
					console.log(e)
				})
			},
			onInput(e) {
				this.password = e.target.value
			},
			getId(e) {
				this.id = e.target.value
			},
			stateChange() {
				this.state = true
			}
		},
		onLoad() {
			this.$userId
		},

	}
</script>

<style>

</style>
