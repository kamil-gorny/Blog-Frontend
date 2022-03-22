<template>
  <div class="container">
    <PostHeader :title="post.title" :author="post.author" :authorImage="post.authorImage" :post-image="post.postImage" :creationDate="post.creationDate"/>
    <Newsletter/>
  </div>
</template>

<script>
import PostHeader from "@/components/PostHeader";
import Newsletter from "@/components/Newsletter";

export default {
  name: "Post",
  components:{
    PostHeader,
    Newsletter,
  },

  data(){
    return{
      post: {}
    }
  },

  async beforeRouteEnter(to, from, next){
    const res = await fetch(`http://localhost:5003/posts/${to.params.id}`);
    next(async vm => {
      vm.post = await res.json();
    });
  }
}
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
  }
</style>