const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:[1,2,3,4,5,7,8,4]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initimages();
  },

  initimages:function(){
    const windowWidth =  wx.getSystemInfoSync().windowWidth;
    const weiboWidth = windowWidth - 40;
    const twoImagesSize =  (weiboWidth - 60)/2;
    const threeImageSize = (weiboWidth - 60)/3;
    this.setData({
      twoImagesSize:twoImagesSize,
      threeImageSize: threeImageSize
    })
  },

  onwriteweiboTap:function(){
    if(app.is_login()){
      wx.showActionSheet({
        itemList: ["文字","照片"],
        success:res=>{
          const tapIndex = res.tapIndex;
          wx.navigateTo({
            url: '../text_publish/text_publish?type'+tapIndex,
          })
        }
      })
  }else{
    wx.navigateTo({
      url: '../weibo_login/weibo_login',
    })
  }
}
}
)