<template>
  <form class="register-form" @submit="onSubmit">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>

      <label for="firstName"><b>First Name</b></label>
      <input type="text" placeholder="Enter First Name" name="firstName" id="firstName" v-model="user.FirstName" required>

      <label for="lastName"><b>Last Name</b></label>
      <input type="text" placeholder="Enter Last Name" name="lastName" id="lastName" v-model="user.LastName" required>

      <label for="userName"><b>Username</b></label>
      <input type="text" placeholder="Enter User Name" name="userName" id="userName" v-model="user.UserName" required>

      <label for="email"><b>Email</b></label>
      <input type="email" placeholder="Enter Email" name="email" id="email" v-model="user.Email" required>

      <label for="password"><b>Password</b></label>
      <input type="password" placeholder="Password" name="password" id="password" v-model="user.Password" required>
      <hr>
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
      <button type="submit" class="registerbtn">Register</button>


    <div class="container signin">
      <p>Already have an account? <a href="#">Sign in</a>.</p>
    </div>
  </form>
</template>

<script>
export default {
  name: "Register",
  data(){
    return{
      user: {
        FirstName: '',
        LastName: '',
        UserName: '',
        Email: '',
        Password: '',
      },
    }
  },
  methods:{
    async onSubmit(e){
      e.preventDefault()
      const res = await fetch(` http://localhost:5222/api/user/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.user)
      });
    }
  }
}
</script>

<style scoped>

.register-form{
  display: flex;
  flex-direction: column;
}
</style>
