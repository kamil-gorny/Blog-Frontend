<template>
  <div class="add-post">
    <div class="preview">
      <div class="display-bar">
        <i class="fa-solid fa-chevron-left"></i>Preview
      </div>
    </div>
    <div class="add-section">

      <form class="post-form">
        <label for="title"><b>Title</b></label>
        <input type="text" placeholder="(Write-up) THM: Vulnversity" name="title" id="title" required>

        <label for="description"><b>Description</b></label>
        <input type="text" placeholder="Post about room vulnvernsality" name="description" id="description"  required>
       <b>Tags</b>
        <div class="tags">
          <Tag tag-text="Tryhackme"/>
          <Tag tag-text="Hack the box"/>
          <Tag tag-text="Portswigger"/>
          <Tag tag-text="Coding"/>
        </div>
        <label for="content"><b>Content</b></label>
        <textarea class=content placeholder="Post about room vulnvernsality" name="content" id="content"  required/>
        <b>Image</b>
        <div class="image-selector">
        <input type="text" disabled>
        <div class="choose-image">Choose file</div>
        </div>

        <button type="submit">Add Post</button>
      </form>
    </div>
  </div>
</template>

<script>
import Tag from "@/components/Tag";

export default {
  name: "AddPost",
  components:{
    Tag,
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