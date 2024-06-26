<template>
    <ContentBase>
        <div class="card" v-for="user in users" :key="user.id" @click="open_user_profile(user.id)">
            <div class="body-card">
                <div class="row">
                    <div class="col-1 img-field">
                        <img class="img-fluid img-mycss " :src="user.photo" alt="">
                        
                    </div>
                    <div class="col-11">
                        <div class="username">{{ user.username }}</div>
                        <div class="fllowerCount">{{user.followerCount}}</div>
                        
                    </div>
                </div>
            </div>
        </div>
    </ContentBase>

</template>

<script>
import ContentBase from '@/components/ContentBase.vue';
import $ from 'jquery'
import {ref} from 'vue'

import { useStore } from 'vuex';
import router from '@/router';
export default {
    name : "UserListView",
    components : {
        ContentBase,
    },

    setup : () => {
        const store = useStore();
        let users = ref([]);
        $.ajax ({
            url : 'https://app165.acapp.acwing.com.cn/myspace/userlist/',
            type : 'get',
            success(resp) {
                users.value = resp;
                // console.log(resp)
            }
        })

        const open_user_profile = userId => {
            if (store.state.user.is_login) {
                router.push({
                    name : "UserProfileView",
                    params : {
                        userId,
                    }
                })
            } else {
                router.push({
                    name : "LoginView",
                })
            } 
        }

        return {
            users,
            open_user_profile,
        }
    }
}
</script>

<style scoped>
.img-mycss {
    margin-left: 10px;
    margin-top: 10px;
    max-width: 100%; 
    height: auto;
    margin-bottom: 10px;
    border-radius: 50%;
}
.fllowerCount {
    color: grey;
    height: 50%;
}

.username {
    margin-top: 5px;
    font-weight: bold;
    height: 50%;
}

.card {
    margin-bottom: 5px;
    cursor: pointer;
}

.card:hover {
    box-shadow: 2px 2px 10px lightgray;
    transition: 500ms;
}
.img-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>