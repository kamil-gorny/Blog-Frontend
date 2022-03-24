<template>
  <div class="socials-bar">
    <div class="reactions">
      <i class="fa-solid fa-heart"></i>12
      <i class="fa-solid fa-comment"></i>
    </div>
    <div class="socials">
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-solid fa-share-nodes"></i>
    </div>
  </div>
  <hr>

</template>

<script>
export default {
  name: "SocialsBar"
}
</script>

<style scoped>
.socials-bar{
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 21px;
}
.reactions{
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.socials{
  display: flex;
  flex-direction: row;
  gap: 10px;
}

hr{
  width: 100%;
  height: 1px;
  background-color: #D6D8DA;
  border: none;
}
</style>