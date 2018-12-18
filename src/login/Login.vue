<template>
    <div class="login" ref="login">
        <div class="bg-img">
					<div class="logo"><img src="./../assets/images/logo05.png" alt=""></div>
                <div class="left" ref="left" v-bind:style="{'margin-left': myMarginLeft,'margin-right':myMarginRight}">
                    <div class="waterwise">
                        <p class="english">
                            <span>W</span><span>a</span><span>t</span><span>e</span><span>r</span><span>W</span><span>i</span><span>s</span><span>e</span>
                        </p>
                          <p class="zhsw">智慧水务综合管理平台</p>
                        <form action="">
                              <div class="input_control">
                              <img  class="form_input02"  src="./../assets/images/icon_user.png"/>
                              <input  type="text"  name="name" value="" class="form_input01 sea_input" placeholder="请输入用户名" style="background-color: transparent;" autocomplete="off" />
                          </div>
                         <div class="input_control02">
                           <img  class="form_input02" src="./../assets/images/icon_password.png"/>
                           <input type="text" class="form_input01" placeholder="请输入密码"/>
                        </div>
                        <table class="input_control03">
                            <tr>
                                <td class="checkbox01" ><input type="checkbox" value="记住密码" checked="checked"  class="checkbox"/> </td>
                                <td class="checkbox02" >记住密码</td>
                                <td class="checkbox03"> 还没有账号？<a href="" style="color:#0093e5; text-decoration:none;"><span> 注册 </span></a></td>
                            </tr>
                    </table>
                    <button @click="Search_con" type="submit" class="form_button"/>
                        </form>    
                    </div>
                </div>
<div class="heda">浙江和达科技股份有限公司</div>
                <div class="canvas_wrapper" style="text-align:right;background: none;">
                  <canvas id="canvasOne"  style="background:rgba(255,255,255,0);"  width="700" height="720 " ref="canvas"> </canvas>
                </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      clientHeight: "",
      myMarginLeft: 0.00225 * window.innerWidth + "px",
      myMarginRight: 0.45645833 * window.innerWidth + "px"
    };
  },
  mounted() {
    this.init();
    // 获取浏览器可视区域高度
    this.clientHeight = `${document.documentElement.clientHeight}`;
    // 获取浏览器可视区域宽度
    this.clientWidth = `${document.documentElement.clientWidth}`; //document.body.clientWidth;
    //console.log(self.clientHeight);
    window.onresize = function temp() {
      this.clientHeight = `${document.documentElement.clientHeight}`;
      this.clientWidth = `${document.documentElement.clientWidth}`;
      // 通过捕获系统的onresize事件触发我们需要执行的事件
      this.myMarginLeft = 0.140625 * window.innerWidth + "px";
      this.myMarginRight = 0.28645833 * window.innerWidth + "px";
    };
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function() {
      this.changeFixed(this.clientHeight);
    },
    // 如果 `clientWidth` 发生改变，这个函数就会运行
    clientWidth: function() {
      this.changeFixed(this.clientWidth);
    }
  },
  methods: {
    //login登录跳转
    Search_con(){
var keyword = document.getElementsByClassName("sea_input")[0].value;
// var keyword = search.name.value;
/* alert(keyword); */
if(keyword=="1"){
  // window.location.href="/Home"
  this.$router.push('/Home')
}
else if(keyword=="2")
{

    this.$router.push('/Common')
}else{
  alert("欢迎来到智慧水务平台,您的需求，我们的追求！")
}
},//login跳转结束
    changeFixed(clientHeight) {
      //动态修改样式
      console.log(clientHeight);
      this.$refs.login.style.height = clientHeight + "px";
      /* 		this.$refs.left.style.margin-left=clientHeight+'px'; */
      this.$refs.canvas.style.height = 2 * (clientHeight / 3) + "px";
      this.$refs.canvas.style.width = 2 * (clientHeight / 3) + "px";
    },
    //1
    windowLoadHandler() {
      this.canvasApp();
    },

    //2
    canvasSupport() {
      return Modernizr.canvas;
    },

    //3
    canvasApp() {
      if (!this.canvasSupport()) {
        return;
      }
    },

    // var theCanvas = document.getElementById("canvasOne");
    // var context = theCanvas.getContext("2d");

    // var displayWidth;
    // var displayHeight;
    // var timer;
    // var wait;
    // var count;
    // var numToAddEachFrame;
    // var particleList;
    // var recycleBin;
    // var particleAlpha;
    // var r,g,b;
    // var fLen;
    // var m;
    // var projCenterX;
    // var projCenterY;
    // var zMax;
    // var turnAngle;
    // var turnSpeed;
    // var sphereRad, sphereCenterX, sphereCenterY, sphereCenterZ;
    // var particleRad;
    // var zeroAlphaDepth;
    // var randAccelX, randAccelY, randAccelZ;
    // var gravity;
    // var rgbString;
    // //we are defining a lot of variables used in the screen update functions globally so that they don't have to be redefined every frame.
    // var p;
    // var outsideTest;
    // var nextParticle;
    // var sinAngle;
    // var cosAngle;
    // var rotX, rotZ;
    // var rotX1, rotZ1;
    // var depthAlphaFactor;
    // var i;
    // var theta, phi;
    // var x0, y0, z0;
    // var rd, r;

    init() {
      var theCanvas = document.getElementById("canvasOne");
      var context = theCanvas.getContext("2d");

      var displayWidth;
      var displayHeight;
      var timer;
      var wait;
      var count;
      var numToAddEachFrame;
      var particleList;
      var recycleBin;
      var particleAlpha;
      var r, g, b;
      var fLen;
      var m;
      var projCenterX;
      var projCenterY;
      var zMax;
      var turnAngle;
      var turnSpeed;
      var sphereRad, sphereCenterX, sphereCenterY, sphereCenterZ;
      var particleRad;
      var zeroAlphaDepth;
      var randAccelX, randAccelY, randAccelZ;
      var gravity;
      var rgbString;
      //we are defining a lot of variables used in the screen update functions globally so that they don't have to be redefined every frame.
      var p;
      var outsideTest;
      var nextParticle;
      var sinAngle;
      var cosAngle;
      var rotX, rotZ;
      var rotX1, rotZ1;
      var depthAlphaFactor;
      var i;
      var theta, phi;
      var x0, y0, z0;
      var rd, r;

      wait = 1;
      count = wait - 1;
      numToAddEachFrame = 24;

      //particle color
      r = 70;
      g = 255;
      b = 140;

      rgbString = "rgba(" + r + "," + g + "," + b + ","; //partial string for color which will be completed by appending alpha value.
      particleAlpha = 1; //maximum alpha

      displayWidth = theCanvas.width;
      displayHeight = theCanvas.height;

      fLen = 320; //represents the distance from the viewer to z=0 depth.

      //projection center coordinates sets location of origin
      projCenterX = displayWidth / 2;
      projCenterY = displayHeight / 2;

      //we will not draw coordinates if they have too large of a z-coordinate (which means they are very close to the observer).
      zMax = fLen - 2;

      particleList = {};
      recycleBin = {};

      //random acceleration factors - causes some random motion
      randAccelX = 0.1;
      randAccelY = 0.1;
      randAccelZ = 0.1;

      gravity = 0; //try changing to a positive number (not too large, for example 0.3), or negative for floating upwards.

      particleRad = 1.5;
      sphereRad = 900;
      sphereCenterX = 0;
      sphereCenterY = 0;
      sphereCenterZ = -3 - sphereRad;

      //alpha values will lessen as particles move further back, causing depth-based darkening:
      zeroAlphaDepth = -750;

      turnSpeed = 2 * Math.PI / 1600; //the sphere will rotate at this speed (one complete rotation every 1600 frames).
      turnAngle = 0; //initial angle

      timer = setInterval(onTimer, 1000 / 24);

      //inner fun1
      function onTimer() {
        //if enough time has elapsed, we will add new particles.
        count++;
        if (count >= wait) {
          count = 0;
          for (i = 0; i < numToAddEachFrame; i++) {
            theta = Math.random() * 2 * Math.PI;
            phi = Math.acos(Math.random() * 2 - 1);
            x0 = sphereRad * Math.sin(phi) * Math.cos(theta);
            y0 = sphereRad * Math.sin(phi) * Math.sin(theta);
            z0 = sphereRad * Math.cos(phi);

            //We use the addParticle function to add a new particle. The parameters set the position and velocity components.
            //Note that the velocity parameters will cause the particle to initially fly outwards away from the sphere center (after
            //it becomes unstuck).
            var p = addParticle(
              x0,
              sphereCenterY + y0,
              sphereCenterZ + z0,
              0.002 * x0,
              0.002 * y0,
              0.002 * z0
            );

            //we set some "envelope" parameters which will control the evolving alpha of the particles.
            p.attack = 50;
            p.hold = 50;
            p.decay = 160;
            p.initValue = 0;
            p.holdValue = particleAlpha;
            p.lastValue = 0;

            //the particle will be stuck in one place until this time has elapsed:
            p.stuckTime = 80 + Math.random() * 20;

            p.accelX = 0;
            p.accelY = gravity;
            p.accelZ = 0;
          }
        }

        //update viewing angle
        turnAngle = (turnAngle + turnSpeed) % (2 * Math.PI);
        sinAngle = Math.sin(turnAngle);
        cosAngle = Math.cos(turnAngle);

        //background fillf
        /* context.fillStyle = "#eff2f7"; */
        context.clearRect(0, 0, displayWidth, displayHeight);
        /* 	context.fillRect(0, 0, displayWidth, displayHeight); */

        //update and draw particles
        p = particleList.first;
        while (p != null) {
          //before list is altered record next particle
          nextParticle = p.next;

          //update age
          p.age++;

          //if the particle is past its "stuck" time, it will begin to move.
          if (p.age > p.stuckTime) {
            //p.velX += p.accelX + randAccelX*(Math.random()*2 - 1);
            //p.velY += p.accelY + randAccelY*(Math.random()*2 - 1);
            //p.velZ += p.accelZ + randAccelZ*(Math.random()*2 - 1);
            //p.x += p.velX;
            //p.y += p.velY;
            //p.z += p.velZ;
          }

          /*
			We are doing two things here to calculate display coordinates.
			The whole display is being rotated around a vertical axis, so we first calculate rotated coordinates for
			x and z (but the y coordinate will not change).
			Then, we take the new coordinates (rotX, y, rotZ), and project these onto the 2D view plane.
			*/
          rotX = cosAngle * p.x + sinAngle * (p.z - sphereCenterZ);
          rotZ =
            -sinAngle * p.x + cosAngle * (p.z - sphereCenterZ) + sphereCenterZ;
          m = fLen / (fLen - rotZ);
          p.projX = rotX * m + projCenterX;
          p.projY = p.y * m + projCenterY;

          rd = Math.random();
          if (rd > 0.1 && rd < 0.1005) {
            if (p.flash == 0) {
              p.flash = 50;
            }
          }

          //update alpha according to envelope parameters.
          if (p.age < p.attack + p.hold + p.decay) {
            if (p.age < p.attack) {
              p.alpha =
                (p.holdValue - p.initValue) / p.attack * p.age + p.initValue;
            } else if (p.age < p.attack + p.hold) {
              p.alpha = p.holdValue;
            } else if (p.age < p.attack + p.hold + p.decay) {
              p.alpha =
                (p.lastValue - p.holdValue) /
                  p.decay *
                  (p.age - p.attack - p.hold) +
                p.holdValue;
            }
          } else {
            p.dead = true;
          }

          //see if the particle is still within the viewable range.
          if (
            p.projX > displayWidth ||
            p.projX < 0 ||
            p.projY < 0 ||
            p.projY > displayHeight ||
            rotZ > zMax
          ) {
            outsideTest = true;
          } else {
            outsideTest = false;
          }

          if (outsideTest || p.dead) {
            recycle(p);
          } else {
            //depth-dependent darkening
            depthAlphaFactor = 1 - rotZ / zeroAlphaDepth;
            depthAlphaFactor =
              depthAlphaFactor > 1
                ? 1
                : depthAlphaFactor < 0 ? 0 : depthAlphaFactor;
            //context.fillStyle = rgbString + depthAlphaFactor*p.alpha + ")";

            if (p.flash == 0) {
              context.strokeStyle =
                "rgba(0,147,255," + depthAlphaFactor * p.alpha + ")";
              context.fillStyle =
                "rgba(0,147,255," + depthAlphaFactor * p.alpha + ")";
            } else {
              context.strokeStyle =
                "rgba(255,0,0," + depthAlphaFactor * p.alpha + ")";
              context.fillStyle =
                "rgba(255,0,0," + depthAlphaFactor * p.alpha + ")";
              p.flash--;
            }
            context.lineWidth = 1;
            //draw
            context.beginPath();
            r = p.flash / 10;
            if (r < 1) r = 1;
            context.arc(
              p.projX,
              p.projY,
              m * particleRad * r,
              0,
              2 * Math.PI,
              false
            );
            //context.moveTo(p.projX, p.projY);
            //context.lineTo(p.projX1, p.projY1);

            context.closePath();
            if (r > 1) context.fill();
            else context.stroke();
          }

          p = nextParticle;
        }

        //innerfun2
        function addParticle(x0, y0, z0, vx0, vy0, vz0) {
          var newParticle;
          var color;

          //check recycle bin for available drop:
          if (recycleBin.first != null) {
            newParticle = recycleBin.first;
            //remove from bin
            if (newParticle.next != null) {
              recycleBin.first = newParticle.next;
              newParticle.next.prev = null;
            } else {
              recycleBin.first = null;
            }
          } else {
            //if the recycle bin is empty, create a new particle (a new ampty object):
            newParticle = {};
          }

          //add to beginning of particle list
          if (particleList.first == null) {
            particleList.first = newParticle;
            newParticle.prev = null;
            newParticle.next = null;
          } else {
            newParticle.next = particleList.first;
            particleList.first.prev = newParticle;
            particleList.first = newParticle;
            newParticle.prev = null;
          }

          //initialize
          newParticle.x = x0;
          newParticle.y = y0;
          newParticle.z = z0;
          newParticle.velX = vx0;
          newParticle.velY = vy0;
          newParticle.velZ = vz0;
          newParticle.age = 0;
          newParticle.dead = false;
          newParticle.flash = 0;
          if (Math.random() < 0.5) {
            newParticle.right = true;
          } else {
            newParticle.right = false;
          }
          return newParticle;
        }

        function recycle(p) {
          //remove from particleList
          if (particleList.first == p) {
            if (p.next != null) {
              p.next.prev = null;
              particleList.first = p.next;
            } else {
              particleList.first = null;
            }
          } else {
            if (p.next == null) {
              p.prev.next = null;
            } else {
              p.prev.next = p.next;
              p.next.prev = p.prev;
            }
          }
          //add to recycle bin
          if (recycleBin.first == null) {
            recycleBin.first = p;
            p.prev = null;
            p.next = null;
          } else {
            p.next = recycleBin.first;
            recycleBin.first.prev = p;
            recycleBin.first = p;
            p.prev = null;
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: -ms-flex;
  display: -webkit-flex;
  background-size: 100% 100%;
  display: flex;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  justify-content: center;
	background-color: #edf0f5;
}

.bg-img {
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  -webkit-box-orient: vertical;
  /* text-align: center; */
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  /*  background-color: #eff2f7; */
  min-width: 1400px;

  background: url("~@/assets/images/jianbianbg_img.jpg") no-repeat;
  /*   background: url('~@/assets/images/test.jpg')  no-repeat; */
  background-size: 100%;
  /*  background: url("/assets/images/jianbianbg_img.jpg") */
  /*      background: url("/assets/images/test.jpg") no-repeat top left; */
  /*    background-color: blue;
         background-size: 6rem 6rem; */
}
.left {
  display: inline-block;
  width: 50%;
  z-index: 3;
  /* margin-right: 10rem; */
}
.logo {
  /* margin: 0px 0px 0px 49px; */
  position: absolute;
  top: 65px;
  left: 45px;
}
/* .english{
    margin: 0px 0 0 261px;
} */
.waterwise > p > span {
  font-size: 24px;
  color: #a7b1c3;
  font-weight: 100;
  margin-right: 3px;
}
.zhsw {
  margin-top: 13.5px;
  /*   margin-left: 261px; */
  font-size: 40px;
  color: #0093e5;
  font-weight: 100;
}

.input_control {
  border-bottom: 1px solid #d3d9e4;
  height: 60px;
  width: 547px;
  margin-top: 57.5px;
  /*   margin-left: 261px; */
}
input::-webkit-input-placeholder {
  /* placeholder颜色  */
  /*  color:#fff; */
  /* placeholder字体大小  */
  font-size: 14px;
  /* placeholder位置  */
  text-align: left;
  font-family: "微软雅黑";
}
input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #eff2f7 inset !important;
}
.input_control02 {
  border-bottom: 1px solid #d3d9e4;
  height: 60px;
  width: 547px;
  margin-top: 30px;
  /*   margin-left: 261px; */
}
.input_control03 {
  height: 60px;
  width: 547px;
  margin-top: 25px;
  /*  margin-left: 261px; */
}
.form_input01 {
  background: none;
  float: left;
  position: relative;
  left: 32px;
  padding: 5px 0;
  height: 60px;
  box-sizing: border-box;
  border-bottom: hidden;
  border-left: hidden;
  border-right: hidden;
  border-right: hidden;
  border-top: hidden;
  width: 60%;
  margin-left: 0 px;
  line-height: 14px;
  display: block;
  font-size: 16px;
  color: #a7b1c3;
  letter-spacing: 0;
  font-weight: 100;
  font-family: "微软雅黑";
}
.form_input02 {
  float: left;
  position: relative;
  left: 12px;
  box-sizing: border-box;
  border-bottom: hidden;
  width: 24px;
  height: 24px;
  margin-left: 12 px;
  margin-top: 14px;
  line-height: 14px;
  display: block;
}
.form_input01:focus {
  outline: none;
  color: #0093e5;
}

.checkbox {
  width: 20px;
  height: 20px;
  margin-top: 8px;
  background: url(~@/assets/images/checkbox_state01.png) no-repeat;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
}
.checkbox01 {
  width: 28px;
  height: 16px;
  font-size: 16px;
  color: #a7b1c3;
  letter-spacing: 0;
  font-weight: 100;
}
.checkbox02 {
  height: 16px;
  font-size: 16px;
  color: #a7b1c3;
  letter-spacing: 0;
  font-weight: 100;
  margin-left: 12px;
}
.checkbox03 {
  height: 16px;
  font-size: 16px;
  color: #a7b1c3;
  letter-spacing: 0;
  font-weight: 100;
  text-align: right;
}
.checkbox:checked {
  background: url(~@/assets/images/checkbox_state02.png) no-repeat;
}
.form_button {
  width: 180px;
  height: 54px;
  background: url(~@/assets/images/button_login_state01.png);
  margin-top: 50px;
  /* margin-left: 261px; */
  /* margin-bottom: 255px; */
  box-sizing: border-box;
  border-bottom: hidden;
  border-left: hidden;
  border-right: hidden;
  border-right: hidden;
  border-top: hidden;
	outline: none;
}

.form_button:hover {
  background: url(~@/assets/images/button_login_state02.png);
}

.heda {
  display: inline-block;
  height: 14px;
  position: absolute;
  left: 50px;
  bottom: 45px;
  font-size: 14px;
  color: #0093e5;
  letter-spacing: 0;
  font-weight: 100;
}

.xian {
  width: 14px;
  height: 116px;
  position: absolute;
  bottom: -20px;
  right: 5%;
  background: url(~@/assets/images/line.png) no-repeat;
}
//canvas样式
.canvas_wrapper {
  display: inline-block;
  width: 50%;
  position: absolute;
  top: 15%;
  bottom: 15%;
  right: -3rem;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /*  margin-top:-7.9rem; */
  /* margin-right: -3.2rem; */
  /* 	margin-left: 11rem; */
}

h4 {
  font-family: sans-serif;
  color: #555555;
  font-size: 16px;
}
h3 {
  font-family: sans-serif;
  color: #555555;
}
p {
  font-family: sans-serif;
  color: #888888;
  font-size: 14px;
}
a {
  font-family: sans-serif;
  color: #d15423;
  text-decoration: none;
}

@media screen and (min-width: 1920px) {
  body {
    background-color: #f5f5f5;
  }
}
</style>