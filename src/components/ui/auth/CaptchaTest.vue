<template>
    <div>
        <div>
            <canvas ref="textCanvas"></canvas>
            <img src="" :alt="'the captcha is ' + captcha" ref="captchaImage">
        </div>
        <label for="captchaInput">Answer the Captcha:</label>
        <input type="text" name="captchaInput" v-model="userInput" @change="compareCaptcha" class="form-control" :class="{ 'is-invalid': this.captcha != this.userInput && this.userInput != '' }" required
        data-msg="Captcha invalid. Please try again.">
    </div>
</template>

<script>
    export default {

        mounted(){
            this.captcha = this.generateCaptcha();
            
        },

        data(){
            return { 
                userInput:"",
                captcha:"",
                canvas:{},
            }
        },
        methods:{

            generateCaptcha(){
                const characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

                this.captcha = "";

                for (let i = 0; i < 10; i++) {
                    let randomNumber = Math.floor(Math.random() * (characters.length-0 + 0) + 0)
                    this.captcha += characters[randomNumber];
                }
                
               
                this.canvas = this.$refs.textCanvas.getContext('2d');
                this.canvas.width = this.captcha.length;
                this.canvas.font = '25px serif';
                this.canvas.fillText(this.captcha, 100, 100);
                this.$refs.captchaImage.src = this.canvas.canvas.toDataURL();
                return this.captcha;
            },
            compareCaptcha(){
                if(this.captcha == this.userInput){
                    this.$emit('captcha-done', 1)
                } else { 
                    this.$emit('captcha-done', 0)
                }
               
            }
        }
    }
</script>

<style scoped>

input{
    margin-bottom:10px;
}

div img { 
    height:120px;
    width:300px;
}

img{

    width:300px;
    height:150px;
}

canvas{
   display: none;
   border: 1px black solid;
}
</style>