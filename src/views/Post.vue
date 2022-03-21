<template>
<PostHeader/>
</template>

<script>
import PostHeader from "@/components/PostHeader";

export default {
  name: "Post",
  components:{
    PostHeader,
  },
  async beforeRouteEnter(to, from, next){
    const res = await fetch(`http://localhost:5003/posts/${to.params.id}`);
    const post = await res.json();
  }
}
</script>

<style scoped>

</style>