<template>
  <nav>
    <ul class="nav">
      <div class="left-nav">
        <img class="category-image" src="../assets/category-image.png" alt="">
        <p class="category-name">Writeups</p>
        <p>/</p>
        <img src="../assets/post-image.png" alt="" class="post-image">
        <p class="post-title">(Write-up) THM: Vulnversity</p>
      </div>
      <li class="nav-item" v-if="$root.$data.isAuthorized">
        <i class="fa-solid fa-magnifying-glass"></i>
        <p>Search</p>
        <p>|</p>
        <p>Menu</p>
        <i class="fa-solid fa-chevron-down"></i>
        <ul class="dropdown">
          <li><i class="fa-solid fa-user"></i>Profile</li>
          <li><i class="fa-solid fa-gear"></i>Settings</li>
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

export default {
  name: "Navbar",
  methods:{
    logout(){
      this.$root.setUnauthorized();
      localStorage.removeItem("token");
    },
    login(){
      router.push("/login");
    },
    signup(){
      router.push("/signup");
    }
  }
  }



</script>

<style scoped>

.nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;

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
}

.nav-item:hover {
  cursor: pointer;
}

.nav-item:hover ul, .nav-item:focus ul {
  visibility: visible;
  opacity: 1;
}

.dropdown {
  position: absolute;
  top: 1rem;
  left: -1rem;
  list-style: none;
  box-shadow: 0px 7px 5px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  gap: 0.5rem;
  opacity: 0;
  visibility: hidden;
  width: 150px;
  transition: opacity 200ms ease-in-out;
  padding: 10px 5px;
}

.dropdown > li {
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