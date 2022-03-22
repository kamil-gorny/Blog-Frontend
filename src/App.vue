<template>
  <Navbar />
  <div class="container">
    <router-view/>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
body {
  font-family: 'Helvetica', sans-serif;
  color: #3B454E;
  box-sizing: border-box;
}

.container{
  display: flex;
  margin: auto;
}

p{
  margin:0;
}
</style>
