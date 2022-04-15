<template>
  <div class="post-container">
  <Button class="btn" content="Create" @click="addPost"/>
<div class="postTable">
  <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>Tag</th>
      <th>Date</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th>(Write-up) THM: Vulnversity</th>
      <th>Tryhackme</th>
      <th>19.12.2021</th>
      <th><i class="fa-solid fa-pen-to-square"></i></th>
      <th><i class="fa-solid fa-trash-can"></i></th>
    </tr>
    </tbody>
  </table>
</div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import router from "@/router";
export default {
  name: "PostsTable",
  components: {Button},
  methods:{
    addPost(){
      router.push("/admin/post")
    }
  }
}
</script>

<style scoped>
.postTable{
  width: 100%;

}
table{
  width: 100%;
}
thead{
  background-color: #F6F8FA;
  height: 60px;
}

table{
  border:none;
  border-spacing: 0px;
}
tbody > tr > th{
  font-weight: 400;
  font-size:18px;

}


th{
  padding:10px;
  text-align: left;
  border-bottom: 1px solid #BBBBBB;
  height: 60px;
}

.post-container{
  width: 100%;
}

i{
  font-size: 22px;
}

.btn{
  margin-top:40px;
}

</style>