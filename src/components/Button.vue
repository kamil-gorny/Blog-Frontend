<template>
  <div class="create-button">
    <i class="fa-solid fa-plus"></i>
    {{ content }}
  </div>
</template>

<script>
export default {
  name: "Button",
  props:{
    content: String,
  }
}
</script>

<style scoped>

.create-button{
  display: flex;
  width: 8%;
  background-color: #0583D2;
  border-radius: 5px;
  color: white;
  gap: 5px;
  padding: 12px 10px;
  text-align: center;
  justify-content: center;
  margin-left: auto;
  margin-bottom: 30px;
  align-items: center;
  margin-right: 30px;
}

.create-button > i {
  font-size: 20px;
}
</style>