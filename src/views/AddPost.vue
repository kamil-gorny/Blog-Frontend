<template>
  <div class="add-post">
    <div class="preview">
      <div class="display-bar">
        <i class="fa-solid fa-chevron-left"></i>Preview
      </div>
    </div>
    <div class="add-section">

      <form class="post-form" @submit="onSubmit">
        <label for="title"><b>Title</b></label>
        <input type="text" v-model="this.post.title" placeholder="(Write-up) THM: Vulnversity" name="title" id="title" required>

        <label for="description"><b>Description</b></label>
        <input type="text"  v-model="this.post.description" placeholder="Post about room vulnvernsality" name="description" id="description"  required>
       <b>Tags</b>
        <div class="tags">
          <Tag tag-text="Tryhackme"/>
          <Tag tag-text="Hack the box"/>
          <Tag tag-text="Portswigger"/>
          <Tag tag-text="Coding"/>
        </div>
        <label for="content"><b>Content</b></label>
        <textarea   v-model="this.post.content" class=content placeholder="Post about room vulnvernsality" name="content" id="content"  required/>
        <b>Image</b>
        <div class="image-selector">
        <input type="text" disabled>
          <input type="file" @change="onFileUpload"/>
        <div class="choose-image">Choose file</div>
        </div>

        <button type="submit">Add Post</button>
      </form>
    </div>
  </div>
</template>

<script>
import Tag from "@/components/Tag";
import {postService as post_service} from "@/services/post_service";
import {authenticationService} from "@/services/auth_service";
const currentUser = authenticationService.currentUserValue;

export default {
  name: "AddPost",
  components:{
    Tag,
  },
  data(){
    return{
      post:{
        title: "",
        description: "",
        content: "",
        creationDate: new Date().toJSON(),
        imageBase64: "",
        userId: currentUser.userId
      },
    }
  },
  methods:{
    async onSubmit(e){
      e.preventDefault();
      this.loading = true;
      await post_service.addPost(this.post);
      this.loading = false;
    },
    onFileUpload(){
      const file = document.querySelector('input[type=file]').files[0]
      const reader = new FileReader()

      reader.onloadend = () => {
        this.post.imageBase64 = reader.result;
      }

      reader.readAsDataURL(file);
    }
  }
}


</script>

<style scoped>
.add-post{
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top:5px;
}

.preview{
  width: 50%;
  border-right: 2px solid #BBBBBB;
}

.display-bar{
  font-size: 20px;
  background-color: #F6F8FA;
  padding:20px;
  border-bottom: 2px solid #BBBBBB;
}

.display-bar i{
  padding-right: 10px;
}
.add-section{
  background-color: #F6F8FA;
  width: 50%;
}

.post-form{
  display: flex;
  flex-direction: column;
  margin:30px;
}

input {
  height: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #D6D8DA;
  padding-left: 20px;
  border-radius: 5px;
  font-size: 18px;
  line-height: 18px;
}

input::placeholder {
  font-weight: bold;
  color: #D6D8DA;
  line-height: 18px;

}

textarea{
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #D6D8DA;
  padding-left: 20px;
  border-radius: 5px;
  font-size: 20px;
  padding-top:30px;
}
textarea::placeholder {
  font-family: 'Helvetica', sans-serif;
  font-weight: bold;
  color: #D6D8DA;

}
.tags{
  margin: 30px;
  display: flex;
  gap:20px;
}
.content{
  height: 400px;
}

button {
  height: 40px;
  border: none;
  background-color: #0583D2;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
  border-radius: 5px;

}

.image-selector{
  display: flex;
  align-items: center;
}
.choose-image{
  font-size:12px;
  background-color: #0583D2;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  margin-left:20px;
}
</style>