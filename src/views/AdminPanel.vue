<template>
  <div class="admin-panel">
    <div class="configuration">
      <div class="configuration-item"><i class="fa-solid fa-file-pen"></i>Posts</div>
      <div class="configuration-item"><i class="fa-solid fa-user"></i>Users</div>
      <div class="configuration-item"><i class="fa-solid fa-tag"></i>Tags</div>
      <div class="configuration-item"><i class="fa-solid fa-comment"></i>Comments</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminPanel.vue"
}
</script>

<style scoped>
.configuration-item {
  padding:20px;
  font-weight: bold;
}
i{
  padding-right: 10px;
}
</style>