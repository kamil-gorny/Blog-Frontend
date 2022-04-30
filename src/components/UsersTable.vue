<template>
  <div class="user-container">
    <Button class="btn" content="Create" @click="adduser"/>
    <div class="userTable">
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Tag</th>
          <th>Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id">
          <th>{{user.title}}</th>
          <th>{{ user.tag }}</th>
          <th>{{ user.creationDate }}</th>
          <th><i class="fa-solid fa-pen-to-square"></i></th>
          <th><i class="fa-solid fa-trash-can" @click="deleteuser(user.id)"></i></th>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import router from "@/router";
import {userService} from "@/services/user_service";

export default {
  name: "UsersTable",
  components: {Button},
  data(){
    return {
      users: []
    }
  },
  methods:{
    adduser(){
      router.push("/admin/user")
    },
    async deleteuser(id){
      await userService.removeuser(id);
    }
  },
  async created() {
    const users = await userService.getusers();
    this.users = users;
  }
}
</script>

<style scoped>
.userTable{
  width: 100%;

}
table{
  width: 100%;
}
thead{
  background-color: #F6F8FA;
  height: 60px;
}

table{
  border:none;
  border-spacing: 0px;
}
tbody > tr > th{
  font-weight: 400;
  font-size:18px;

}


th{
  padding:10px;
  text-align: left;
  border-bottom: 1px solid #BBBBBB;
  height: 60px;
}

.user-container{
  width: 100%;
}

i{
  font-size: 22px;
}

.btn{
  margin-top:40px;
}

</style>