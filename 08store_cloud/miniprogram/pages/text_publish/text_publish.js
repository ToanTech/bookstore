// pages/text_publish/text_publish.js
const db = wx.cloud.database();
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    location:null,
    tempImages:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const type = options.type;
    this.setData ({
      type:type
    })
    this.initImageSize();
  },

  initImageSize:function(){
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    const containerWidth = windowWidth -60;
    const imageSize = ( containerWidth - 2.5*3)/3;
    this.setData({
      imageSize:imageSize 
    })
  },

openLocationPage:function(){
  const that = this;
  wx.chooseLocation({
    success: function (res) {
      if(res.name){
        delete res['errMsg'];
        console.log(res)
        that.setData({
        location: res
        })
        console.log(location)
      }
    },
  })
},
  

  onlocationTap:function(event){
    console.log(event);
    const that = this;
   wx.getSetting({
     success:res => {
       const isLocation = res.authSetting['scope.userLocation']
       if(isLocation){
         that.openLocationPage();
       }
       else{
         wx.authorize({
           scope: 'scope.userLocation',
           success:res => {
            that.openLocationPage();
           }
         })
       }
     }
   }) 
  },




  onSubmitEvent:function(event){
    const that = this;
    const content = event.detail.value.content;
    const location = this.data.location;
    const author = app.globalData.userInfo;
    wx.showLoading({
      title: '正在发表中.......',
    })
    db.collection('weibo').add({
      data:{
        content:content,
        location:location,
        author:author
      }
    })
    // 上传图片到服务端
    wx.showLoading({
      title: '正在发表重',
    })
    const fileIDList = [];
    if(that.data.tempImages.length > 0){
      const today  =new Date();
      const year = today.getFullYear();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      that.data.tempImages.forEach((value,index)=>{
        wx.cloud.uploadFile({
          filePath:value,
          cloudPath:"weibos/"+year+"/"+month+"/"+day+"/"+that.getUUID()+"."+that.getExt(value),
          success:res=>{
            fileIDList.push(res.fileID);
            if(fileIDList.length == that.data.tempImages.length){
              wx.hideLoading();
              wx.showToast({
                title: '图片发表完成',
              })
            }
          }
        })
      })
    }

  },




  // 上传文件
  onAddImageTap:function(event){
    const that  = this;
    wx.chooseImage({
      success: function(res) {
        const tempImages = res.tempFilePaths;
        const oldImages = that.data.tempImages;
        const newImages = oldImages.concat(tempImages);
        that.setData({
          tempImages :newImages
        })
      },
    })
  },

  // 删除照片
  onRemoveBtnTap:function(event){

   const index = event.target.dataset.index;

   const tempImages = this.data.tempImages;

   tempImages.splice(index,1)
   this.setData({
     tempImages:tempImages
   })
  },
  getUUID:function(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },

getExt:function(filePath) {
    //获取最后一个.的位置
    var index = filePath.lastIndexOf(".");
    //获取后缀
    var ext = filePath.substr(index + 1);
    return ext;
  }
  

})



