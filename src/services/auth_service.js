import { BehaviorSubject } from 'rxjs';
import axios from "axios";
import router from "@/router";
import { useRoute } from 'vue-router';
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    signup,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

async function login(email, password) {
    await axios.post("http://kamilgorny.azurewebsites.net/api/auth/login", {email, password}, {
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res =>{
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        currentUserSubject.next(res.data);
    });
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);

    const { authorize } = this.$route.meta;
    if(authorize){
        router.push("/login");
    }else{
        router.push("/");
    }
}

async function signup(user){
    await axios.post("http://kamilgorny.azurewebsites.net/api/auth/login", user, {
        headers: {
            'Content-Type': 'application/json',
        }});
}
