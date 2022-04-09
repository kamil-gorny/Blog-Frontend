<template>
<div class="tag">
  {{tagText}}
</div>
</template>

<script>
export default {
  name: "Tag",
  props:{
    tagText:String,
  }
}
</script>

<style scoped>
.tag{
  color:#0583D2;
  border: 2px solid #0583D2;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-weight: bold;
  width: 150px;
  justify-content: center;
  padding-top: 5px;
  box-sizing: border-box;
  padding-bottom: 5px;
}
</style>