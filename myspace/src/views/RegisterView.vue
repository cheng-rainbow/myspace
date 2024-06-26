<template>
    <ContentBase>
        <div class="row justify-content-md-center ">
            <div class="col-4">
                <form @submit.prevent="register">
                    <div class="form-group">
                        <label for="username">username</label>
                        <input v-model="username" type="text" class="form-control" id="username" aria-describedby="emailHelp">
                        <small id="usernameHelp" class="form-text text-muted">输入注册的邮箱</small>
                    </div>
                    <div class="form-group">
                        <label for="password">password</label>
                        <input v-model="password" type="password" class="form-control" id="password">
                        <div class="err-message">{{ err_message }}</div>
                        <label for="password_confirm" style="margin-top: 5px">confirm password</label>
                        <input v-model="password_confirm" type="password" class="form-control" id="password_confirm">
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
import $ from 'jquery';

export default { 
    name : "RegisterView",
    components : {
        ContentBase 
    },
    setup : () => {
        const store = useStore();
        let username = ref('');
        let password = ref('');
        let password_confirm = ref('');
        let err_message = ref('');

        const register = () => {
            err_message.value = "";
            // console.log(store, router)   
            // console.log(username.value, password.value, password_confirm.value)
            $.ajax({
                url : 'https://app165.acapp.acwing.com.cn/myspace/user/',
                type : "POST",
                data : {
                    username : username.value,
                    password : password.value,
                    password_confirm : password_confirm.value,
                },
                success : (resp) => {
                    if (resp.result === "success") {
                        store.dispatch("login",{
                            username : username.value,
                            password : password.value,
                            success : () => {
                                
                                router.push({name : 'UserListView'})
                            },  
                            error : () => {
                                err_message.value = "系统异常, 稍后尝试";
                            }
                        })
                    } else {
                        err_message.value = resp.result;
                    }
                    
                }
            })
        }

        return {
            username,
            password,
            err_message,
            store,
            password_confirm,
            register,
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