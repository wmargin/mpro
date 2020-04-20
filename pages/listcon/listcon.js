// pages/listcon/listcon.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    show: false,
    actions: [
      {
        name: '选项'
      },
      {
        name: '选项'
      },
      {
        name: '选项',
        subname: '副文本',
        openType: 'share'
      }
    ],
    content: "贾雨村到盐政林如海家教林黛玉读书。林如海的岳母贾母因黛玉丧母，要接黛玉去身边。黛玉进荣国府，除外祖母外，还见了大舅母，即贾赦之妻邢夫人，二舅母，即贾政之妻王夫人，年轻而管理家政的王夫人侄女、贾赦儿子贾琏之妻王熙凤（凤姐），以及贾迎春、贾探春、贾惜春和衔玉而生的贾宝玉。宝黛二人初见有似曾相识之感，宝玉因见表妹没有玉，认为玉不识人，便砸自己的通灵宝玉，惹起一场不快。", // 完整的内容
    contentShow: "", // 真实显示的内容
    maxLength: 78, // 收起时最大显示文字长度
    ellipsis: true, // 是否收缩
  },
  // 展开收齐
  ellipsis: function () {
    var ellipsis = !this.data.ellipsis;
    var contentShow = this.data.content;
    var maxLength = this.data.maxLength;
    // 如果内容长度少于10，则不截取;否则当处于收起状态，截取7个文字并加上省略号
    contentShow = (contentShow.length > maxLength && ellipsis) ? contentShow.substring(0, maxLength - 3) + "..." : contentShow;
    this.setData({
      contentShow: contentShow,
      ellipsis: ellipsis
    })
  },
  //触发关闭打开底部
  toggle(type) {
    this.setData({
      [type]: !this.data[type]
    });
  },
  toggleActionsheet1() {
    this.toggle('show');
    console.log("chufa")
  },

  onClose() {
    this.setData({ show: false });
    console.log("close")
  },

  onSelect(event) {
    console.log(event.detail);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 实现收起展开
    var content = this.data.content
    var maxLength = this.data.maxLength
    var contentShow = content.substring(0, maxLength - 3) + "..."
    this.setData({
      contentShow:contentShow
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