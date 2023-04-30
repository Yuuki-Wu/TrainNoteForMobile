const BASE_URL = 'http://192.168.1.107:920'
export const getList = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method,
			data: options.data,
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '网络异常',
					icon:"error"
				})
				reject(err)
			}
		})
	})
}
export const upload = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method,
			data: options.data,
			success: (res) => {
				resolve(res)
				uni.showToast({
					icon:'success',
					title:'上传成功'
				})
			},
			fail: (err) => {
				uni.showToast({
					title: '网络异常',
					icon:"error"
				})
				reject(err)
			}
		})
	})
}
export const change = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method,
			data: options.data,
			success: (res) => {
				resolve(res)
				uni.showToast({
					icon:'success',
					title:'更改成功'
				})
			},
			fail: (err) => {
				uni.showToast({
					title: '网络异常',
					icon:"error"
				})
				reject(err)
			}
		})
	})
}
