<template>
<div class="alert">
<p>{{ text }}</p>
  <i class="fa-solid fa-xmark"></i>
</div>
</template>

<script>
export default {
  name: "Alert",
  props:{
    text:String,
  }
}
</script>

<style scoped>
.alert{
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border-left: 5px solid #bc1810;
  background-color: #f7a7a3;
  color:#bc1810;
  display: flex;
  align-items: center;
  padding-left:20px;
  padding-right: 20px;
  justify-content:space-between;

}

i:hover{
  cursor: pointer;
}
</style>