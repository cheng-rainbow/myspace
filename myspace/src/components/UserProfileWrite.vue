<template>
    <div class="card edit-filed">
        <div class="body-card">
            <form class=".edit-filed">
                <div class="form-group ">
                    <label for="edit-post">编辑帖子</label>
                    <textarea  v-model="content" class="form-control" id="edit-post" rows="3"></textarea>
                    <button @click="post_a_post" type="button" class="btn btn-info btn-sm">提交</button>

                </div>
            </form>
        </div> 
    </div>
</template>

<script>
import { ref } from 'vue';
import $ from 'jquery';
import { useStore } from 'vuex';

export default {
    name : "UserProfileWrite",
    components : {
        
    },
    setup : (props, context) => {
        let content = ref('');
        const store = useStore();

        const post_a_post = () => {
            $.ajax({
                url : "https://app165.acapp.acwing.com.cn/myspace/post/",
                type : "POST",
                data : {
                    content : content.value,
                },
                headers : {
                    'Authorization' : "Bearer " + store.state.user.access,
                },
                success : (resp) => {
                    
                    if (resp.result === "success") {
                        context.emit('post_a_post', content.value);
                        content.value = "";
                    }
                }
            })
        }

        return {
            content,
            post_a_post,
        }
    }
}
</script>



<style scoped>
.edit-filed {
    margin-top: 10px;
}

.btn {
    margin-top: 10px;
}
</style>