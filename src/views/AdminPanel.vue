<template>
  <div class="admin-panel">
    <div class="configuration">
      <div class="configuration-item">
        <span><i class="fa-solid fa-file-pen"></i>Posts</span></div>
      <div class="configuration-item">
        <span>
        <i class="fa-solid fa-user"></i>Users
      </span>
      </div>
      <div class="configuration-item">
        <span>
        <i class="fa-solid fa-tag"></i>Tags
      </span>
      </div>
      <div class="configuration-item">
        <span>
        <i class="fa-solid fa-comment"></i>Comments
        </span></div>
    </div>

    <PostsTable/>
  </div>
</template>

<script>
import PostsTable from "@/components/PostsTable";
export default {
  name: "AdminPanel.vue",
  components: {PostsTable}
}
</script>

<style scoped>
.admin-panel{
  display: flex;
  flex-direction: row;
  flex:1;

}
.configuration-item {
  padding: 20px 20px 20px 40px;
  font-weight: bold;
  margin: auto;
}
.configuration{
  border-right: 1px solid #bbbbbb;
  height: 100vh;
  width:18%;

}
i{
  padding-right: 10px;
}

</style>