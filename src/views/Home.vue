<template>
<header>
  <p class="welcome">Hello! Welcome</p>
  <span class="heading">
    <p>Hackers and Coders</p>
    <img src="../assets/Developer.gif" alt="Developer coding">
  </span>
  <p class="sidenote">
    I am just a software engineer fascinated by hacking. If you also love to build and
    break things, go ahead and read my posts!
  </p>
  <span class="search-box-wrapper">
      <input class="search-box" type="text">
      <i class="fa-solid fa-magnifying-glass"></i>
  </span>
  <div class="tag-container">
    <Tag v-for="tag in tags" :key="tag.id" :tagText="tag.tagName" />
  </div>
  <PostListItem v-for="post in posts" :key="post.id" :title="post.title" :description="post.description" :image="post.imageUrl" :href="'/posts/' + post.id" />
</header>
</template>

<script>
import Tag from "@/components/Tag";
import axios from "axios";
import PostListItem from "@/components/PostListItem";
import {postService} from "@/services/post_service";

export default {
  name: "Home",
  components:{
    Tag,
    PostListItem
  },
  data(){
    return{
      tags: [],
      posts:[]
    }
  },
  async created() {
    const tags = await axios.get(`http://kamilgorny.azurewebsites.net/api/tag`);
    const posts = await postService.getPosts();
    this.tags = tags.data;
    this.posts = posts.data;
  }
}
</script>

<style scoped>
header{
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  margin-top:60px;
  width: 60%;
}
.welcome{
  font-weight: bold;
  color: #0583D2;
  font-size:30px;
  text-align: center;
}

.heading{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 60px;
  font-weight: bold;
  color:#3B454E;
  text-align: center;
  margin: 5px auto 20px;
}
img{
  height: 61px;
}
.sidenote{
  font-size: 20px;
  text-align: center;
  color:#bbb;
}
.search-box{

  height: 40px;
  width: 100%;
  outline: none;
  border:none;
  font-size: 20px;
}

.search-box-wrapper{
  padding: 5px 20px 5px 5px;
  font-size: 25px;
  margin-top:30px;
  border-radius: 15px;
  border: 3.5px solid #3B454E;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
}

.tag-container{
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top:30px;
  gap:20px;
}
</style>