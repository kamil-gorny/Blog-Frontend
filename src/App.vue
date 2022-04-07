<template>
  <Navbar />
  <div class="container">
    <router-view/>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar";
import axios from "axios";

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data(){
    return{
      isAuthorized:false,
    }
  },
  methods:{
    setAuthorized(){
      this.isAuthorized = true
    },
    setUnauthorized(){
      this.isAuthorized = false
    }
  }
}
axios.interceptors.response.use( res => {
  return res
}, err =>{
  if(err.statusCode == 401){
      localStorage.removeItem("token");
      this.isAuthorized = false
  }
})

</script>

<style>
body {
  font-family: 'Helvetica', sans-serif;
  color: #3B454E;
  box-sizing: border-box;
}
ul{
  padding: 0;
}
.container{
  display: flex;
  margin: auto;
}

p{
  margin:0;
}


</style>
