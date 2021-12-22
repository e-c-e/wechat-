// pages/basic_info/basic_info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        image:"https://7465-test-3glntmce672dfb0b-1307878423.tcb.qcloud.la/images/%E4%B8%80%E5%85%83%E4%BA%A4%E5%8F%8B/%E5%8F%8B%E5%8A%9B.png?sign=ef613dec48e141927a3adee64187d063&t=1640143892",
        youlizhi:"0",
        // 友力值记录框模块
        test:"true",
        zengjiayouli:"**",
        shijian:"****-**-**",
        x:0,
    },

    check:function(e){
        console.log(e)
        wx.getUserProfile({
          desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
            //查询用户登录的友力值
            const db = wx.cloud.database() // 调用接口返回云开发数据库引用保存在常量db中
            db.collection('user_list').where({ // 从集合‘work_done’中查询记录（最多二十条）
              username: 'los·dr'// 查询内容
            }).get({
              complete: res => { // 操作完成时的回调函数
                this.setData({
                  test:false,
                })
              },
              success: res => { // 操作成功时的回调函数
                wx.showToast({
                  icon: 'none',
                  title: '查询记录成功'
                })
                var x = 0
                var i = 0
                for(i = 0;i<res.data.length;i++){
                  x = x + res.data[i].youli;
                }
                this.setData({
                  resdata:res.data,
                  youlizhi:x,
                  // zengjiayouli:res.data.youli,
                  // shijian:res.data.username,
                  // test:false,

                })
                console.log('[数据库] [查询记录] 成功: ', res)
              },
              fail: err => { // 操作失败时的回调函数
                wx.showToast({
                  icon: 'none',
                  title: '查询记录失败'
                })
                console.error('[数据库] [查询记录] 失败：', err)
              }
            })
            
            
          }
      })
      
    
    }



})