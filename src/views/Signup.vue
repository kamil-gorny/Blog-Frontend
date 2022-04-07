<template>
  <Loader v-if="loading"/>
  <form class="register-form" @submit="onSubmit">
    <div class="form-header">
      <h1>Sign up</h1>
      <p>Create account to start sharing your thoughts</p>
    </div>
    <hr>
    <label for="firstName"><b>First Name</b></label>
    <input type="text" placeholder="John" name="firstName" id="firstName" v-model="user.FirstName" required>

    <label for="lastName"><b>Last Name</b></label>
    <input type="text" placeholder="Smith" name="lastName" id="lastName" v-model="user.LastName" required>

    <label for="userName"><b>Username</b></label>
    <input type="text" placeholder="john-smith" name="userName" id="userName" v-model="user.UserName" required>

    <label for="email"><b>Email</b></label>
    <input type="email" placeholder="john-smith@example.com" name="email" id="email" v-model="user.Email" required>

    <label for="password"><b>Password</b></label>
    <input type="password" placeholder="**********" name="password" id="password" v-model="user.Password" required>
    <hr>
    <button type="submit" class="registerbtn">Sign up</button>
  </form>
</template>

<script>
import axios from "axios";
import router from "@/router";
import Loader from "@/components/Loader";

export default {
  name: "Register",
  components:{
    Loader
  },
  data() {
    return {
      user: {
        FirstName: '',
        LastName: '',
        UserName: '',
        Email: '',
        Password: '',
      },
      loading: false
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault()
      this.loading = true;
      await axios.post("http://kamilgorny.azurewebsites.net/api/auth/register", this.user, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(async () => {
        await axios.post("http://kamilgorny.azurewebsites.net/api/auth/login", {
          Email: this.user.Email,
          Password: this.user.Password
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(res => {
          localStorage.setItem("token", res.data);
          this.$root.setAuthorized()
          router.push({path: '/'})
        }, err => console.log(err));
      });
    }
  }
}
</script>

<style scoped>
.form-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

h1 {
  font-size: 40px;
  font-weight: bold;
}

label {
  font-size: 18px;
}

p {
  font-size: 18px;
  color: #D6D8DA;
}

.register-form {
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

input {
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #D6D8DA;
  padding-left: 20px;
  border-radius: 5px;
  font-size: 18px;
  line-height: 18px;
}

input::placeholder {
  font-weight: bold;
  color: #D6D8DA;
  line-height: 18px;

}

button {
  height: 40px;
  border: none;
  background-color: #0583D2;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
  border-radius: 5px;

}

</style>
