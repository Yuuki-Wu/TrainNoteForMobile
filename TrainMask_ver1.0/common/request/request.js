const BASE_URL = 'http://localhost:920'
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
