layui.use(['jquery','common','layer','form','larryMenu'],function(){
    var $ = layui.$,
        layer = layui.layer,
        form = layui.form,
        common = layui.common;
    // 页面上下文菜单
    // var larryMenu = layui.larryMenu();
    //common.larryCmsSuccess('用户名：larry 密码：larry 无须输入验证码，输入正确后直接登录后台!','larryMS后台帐号登录提示',20);
    var placeholder = '';
    $("#larry_form input[type='text'],#larry_form input[type='password']").on('focus',function(){
          placeholder = $(this).attr('placeholder');
          $(this).attr('placeholder','');
    });
    $("#larry_form input[type='text'],#larry_form input[type='password']").on('blur',function(){
          $(this).attr('placeholder',placeholder);
    });


    form.on('submit(submit)',function(data){
        if(data.field.user_name == 'larry' && data.field.password == 'larry'){
            layer.msg('登录成功',{icon:1,time:1000});
            setTimeout(function(){
                window.location.href = 'index.html';
            },1000);
           
        }else{
            layer.tips('用户名:larry 密码：larry 无需输入验证码', $('#password'), {
               tips: [3, '#FF5722']
            });
        }
        return false;
    });

    // 右键菜单控制
    // var larrycmsMenuData = [
    //     [{
    //         text: "刷新页面",
    //         func: function() {
    //             top.document.location.reload();
    //         }
    //     }, {
    //         text: "检查元素(F12)",
    //         func: function() {
    //             common.larryCmsError('抱歉！暂不支持此功能，可加入LarryCMS交流群下载源码',common.larryCore.tit);
    //         }
    //     }],
    //     [{
    //         text: "访问larryCMS官网",
    //         func: function() {
    //             window.open('http://www.larrycms.com');
    //         }
    //     },{
    //         text: "给larryMS点个赞",
    //         func: function() {
    //             window.open('http://fly.layui.com/case/u/109200');
    //         }
    //     }]
    // ];
    // larryMenu.ContentMenu(larrycmsMenuData,{
    //      name: "html"
    // },$('html'));

  /* ---- 背景动画 ---- */
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": false,
          "value_area": 1000
        }
      },
      "color": {
        "value": ["#12d7ba"]
      },
      "shape": {
        "type": "polygon",
        // 点的边框
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        // border-radius
        "polygon": {
          "nb_sides": 10
        }
      },
      "opacity": {
        "value": 0.6,
        "random": true,
        // 0.6以下
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.2,
          "sync": false
        }
      },
      "size": {
        "value": 6,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 4,
          "size_min": 1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        // 线的颜色
        "color": "#58636d",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "left",
        "random": true,
        "straight": true,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 200,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
});
    