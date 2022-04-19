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
    <tr v-for="post in posts" :key="post.id">
      <th>{{post.title}}</th>
      <th>{{ post.tag }}</th>
      <th>{{ post.creationDate }}</th>
      <th><i class="fa-solid fa-pen-to-square"></i></th>
      <th><i class="fa-solid fa-trash-can" @click="deletePost(post.id)"></i></th>
    </tr>
    </tbody>
  </table>
</div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import router from "@/router";
import {postService} from "@/services/post_service";

export default {
  name: "PostsTable",
  components: {Button},
  data(){
    return {
        posts: []
    }
  },
  methods:{
    addPost(){
      router.push("/admin/post")
    },
    async deletePost(id){
      await postService.removePost(id);
    }
  },
  async created() {
    const posts = await postService.getPosts();
    this.posts = posts;
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