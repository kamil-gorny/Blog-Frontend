<template>
<header>
  <p class="welcome">Hello! Welcome</p>
  <span class="heading">
    <p>Hackers and Coders</p>
    <img src="../assets/Developer.gif" alt="Developer coding">
  </span>
  <p class="sidenote">
    I am just a software engineer fascinated by hacking. If you also love to build and
    break things, go ahead and read my posts!
  </p>
  <span class="search-box-wrapper">
      <input class="search-box" type="text">
  </span>

</header>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
header{
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  margin-top:60px;
  width: 60%;
}
.welcome{
  font-weight: bold;
  color: #0583D2;
  font-size:30px;
  text-align: center;
}

.heading{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 60px;
  margin-top:5px;
  margin-bottom: 20px;
  font-weight: bold;
  color:#3B454E;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
}
img{
  height: 61px;
}
.sidenote{
  font-size: 20px;
  text-align: center;
  color:#bbb;
}
.search-box{
  margin-top:30px;
  height: 50px;
  width: 100%;
  border-radius: 15px;
  border: 3.5px solid #3B454E;
}
</style>