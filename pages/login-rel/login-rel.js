// pages/login-rel/login-rel.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        chushitouxiang:"https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/%E5%88%9D%E5%A7%8B%E5%A4%B4%E5%83%8F.jpg?sign=e31ca72f93c7db0cd2fa51bc31d25a1f&t=1639378022",
        lihe:"https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/%E7%A4%BC%E7%9B%92.png?sign=087625f696692316b57e197c5883cdc2&t=1639380121",
        kefu:"https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/%E6%88%91%E7%9A%84%E9%A1%B5%E9%9D%A2/%E5%AE%A2%E6%9C%8D.png?sign=153ba04b92701ad37ad5d5c8e942ffc6&t=1639380930",
        yaoqing:"https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/%E6%88%91%E7%9A%84%E9%A1%B5%E9%9D%A2/%E5%88%86%E4%BA%AB.png?sign=46530a742629f8e3450b49f6cba4d155&t=1639381065",
        wenti:"https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/%E6%88%91%E7%9A%84%E9%A1%B5%E9%9D%A2/%E7%96%91%E9%97%AE.png?sign=8aeab988484f138e9cfe5ade4ad8e22b&t=1639381207",
        canyu:"https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/%E6%88%91%E7%9A%84%E9%A1%B5%E9%9D%A2/%E5%8F%82%E4%B8%8E.png?sign=b047ecc366ebef9b478c589afb713e08&t=1639381154",
        youli:"https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/%E6%88%91%E7%9A%84%E9%A1%B5%E9%9D%A2/%E6%88%91%E7%9A%84%E5%8F%8B%E5%8A%9B.png?sign=164f83ffba47e1f3368eb577105d6306&t=1639381081",
        kefu1:"",
        kefu1:"",
        kefu1:"",
        ke1fu:"",
        ke1fu:"",
        appId: "wx8abaf00ee8c3202e",
        extraData : {
          id : '370744', 
          customData : { 
              clientInfo: ' iPhone OS 10.3.1 / 3.2.0.43 / 0 ',
              imei: ' 7280BECE2FC29544172A2B858E9E90D0 '
          }
        },
        
        userInfo: {},
        hasUserInfo: false,
        canIUseGetUserProfile: false,

    },
    // 拼接日期字符串的函数
  makeDateString: function(dateObj) {
    return dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getDate();
  },
  // 拼接时间字符串的函数
  makeTimeString: function(dateObj) {
    return dateObj.getHours() + ':' + dateObj.getMinutes() + ':' + dateObj.getSeconds();
  },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        if (wx.getUserProfile) {
          this.setData({
            canIUseGetUserProfile: true
          })
        }
    },
      getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
        // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
          desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            console.log("用户信息"+res.userInfo)
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
            var x = (Math.random()*100).toFixed(0)*1
            //登录后将用户信息存入数据库
            // var workContent = e.detail.value.workContent//获取用户输入的具体内容保存到workContent变量里
            const db = wx.cloud.database() // 调用接口返回云开发数据库引用保存在常量db中
            var myDate = new Date()
            db.collection('user_list').add({ // 向集合‘user_list’中添加一条记录
              data: { // 一条记录的字段数据
                test: "1" ,
                username: res.userInfo.nickName,
                touxiang: res.userInfo.avatarUrl, // 工作内容字符串
                youli:x,//存储友力值
                date: this.makeDateString(myDate), // 登录日期字符串
                time: this.makeTimeString(myDate), // 登录时间调用之前拼接时间字符串的函数，根据当前日期构造一个时间字符串
              },
              // complete: res => { // 操作完成时的回调函数
              //   this.setData({
              //     finished: true
              //   })
              // },
              success: res => { // 操作成功时的回调函数
                wx.showToast({
                  icon: 'none',
                  title: '登陆成功',
                })
                console.log('[数据库] [新增用户] 成功，记录 _id: ', res._id)
              },
              fail: err => { // 操作失败时的回调函数
                wx.showToast({
                  icon: 'none',
                  title: '登陆失败'
                })
                console.error('[数据库] [新增用户] 失败：', err)
              }
            })
            db.collection('user_list_tuodan').add({ // 向集合‘user_list’中添加一条记录
              data: { // 一条记录的字段数据
                username: res.userInfo.nickName,
                // date: this.makeDateString(myDate), // 登录日期字符串
                // time: this.makeTimeString(myDate), // 登录时间调用之前拼接时间字符串的函数，根据当前日期构造一个时间字符串
              },
              // complete: res => { // 操作完成时的回调函数
              //   this.setData({
              //     finished: true
              //   })
              // },
              success: res => { // 操作成功时的回调函数
                // 在返回结果中会包含新创建的记录的 _id
                // this.setData({
                //   opResult: "操作完成，新增一条记录，_id为：\n ",
                //   resData: res._id
                // })
                wx.showToast({
                  icon: 'none',
                  title: '登陆成功',
                })
                console.log('[数据库] [新增用户] 成功，记录 _id: ', res._id)
              },
              fail: err => { // 操作失败时的回调函数
                wx.showToast({
                  icon: 'none',
                  title: '登陆失败'
                })
                console.error('[数据库] [新增用户] 失败：', err)
              }
            })
          }
      })
      },
      tiaozhuanxieyi: function(){
        wx.navigateTo({
        url: '/pages/xieyi/xieyi',
        })
      },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})