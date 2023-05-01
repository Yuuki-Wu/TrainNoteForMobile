<template>
	<view>
		<view>动作名称
			<input placeholder="type" @input="nameInput($event)" />
		</view>

		<view>所属部位
			<picker @change="PickerChange" :value="index" :range="position">
				{{ position[index] }}
			</picker>
		</view>
		<view>动作图片
			<button @click="upload()">上传图片</button>
		</view>
		<view>动作详细内容
			<textarea @input="detailInput($event)"></textarea>
		</view>
		<view>动作步骤
			<textarea @input="stepsInput($event)"></textarea>
		</view>
		<view>
			<button @click="submit()"></button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				movement: {
					"uid": getApp().globalData.uid,
					"name": "",
					"position": "腿",
					"img": "",
					"detail": "",
					"steps": ""
				},
				index: 0,
				position: ['腿',
					'胸',
					'二头',
					'三头',
					'腹部',
					'背'
				]
			}
		},
		methods: {
			nameInput(e) {
				this.movement.name = e.target.value
			},
			detailInput(e) {
				this.movement.detail = e.target.value
			},
			stepsInput(e) {
				this.movement.steps = e.target.value
			},
			submit() {

			},
			PickerChange(e) {
				console.log(e)
				let _this = this
				this.movement.position = this.position[e.target.value]
				this.index = e.detail.value
			},
			upload() {
				let _this = this;
				
				uni.chooseImage({
					count: 1,
					success: function(res) {
						const paths = res.tempFilePaths;
						let index = paths[0].indexOf(".");
						let format = paths[0].substr(index);
						_this.movement.img = _this.movement.uid + '_' + _this.movement.name;
						uni.uploadFile({
							url: 'http://192.168.1.107:920/upload/user/movementImg?uid=' + getApp().globalData.uid 
							+ '&movementName=' + _this.movement.name +
								'&position=' + _this.movement.position
								,
							filePath: paths[0],
							name: 'file',
							formData: {
								'user': 'test'
							},
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data);
								uni.request({
									url: 'http://192.168.1.107:920/MovementUpload/upload?uid=' +
										_this.movement.uid + '&name=' + _this.movement.name +
										'&position=' + _this.movement.position + '&img=' +
										_this.movement.img + '&detail=' + _this.movement
										.detail + '&steps=' + _this.movement.steps,
									success() {
										uni.showToast({
											title: '更改成功',
											icon: 'success'
										})
									}
								})

							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
</style>
