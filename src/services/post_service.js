import axios from "axios";


export const postService = {
    addPost,
    removePost,
    editPost,
    getPost,
    getPosts,
};


async function addPost(post){
    await axios.post("http://kamilgorny.azurewebsites.net/api/post", post, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}


async function removePost(){

}

async function editPost(){

}

async function getPost(id){

}

async function getPosts(){
  return await axios.get("http://kamilgorny.azurewebsites.net/api/post");
}