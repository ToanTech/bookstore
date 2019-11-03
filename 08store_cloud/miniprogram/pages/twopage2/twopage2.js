
const app = getApp()
Page({
	data: {
		tabTitleList:[
			"我的发布",
			"我的卖出"
		],
		Contactsfabu: [
			{
				id:1001,
				state:"已发布",
				nameofseller: "飞翔的企鹅",
				nameofgoods: "自行车",
				aboutdetails: "新能源自行车充电五分钟骑行两小时，全新未下地，转手随缘卖自行车充电五分钟骑行两小时，全新未下地，转手",
				price: "500",
				realprice: "420",
				urlimg:"http://img0.imgtn.bdimg.com/it/u=3957447454,643668516&fm=26&gp=0.jpg",
			},
			{
				id: 1002,
				state: "交易完成",
				nameofseller: "飞翔的企鹅",
				nameofgoods: "自行车",
				aboutdetails: "新能源自行车充电五分钟骑行两小时，全新未下地，转手随缘卖自行车充电五分钟骑行两小时，全新未下地，转手",
				price: "500",
				realprice: "420",
				urlimg: "http://img0.imgtn.bdimg.com/it/u=3957447454,643668516&fm=26&gp=0.jpg",
			},
			{
				id: 1003,
				state: "交易完成",
				nameofseller: "飞翔的企鹅",
				nameofgoods: "自行车",
				aboutdetails: "新能源自行车充电五分钟骑行两小时，全新未下地，转手随缘卖自行车充电五分钟骑行两小时，全新未下地，转手",
				price: "500",
				realprice: "420",
				urlimg: "http://img0.imgtn.bdimg.com/it/u=3957447454,643668516&fm=26&gp=0.jpg",
			},
			{
				id: 1004,
				state: "已发布",
				nameofseller: "飞翔的企鹅",
				nameofgoods: "自行车",
				aboutdetails: "新能源自行车充电五分钟骑行两小时，全新未下地，转手随缘卖自行车充电五分钟骑行两小时，全新未下地，转手",
				price: "500",
				realprice: "420",
				urlimg: "http://img0.imgtn.bdimg.com/it/u=3957447454,643668516&fm=26&gp=0.jpg",
			},
			{
				id: 1005,
				state: "已发布",
				nameofseller: "飞翔的企鹅",
				nameofgoods: "自行车",
				aboutdetails: "新能源自行车充电五分钟骑行两小时，全新未下地，转手随缘卖自行车充电五分钟骑行两小时，全新未下地，转手",
				price: "500",
				realprice: "420",
				urlimg: "http://img0.imgtn.bdimg.com/it/u=3957447454,643668516&fm=26&gp=0.jpg",
			},
			{
				id: 1006,
				state: "已发布",
				nameofseller: "飞翔的企鹅",
				nameofgoods: "自行车",
				aboutdetails: "新能源自行车充电五分钟骑行两小时，全新未下地，转手随缘卖自行车充电五分钟骑行两小时，全新未下地，转手",
				price: "500",
				realprice: "420",
				urlimg: "http://img0.imgtn.bdimg.com/it/u=3957447454,643668516&fm=26&gp=0.jpg",
			}	
		],
	},
	//事件处理函数
	tab1click:function(e){
		var id = e.currentTarget.dataset.index
		console.log(id)
		if(id=0){

		}
	},
	tochat: function () {
		console.log("tochat")
		//跳转到聊天页面
		wx.navigateTo({
			url: '/pages/twopage/twopage',
		})
	},
	details: function () {
		console.log("details")
		//跳转到详情页
		wx.navigateTo({
			url: '/pages/twopage/twopage',
		})
	},
	aboutdelete: function () {
		console.log("aboutdelete")
		//此处缺一个创建对象的函数
	},
	review: function () {
		console.log("review")
		//跳转到评价页面
		wx.navigateTo({
			url: '/pages/twopage/twopage',
		})
	},
	bindViewTap: function () {
		wx.navigateTo({
			url: '../logs/logs'
		})
	},
	onLoad: function () {
		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}
	},
	getUserInfo: function (e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	}
})
