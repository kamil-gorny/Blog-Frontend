<template>
  <nav>
    <ul class="nav">
<!--      <div class="left-nav">
        <img class="category-image" src="../assets/category-image.png" alt="">
        <p class="category-name">Writeups</p>
        <p>/</p>
        <img src="../assets/post-image.png" alt="" class="post-image">
        <p class="post-title">(Write-up) THM: Vulnversity</p>
      </div>-->
      <li class="nav-item" v-if="$root.isAuth">
        <p>Menu</p>
        <i class="fa-solid fa-chevron-down"></i>
        <ul class="dropdown">
          <li><i class="fa-solid fa-user"></i>Profile</li>
          <li><i class="fa-solid fa-gear"></i>Settings</li>
          <li v-if="$root.isAdmin" @click="adminpanel"><i class="fa-solid fa-user"></i>Admin Panel</li>
          <li @click="logout"><i class="fa-solid fa-door-open"></i>Logout</li>
        </ul>
      </li>
      <li class="nav-item" v-else>
        <p @click=login>Log in</p>
        <p>|</p>
        <p @click=signup>Sign up</p>
      </li>


    </ul>

  </nav>
</template>

<script>
import router from "@/router";
import {Role} from "@/helpers/role";
import {authenticationService} from "@/services/auth_service";

export default {
  name: "Navbar",

  methods:{
    login(){
      router.push("/login");
    },
    signup(){
      router.push("/signup");
    },
    logout(){
      authenticationService.logout();
    },
    adminpanel(){
      router.push("/admin")
    }
  }
  }



</script>

<style scoped>

.nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;
  height: 60px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
}

.left-nav {
  margin-right: auto;
  display: flex;
  gap: 10px;
  flex-direction: row;
}

.left-nav > img {
  height: 15px;
  width: 15px;
}

.nav-item {
  list-style: none;
  position: relative;
  display: flex;

  flex-direction: row;
  gap: 5px;
  padding-right: 10px;
  z-index: 10000;
}

.nav-item:hover {
  cursor: pointer;
}

.nav-item:hover ul, .nav-item:focus ul {
  visibility: visible;

}

.dropdown {
  background-color: #fff;
  position: absolute;
  top: 1rem;
  left: -5rem;
  list-style: none;
  box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  gap: 0.5rem;
  visibility: hidden;
  width: 150px;
  padding: 10px 5px;
}

.dropdown > li {
  background-color: #fff;
  transition: background-color 200ms ease-in-out;
  padding: 10px 5px;
}
.dropdown > li > i{
  padding-right: 8px;
}
.dropdown > li:hover {
  background-color: #f1f1f1;
  cursor: pointer;
}
</style>