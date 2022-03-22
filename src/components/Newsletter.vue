<template>
  <div class="newsletter">
      <div class="header">Get an email whenever I publish.</div>
      <div class="newsletter-form">
        <input type="text" placeholder="Your email">
        <div class="button">
          <i class="fa-solid fa-envelope"></i>
          <p>Subscribe</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Newsletter"
}
</script>

<style scoped>
.newsletter{
  display: flex;
  border:1px solid #D6D8DA;
  flex-direction: column;
  border-radius: 5px;
  margin-top:50px;
  padding:45px;

}
.header{
  font-weight: bold;
  font-size:25px;
  margin-bottom: 20px;
}
.newsletter-form{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.button{
  border:1px solid #D6D8DA;
  border-radius: 25px;
  padding: 5px 15px;
  gap:10px;
  display:flex;
  align-items: center;
  background-color: #F6F8FA;
  font-weight: bold;


}

.button:hover{
  cursor:pointer;
}
input{
  border:none;
  border-bottom: 1px solid #3B454E;
  width: 60%;
}

input:focus{
  outline:none;
  border: none;
  border-bottom: 1px solid #3B454E;
}


input,
input::-webkit-input-placeholder {
  font-size: 20px;
  outline: none;
}
</style>