<template>
  <div class="post-lists-item">
    <img class="post-image" src="{{image}}" alt="post image">
    <div class="post">
      <div class="post-content">
      <p class="post-title">{{title}}</p>
        <p class="post-description">{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    title: String,
    description:String,
    image: String
  }
}
</script>

<style scoped>
  .post-image{
    width:100px;
    height: 100px;
  }
  .post-lists-item{
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #D6D8DA;
    width:100%;
    margin-left: auto;
    margin-right: auto;
    margin-top:60px;
  }
  .post{
    display: flex;
    margin-left:20px;
    gap:80px;
    margin-bottom: 50px;
  }
  .post-title{
    font-weight: bold;
    color:#3B454E;
    font-size:25px;
  }

  .post-description{
    margin-top:10px;
    color: #D6D8DA
  }
</style>