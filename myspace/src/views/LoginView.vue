<template>
    <ContentBase>
        <div class="row justify-content-md-center ">
            <div class="col-4">
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="username">username</label>
                        <input v-model="username" type="text" class="form-control" id="username" aria-describedby="emailHelp">
                        <small id="usernameHelp" class="form-text text-muted">输入注册的邮箱</small>
                    </div>
                    <div class="form-group">
                        <label for="password">password</label>
                        <input v-model="password" type="password" class="form-control" id="password">
                        <div class="err-message">{{ err_message }}</div>
                    </div>
                    <button type="submit" class="btn btn-primary">登录</button>
                </form>
            </div>
        </div>
        
    </ContentBase>
</template>

<script>
// import store from '@/store';
import ContentBase from '../components/ContentBase.vue'
import { ref } from 'vue';
import { useStore } from 'vuex';
import router from '@/router/index';

export default { 
    name : "LoginView",
    components : {
        ContentBase
    },
    setup : () => {
        const store = useStore();
        let username = ref('');
        let password = ref('');
        let err_message = ref('');

        const login = () => {
            err_message.value = "";
            store.dispatch("login",{
                username : username.value,
                password : password.value,
                success : () => {
                    
                    router.push({name : 'UserListView'})
                },  
                error : () => {
                    err_message.value = "用户名或密码错误";
                }
            })
        }

        return {
            username,
            password,
            err_message,
            login,
            store,
        }
    }
}
</script>

<style scoped>
.btn {
    width: 100%;
}

.err-message {
    color: red;
}

</style>