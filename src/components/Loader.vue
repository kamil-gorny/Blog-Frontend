<template>
  <div class="loader"/>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped>

.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3B454E;
  border-radius: 50%;
  width: 120px;
  position: fixed;
  top: calc(50% - 120px);
  left: calc(50% - 80px);
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>