<template>
  <Navbar />

    <router-view/>

</template>

<script>

import Navbar from "@/components/Navbar";
import axios from "axios";
import {authenticationService} from "@/services/auth_service";
import {Role} from "@/helpers/role";

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data(){
    return{
      currentUser: null
    }
  },
  created () {
    authenticationService.currentUser.subscribe(x => this.currentUser = x);
  },
  computed: {
    isAdmin () {
      return this.currentUser && this.currentUser.role === Role.Admin;
    },
    isAuth(){
      return this.currentUser
    }
  },
}

</script>

<style>
*{
  box-sizing: border-box;
  margin:0;
  padding:0;
}
body {
  font-family: 'Helvetica', sans-serif;
  color: #3B454E;
  box-sizing: border-box;
  width: 100%;

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
