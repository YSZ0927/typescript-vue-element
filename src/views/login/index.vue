<template>
    <div class="login">
        <div class="login-form">
            <h1>数据客管理后台</h1>
            <p>
                <span>账户</span>
                <i :class="['geek-icon','geek-icon-user', {'actived': activeUserIcon}]"></i>
                <input type="text"
                    v-model="loginForm.userName"
                    placeholder="请输入用户名"
                    @focus="onFocus"
                    @blur="onBulr">
            </p>
            <p>
                <span>密码</span>
                <i :class="['geek-icon','geek-icon-password', {'actived': activePswIcon}]"></i>
                <input type="password"
                    v-model="loginForm.passWord"
                    placeholder="请输入密码"
                    @focus="onFocus"
                    @blur="onBulr">
            </p>
            <p>
                <el-button round type="primary"
                    @click="login"
                    :class="['login-form-button',
                            {'login-form-active-btn': activeUserIcon && activePswIcon}]">
                    登 录
                </el-button>
            </p>
            <p>
                <em>注：忘记密码请联系管理员重置密码</em>
            </p>
        </div>
        <canvas id="canvas"></canvas>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Watch } from 'vue-property-decorator';

    interface loginForm{
        userName: string,
        passWord: string,
    }

    @Component
    export default class Login extends Vue {
        private loginForm: loginForm = {
            userName: '',
            passWord: '',
        }

        private activeUserIcon: number = 0

        private activePswIcon: number = 0

        @Watch('loginForm', { deep: true })
        onFormChange(val: loginForm) {
            this.activeUserIcon = val.userName ? 1 : 0;
            this.activePswIcon = val.passWord ? 1 : 0;
        }

        private mounted() {
            this.canvasInit();
        }

        private canvasInit() {
            const canvas: any = document.getElementById('canvas');
            const ctx: any = canvas.getContext('2d');
            const w = window.innerWidth;
            const h = window.innerHeight;
            const hue = 217;
            const stars: any = [];
            let count = 0;
            const maxStars = 100;
            const canvas2: any = document.getElementById('canvas');
            const ctx2: any = canvas2.getContext('2d');
            canvas2.width = 1000;
            canvas2.height = 700;
            const half = canvas2.width / 10;
            const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
            gradient2.addColorStop(0.025, '#CCC');
            gradient2.addColorStop(0.1, `hsl(${hue}, 61%, 33%)`);
            gradient2.addColorStop(0.25, `hsl(${hue}, 64%, 6%)`);
            gradient2.addColorStop(1, 'transparent');
            ctx2.fillStyle = gradient2;
            ctx2.beginPath();
            ctx2.arc(half, half, half, 0, Math.PI * 2);
            ctx2.fill();
            function random(min:number, max:number) {
                if (arguments.length < 2) {
                    max = min;
                    min = 0;
                }
                if (min > max) {
                    const hold = max;
                    max = min;
                    min = max;
                }
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            function maxOrbit(x: number, y: number) {
                const max = Math.max(x, y);
                const diameter = Math.round(Math.sqrt(max * max + max * max));
                return diameter / 2;
            }
            // eslint-disable-next-line
            const Star = function (this: any) {
                const self: any = this;
                self.orbitRadius = random(0, maxOrbit(w, h));
                self.radius = random(60, self.orbitRadius) / 8;
                // 星星大小
                self.orbitX = w / 10;
                self.orbitY = h / 10;
                self.timePassed = random(0, maxStars);
                self.speed = random(0, self.orbitRadius) / 50000;
                // 星星移动速度
                self.alpha = random(2, 10) / 10;
                count += 1;
                stars[count] = self;
            };
            // eslint-disable-next-line
            Star.prototype.draw = function () {
                const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
                const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
                const twinkle = random(0, 50);
                if (twinkle === 1 && this.alpha > 0) {
                    this.alpha -= 0.05;
                } else if (twinkle === 2 && this.alpha < 1) {
                    this.alpha += 0.05;
                }
                ctx.globalAlpha = this.alpha;
                ctx.drawImage(canvas2, x - this.radius / 2,
                y - this.radius / 2, this.radius, this.radius);
                this.timePassed += this.speed;
            };

            for (let i = 0; i < maxStars; i += 1) {
            /* eslint-disable no-new */
                new Star.prototype.constructor();
            }
            function animation() {
                ctx.globalCompositeOperation = 'source-over';
                ctx.globalAlpha = 1; // 尾巴
                ctx.fillStyle = `hsla(${hue}, 44%, 10%, 1)`;
                ctx.fillRect(0, 0, w, h);
                ctx.globalCompositeOperation = 'lighter';
                for (let i = 1, l = stars.length; i < l; i += 1) {
                    stars[i].draw();
                }
                window.requestAnimationFrame(animation);
            }
            animation();
        }

        private onFocus() {
            console.log(this);
        }

        private onBulr() {
            console.log(this);
        }

        private login(): void {
            const that: any = this;
            if (that.activeUserIcon && that.activePswIcon) {
                that.$router.push({
                    path: '/company/companyList',
                });
            }
        }
    }
</script>

<style lang="stylus" scoped>
#canvas{
    height 100vh
    width 100vw
    vertical-align top
}
.login
    position relative
    // background url("~assets/images/background1.jpg") no-repeat
    // background-size 100% 100%
    background #000
    height 100vh
    &-form
        width 400px
        border-radius 3px
        box-shadow 0px 0px 10px rgba(0,0,0,.6)
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -70%)
        background rgba(255,255,255,.7)
        padding 40px
        h1
            text-align center
            font-size 22px
            margin-bottom 40px
        p
            padding-bottom 20px
            position relative
            span
                width 100px
                line-height 40px
                font-size 14px
                font-weight 600
            input
                display block
                width 100%
                background transparent
                line-height 2
                border-bottom 1px solid rgba(0,0,0,.2)
                padding-left 40px
            input:focus
                border-bottom 1px solid rgba(0,0,0,.8)
            em
                color rgb(14, 90, 177)
            i
                position absolute
                left 4px
                bottom 25px
                color rgba(0,0,0,.2)
            .actived
                color rgba(0,0,0,.8)
        &-button
            width 100%
            border none
            margin-top 30px
            letter-spacing 10px
            cursor wait
            background linear-gradient(40deg, rgb(240, 250, 240) 10%,rgb(141, 181, 226) 90%)
        &-active-btn
            background linear-gradient(40deg, rgb(21, 206, 37) 10%,rgb(14, 90, 177) 90%)
            cursor pointer
        &-active-btn:hover
            opacity .6
        &-active-btn:active
            opacity 1

</style>
