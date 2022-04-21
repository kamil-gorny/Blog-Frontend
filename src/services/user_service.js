import axios from "axios";


export const userService = {
    addUser,
    removeUser,
    editUser,
    getUser,
    getUsers,
};


async function addUser(user){
    await axios.post("http://kamilgorny.azurewebsites.net/api/user", user, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}


async function removeUser(){

}

async function editUser(){

}

async function getUser(id){

}

async function getUsers(){
    return await axios.get("http://kamilgorny.azurewebsites.net/api/user");
}