// index.js
const app = getApp()
function getRandomColor(){
  let rgb=[]
  for(let i=0;i<3;++i){
    let color=Math.floor(Math.random()*256).toString(16)
    color=color.length==1?'0'+color:color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  data: {
    tongzhi:'https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/%E9%80%9A%E7%9F%A5.png?sign=5291a9cc89b7e6a39809c606b9bc1877&t=1640145298',
    img:[
      'https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/5.jpg?sign=71c4d3c579116bd247cfd7349a7cae3a&t=1637502088',
      'https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/4.jpg?sign=3161220e20accfae657cf34bc3a1a346&t=1637502123',
      'https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/lunbo_img1.jpg?sign=8b3bb5116d5aac0e09d5f0342cb95e06&t=1639923540',
      'https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/2.jpg?sign=93291d21ee7b04213a503ceccef46589&t=1637502148'
    ],
    cunzhitiao:"https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/%E5%AD%98%E7%BA%B8%E6%9D%A1.jpg?sign=0e6f50481f1ad524df6046d61916e765&t=1637503760",
    quzhitiao:"https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/8%7D5FSB%24_%7D09~MZ_G)BHXZLV.png?sign=42b379a9287a3956e73ad86c553154a5&t=1639927943",
    text_info:[
      '陈玉平',
      '张柳',
      '李成业',
      '张杰',
      '郑立杰',
      '刘海涛',
      '陈俊杰',
      '张元'
    ],
    lihe:"https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/%E7%A4%BC%E7%9B%92.png?sign=087625f696692316b57e197c5883cdc2&t=1639380121",
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    // 用户协议
    qinghua:"点击下方按钮进行随机情话",
    qinghuacolor:"",
    qinghuabeijing:"https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/background/%E5%8A%A8%E6%BC%AB.jpg?sign=b8d4f0bebeb8a48232c7cef0aa4ebbe1&t=1639531886",
    zhantieban:"",
  },

  /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      const db = wx.cloud.database() // 调用接口返回云开发数据库引用保存在常量db中
      db.collection('user_list').where({ // 从集合‘work_done’中查询记录（最多二十条）
        test: "1" // 查询内容
      }).get({
        // complete: res => { // 操作完成时的回调函数
        //   this.setData({
        //     test:false,
        //   })
        // },
        success: res => { // 操作成功时的回调函数
          // wx.showToast({
          //   icon: 'none',
          //   title: '查询记录成功'
          // })
          this.setData({
            text_info:res.data,
            //  zengjiayouli:res.data.youli,
            // shijian:res.data.username,
          })
          console.log('[数据库] [查询记录] 成功: ', res)
        },
        fail: err => { // 操作失败时的回调函数
          // wx.showToast({
          //   icon: 'none',
          //   title: '查询记录失败'
          // })
          this.setData({
            text_info:'今天还没有人脱单呢，快来脱单吧！！',
            // zengjiayouli:res.data.youli,
            // shijian:res.data.username,
          })
          console.error('[数据库] [查询记录] 失败：', err)
        }
      })

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
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      // wx.showLoading({
      //   title:'玩命加载中...',
      //   mask: true
      // })
      // setTimeout(function(){
      //           wx.hideLoading()
      // },1000)
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

    },

  // 注意事项轮播模块
  
  //存纸条跳转
  cunzhitiao:function(){
    wx.navigateTo({
      url: '/pages/cunzhitiao/cunzhitiao',
    })
  },

  //取纸条跳转
  quzhitiao:function(){
    wx.navigateTo({
      url: '/pages/quzhitiao/quzhitiao',
    })
  },

  tanchuangshengming:function(){
    wx.showModal({
      title: '声明',
      content: '您已确认并了解“盲盒脱单”服务功能，您应合理、合法使用“盲盒”服务，因不合理、不合法或者其他第三人造成损失的，您应承担因此造成的全部责任',
      success: function(res) {
      if (res.confirm) {
      console.log('用户点击确定')
      } else if (res.cancel) {
      console.log('用户点击取消')
      }
      }
      })
  },

  goToUserLicence: function(){
    wx.navigateTo({
      url: '/pages/licence/licence',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  suijiqinghua:function(){
    var that = this//不要漏了这句，很重要;
    var zhantieban = ''
    wx.request({
      url: 'https://api.tianapi.com/saylove/index?key=e2d44535cc059c50278e13dcc63648af',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (test) {
        console.log(test)
        that.setData({
          qinghua:test.data.newslist[0].content,
          qinghuacolor:getRandomColor(),
          zhantieban:test.data.newslist[0].content,
        })
        wx.setClipboardData({
          data: test.data.newslist[0].content,
          success: function (res) {
              wx.getClipboardData({
                  success: function (res) {
                      wx.showToast({
                          icon:'none',
                          title: '已为小主随机生成情话并复制成功',
                          duration: 2000
                      })
                  },
                  fail: function (err) {
                    console.log(err)
                    wx.showToast({
                      icon:'none',
                      title: '复制失败'
                    })
                  }
              })
          }
        })
      },
      fail: function (err) {
        console.log(err)
        wx.showToast({
          title: '生成情话失败。。。'
        })
      }
    })
    // wx.request({
    //   url: 'https://chp.shadiao.app/api.php', 
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log('test')
    //     if(res.data.code == 200){
    //       console.log(res.data)
    //     }
    //      that.setData({
    //       qinghua:res.data,
    //       zhantieban:res.data,
    //       qinghuacolor:getRandomColor()
    //      })
    //     wx.setClipboardData({
    //             data: res.data,
    //             success: function (res) {
    //                 wx.getClipboardData({
    //                     success: function (res) {
    //                         wx.showToast({
    //                             title: '复制成功'
    //                         })
    //                     }
    //                 })
    //             }
    //     })
    //   },
    //   fail: function (err) {
    //     console.log('test2')
    //     console.log(err)
    //   }
    //  })//https://chp.shadiao.app/api.php

  },
  // //复制情话按钮  不知道如何吧参数zhantieban变成全局函数，多个事件函数进行调用
  // fuzhiqinghua:function(){
  //   let that = this
  //   var zhantieban = ''
  //   var data = ''
  //   wx.setClipboardData({
  //     data:zhantieban,
      
  //     success: function (res) {
  //         wx.getClipboardData({
  //             success: function (res) {
  //               console.log(data)
  //               that.setData({
  //                 test:zhantieban
  //               })
  //               console.log("test1")
  //                 wx.showToast({
  //                     title: '复制成功'
  //                 })
  //             },
  //             fail: function (res) {
  //               console.log("test2")
  //               wx.showToast({
  //                   title: '复制失败'
  //               })
  //           }
  //         })
  //     }
  // })
  // },

})
