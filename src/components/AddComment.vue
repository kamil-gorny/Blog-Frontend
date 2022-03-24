<template>
  <div class="add-comment">
    <img class="profile-image" src="../assets/profile.png" alt="">
    <div class="comment">
      <input placeholder="Write a comment..." class="comment-input" type="text">
      <i class="fa-solid fa-photo-film"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddComment"
}
</script>

<style scoped>
.add-comment{
  display: flex;
  width: 100%;
  flex-direction: row;
  font-size: 21px;
  margin-top:40px;
}
.profile-image{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.comment-input{
  width: 80%;
  border-radius: 40px;
  height: 80%;
  border:none;
  margin-top: 5px;
  font-size: 21px;
}

.comment-input:focus{
  outline: none;
}

.comment-input::placeholder{
  font-size: 21px;
  color:#D6D8DA;
}
.comment{
  width: 100%;
  border-radius: 40px;
  display: flex;
  border: 1px solid #D6D8DA;
  align-items: center;
  justify-content: space-between;
  padding-right:30px;
  padding-left:30px;
}



</style>