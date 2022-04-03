<template>
  <form class="register-form" @submit="onSubmit">
    <div class="form-header">
      <h1>Log in</h1>
    </div>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="email" placeholder="john-smith@example.com" name="email" id="email" v-model="user.Email" required>
    <div class="password">
    <label for="password"><b>Password</b></label>
    <p class="forgot-password">Forgot password?</p>
    </div>
    <input type="password" placeholder="**********" name="password" id="password" v-model="user.Password" required>
    <hr>
    <button type="submit" class="registerbtn">Log in</button>

    <div class="remember">
      <input type="checkbox">
      <label>Remember me</label>
    </div>
    <div class="or">
      <p><span>or</span></p>
    </div>

    <div class="socials">
      <div class="socials-button">
        <img class="google-logo" src="../assets/google-logo-png.png" alt="google logo">
        Google
      </div>
      <div class="socials-button">
        <img class="twitter-logo" src="../assets/twitter.png" alt="google logo">
        Twitter
      </div>
    </div>

  </form>

</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data(){
    return{
      user: {
        Email: '',
        Password: '',
      },
    }
},
  methods:{
    async onSubmit(e){
      e.preventDefault()
      await axios.post("http://localhost:5222/api/auth/login",this.user,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
}
</script>

<style scoped>
.google-logo{
  height: 25px;
  width: 25px;
}
.twitter-logo{
  height: 20px;
  width: 25px;
}
.or {
  margin-top: 30px;
}
.or > p {
  width: 100%;
  color: #D6D8DA;
  text-align: center;
  border-bottom: 1px solid #D6D8DA;
  line-height: 0.1em;
  margin: 10px 0 20px;
}

.or > p span {
  background:#fff;
  padding:0 10px;
}
.password{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.forgot-password{
  color: #0583D2;
  font-size: 16px;
}
.form-header{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
h1{
  font-size: 40px;
  font-weight: bold;
}
label{
  font-size: 18px;
}
.register-form{
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
input{
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #D6D8DA;
  padding-left: 20px;
  border-radius: 5px;
  font-size: 18px;
  line-height: 18px;
}

input::placeholder{
  font-weight: bold;
  color:#D6D8DA;
  line-height: 18px;

}
button{
  height: 40px;
  border:none;
  background-color: #0583D2;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
  border-radius: 5px;

}

.remember{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
}
.remember >input{
  width: 20px;
  height: 20px;
  border:none;
  margin: 0 10px 0 0;
}

.remember > label {
  font-size: 16px;
}
.remember > input {
  width: 20px;
  height: 20px;
}

.socials{
  display: flex;
  justify-content: space-around;

}

.socials-button{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width:100px;
  padding:5px;
  border-radius: 5px;
  border: 1px solid #D6D8DA;
}
</style>