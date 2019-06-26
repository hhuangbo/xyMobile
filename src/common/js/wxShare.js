import wx from 'weixin-js-sdk'

function wxShareFun(){
    this.$http({
        method: 'post',
        url:'/wechat/share_api/',
        data:window.location.href
    }).then(res=>{  
        wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: '', // 必填，公众号的唯一标识
            timestamp: , // 必填，生成签名的时间戳
            nonceStr: '', // 必填，生成签名的随机串
            signature: '',// 必填，签名，见附录1
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.ready(function () {
            var wxShare_title="",//分享标题
                wxShare_link="",//分享链接
                wxShare_imgUrl="",//分享图片
                wxShare_desc=""//分享描述
    　　　　//朋友圈
            wx.onMenuShareTimeline({
                title: wxShare_title,
                link: wxShare_link,
                imgUrl: wxShare_imgUrl,
                success: function (res) {
                    alert('已分享');
                },
                cancel: function (res) {
                    alert('已取消');
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
            //朋友
            wx.onMenuShareAppMessage({
                title: wxShare_title,
                link: wxShare_link, 
                imgUrl: wxShare_imgUrl,
                desc: wxShare_desc,
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                    alert("分享");
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                    alert("取消分享");
                }
            });
        });
    }).catch(err => {
        console.log(err);
    });
}

export default wxShareFun