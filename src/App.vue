<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
body {
  font-family: 'Helvetica', sans-serif;
}

.container{
  width: 90%;
  display: flex;
  margin: auto;
}

p{
  margin:0;
}
</style>
