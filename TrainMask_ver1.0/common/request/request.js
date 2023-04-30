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
