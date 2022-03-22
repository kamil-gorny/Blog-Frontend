<template>
  <div class="postHeader">
    <div class="postMainHeader">
      <img class="postImage" :src="postImage" alt="post-image">
      <p class="postTitle">{{ title }}</p>
    </div>
    <div class="postSubHeader">
      <div class="postSubHeader--left">
        <img class="profileImage" :src="authorImage" alt="profile image">
        <p class="postAuthor">{{ author }}</p>
        <p class="postProperties">{{ creationDate }}</p>
      </div>
      <div class="postSubHeader--right">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-solid fa-share-nodes"></i>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "PostHeader",
  props: {
    title: String,
    postImage: String,
    author: String,
    authorImage: String,
    creationDate: String,
  },

}
</script>

<style scoped>
.postHeader {
  display: flex;
  color: #3B454E;
  font-size: 40px;
  margin-top: 150px;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}

.postMainHeader {
  display: flex;
  flex-direction: row;
}

.postTitle {
  align-self: flex-end;
  margin-left: 20px;
}

.postImage {
  width: 100px;
  height: 100px;
}

.postSubHeader {
  font-size: 18px;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.profileImage {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.postAuthor {
  font-weight: bold;
}

.postProperties {
  color: #D6D8DA;
}

hr {
  margin: 0;
  height: 1px;
  width: 100%;
  background-color: #D6D8DA;
  border: none;
}

.postSubHeader--left {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 15px;
}

.postSubHeader--right {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 65px;
  justify-content: space-between;
}
</style>