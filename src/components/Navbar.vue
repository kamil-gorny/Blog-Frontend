<template>
  <div class="navbar">
      <div class="left-nav">
        <img class="category-image" src="../assets/category-image.png" alt="">
        <p class="category-name">Writeups</p>
        <p>/</p>
        <img src="../assets/post-image.png" alt="" class="post-image">
        <p class="post-title">(Write-up) THM: Vulnversity</p>
      </div>
      <div class="right-nav">
        <i class="fa-solid fa-magnifying-glass"></i>
        <p>Search</p>
        <p>|</p>
        <p>Menu</p>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.navbar{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  font-size:14px;
}
.left-nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap:10px;
}
.right-nav{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:10px;
}
.left-nav > img{
  height: 15px;
  width: 15px;
}
</style>