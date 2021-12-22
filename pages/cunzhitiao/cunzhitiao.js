// pages/cunzhitiao/cunzhitiao.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        image1:'https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/%E9%A6%96%E9%A1%B5.png?sign=5debf191bba9b5eae90ffde14acab2ec&t=1640066503',
        image2:'https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/%E5%AE%A2%E6%9C%8D.png?sign=2e113e3638bd080d970ccbe6463e8329&t=1640066361',
        man_img:'https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/%E7%94%B7.png?sign=20321b9ad8d6f0c09efe73644a9c4252&t=1640072566',
        woman_img:'https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/%E5%A5%B3.png?sign=2386943c48af5ce560d180391a14d435&t=1640072582',
        gender:'',
        age:'',
        weixin_num:'',
    },
        // 拼接日期字符串的函数
  makeDateString: function(dateObj) {
    return dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getDate();
  },
  // 拼接时间字符串的函数
  makeTimeString: function(dateObj) {
    return dateObj.getHours() + ':' + dateObj.getMinutes() + ':' + dateObj.getSeconds();
  },
    formSubmit(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
            //   const db = wx.cloud.database() // 调用接口返回云开发数据库引用保存在常量db中
            //   var myDate = new Date()
            // // db.collection('manghe').add({ // 向集合‘user_list’中添加一条记录
            // //   data: { // 一条记录的字段数据
            // //     gender: e.detail.value.gender,      //性别
            // //     age: e.detail.value.age,   // 年龄
            // //     weixin_num: e.detail.value.weixin_num,
            // //     date: this.makeDateString(myDate), // 登录日期字符串
            // //     time: this.makeTimeString(myDate), // 登录时间调用之前拼接时间字符串的函数，根据当前日期构造一个时间字符串
            // //     nianlingduan: "1"
            // //   },
            // //   success: res => { // 操作成功时的回调函数
            // //     wx.showToast({
            // //       icon: 'none',
            // //       title: '登记成功，慢慢等待结果哦(*^▽^*)！！',
            // //     })
            // //     console.log('[数据库] [新增用户] 成功，记录 _id: ', res)
            // //   },
            // //   fail: err => { // 操作失败时的回调函数
            // //     wx.showToast({
            // //       icon: 'none',
            // //       title: '登记失败，网有点开小差。。o(╥﹏╥)o。。'
            // //     })
            // //     console.error('[数据库] [新增用户] 失败：', err)
            // //   }
            // // })
            var x = e.detail.value.age
            if(x>=18&&x<=22)
            {
              const db = wx.cloud.database() // 调用接口返回云开发数据库引用保存在常量db中
              var myDate = new Date()
              db.collection('manghe').add({ // 向集合‘user_list’中添加一条记录
                data: { // 一条记录的字段数据
                  gender: e.detail.value.age,      //性别
                  age: e.detail.value.age,   // 年龄
                  weixin_num: e.detail.value.weixin_num,
                  date: this.makeDateString(myDate), // 登录日期字符串
                  time: this.makeTimeString(myDate), // 登录时间调用之前拼接时间字符串的函数，根据当前日期构造一个时间字符串
                  nianlingduan: "1"
                },
                success: res => { // 操作成功时的回调函数
                  wx.showToast({
                    icon: 'none',
                    title: '登记成功，慢慢等待结果哦(*^▽^*)！！',
                  })
                  console.log('[数据库] [新增用户] 成功，记录 _id: ', res)
                },
                fail: err => { // 操作失败时的回调函数
                  wx.showToast({
                    icon: 'none',
                    title: '登记失败，网有点开小差。。o(╥﹏╥)o。。'
                  })
                  console.error('[数据库] [新增用户] 失败：', err)
                }
              })
            }
            else if(x>=23&&x<=25)
            {
              const db = wx.cloud.database() // 调用接口返回云开发数据库引用保存在常量db中
              var myDate = new Date()
              db.collection('manghe').add({ // 向集合‘user_list’中添加一条记录
                data: { // 一条记录的字段数据
                  gender: e.detail.value.age,      //性别
                  age: e.detail.value.age,   // 年龄
                  weixin_num: e.detail.value.weixin_num,
                  date: this.makeDateString(myDate), // 登录日期字符串
                  time: this.makeTimeString(myDate), // 登录时间调用之前拼接时间字符串的函数，根据当前日期构造一个时间字符串
                  nianlingduan: "2"
                },
                success: res => { // 操作成功时的回调函数
                  wx.showToast({
                    icon: 'none',
                    title: '登记成功，慢慢等待结果哦(*^▽^*)！！',
                  })
                  console.log('[数据库] [新增用户] 成功，记录 _id: ', res)
                },
                fail: err => { // 操作失败时的回调函数
                  wx.showToast({
                    icon: 'none',
                    title: '登记失败，网有点开小差。。o(╥﹏╥)o。。'
                  })
                  console.error('[数据库] [新增用户] 失败：', err)
                }
              })
            }
            else if(x>=26&&x<=30)
            {
              const db = wx.cloud.database() // 调用接口返回云开发数据库引用保存在常量db中
              var myDate = new Date()
              db.collection('manghe').add({ // 向集合‘user_list’中添加一条记录
                data: { // 一条记录的字段数据
                  gender: e.detail.value.age,      //性别
                  age: e.detail.value.age,   // 年龄
                  weixin_num: e.detail.value.weixin_num,
                  date: this.makeDateString(myDate), // 登录日期字符串
                  time: this.makeTimeString(myDate), // 登录时间调用之前拼接时间字符串的函数，根据当前日期构造一个时间字符串
                  nianlingduan: "3"
                },
                success: res => { // 操作成功时的回调函数
                  wx.showToast({
                    icon: 'none',
                    title: '登记成功，慢慢等待结果哦(*^▽^*)！！',
                  })
                  console.log('[数据库] [新增用户] 成功，记录 _id: ', res)
                },
                fail: err => { // 操作失败时的回调函数
                  wx.showToast({
                    icon: 'none',
                    title: '登记失败，网有点开小差。。o(╥﹏╥)o。。'
                  })
                  console.error('[数据库] [新增用户] 失败：', err)
                }
              })
            }
            else if(x>=31&&x<=35)
            {
              const db = wx.cloud.database() // 调用接口返回云开发数据库引用保存在常量db中
              var myDate = new Date()
              db.collection('manghe').add({ // 向集合‘user_list’中添加一条记录
                data: { // 一条记录的字段数据
                  gender: e.detail.value.age,      //性别
                  age: e.detail.value.age,   // 年龄
                  weixin_num: e.detail.value.weixin_num,
                  date: this.makeDateString(myDate), // 登录日期字符串
                  time: this.makeTimeString(myDate), // 登录时间调用之前拼接时间字符串的函数，根据当前日期构造一个时间字符串
                  nianlingduan: "4"
                },
                success: res => { // 操作成功时的回调函数
                  wx.showToast({
                    icon: 'none',
                    title: '登记成功，慢慢等待结果哦(*^▽^*)！！',
                  })
                  console.log('[数据库] [新增用户] 成功，记录 _id: ', res)
                },
                fail: err => { // 操作失败时的回调函数
                  wx.showToast({
                    icon: 'none',
                    title: '登记失败，网有点开小差。。o(╥﹏╥)o。。'
                  })
                  console.error('[数据库] [新增用户] 失败：', err)
                }
              })
            }
            else if(x>35)
            {
              const db = wx.cloud.database() // 调用接口返回云开发数据库引用保存在常量db中
              var myDate = new Date()
              db.collection('manghe').add({ // 向集合‘user_list’中添加一条记录
                data: { // 一条记录的字段数据
                  gender: e.detail.value.age,      //性别
                  age: e.detail.value.age,   // 年龄
                  weixin_num: e.detail.value.weixin_num,
                  date: this.makeDateString(myDate), // 登录日期字符串
                  time: this.makeTimeString(myDate), // 登录时间调用之前拼接时间字符串的函数，根据当前日期构造一个时间字符串
                  nianlingduan: "5"
                },
                success: res => { // 操作成功时的回调函数
                  wx.showToast({
                    icon: 'none',
                    title: '登记成功，慢慢等待结果哦(*^▽^*)！！',
                  })
                  console.log('[数据库] [新增用户] 成功，记录 _id: ', res)
                },
                fail: err => { // 操作失败时的回调函数
                  wx.showToast({
                    icon: 'none',
                    title: '登记失败，网有点开小差。。o(╥﹏╥)o。。'
                  })
                  console.error('[数据库] [新增用户] 失败：', err)
                }
              })
            }
            
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // wx.showLoading({
        //     title:'玩命加载中...',
        //     mask: true
        //   })
        // setTimeout(function(){
        //         wx.hideLoading()
        // },1000)
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