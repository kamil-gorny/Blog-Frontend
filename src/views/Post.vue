<template>
<PostHeader :title="post.title" :author="post.author" :authorImage="post.authorImage" :post-image="post.postImage" :creationDate="post.creationDate"/>
</template>

<script>
import PostHeader from "@/components/PostHeader";

export default {
  name: "Post",
  components:{
    PostHeader,
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

</style>