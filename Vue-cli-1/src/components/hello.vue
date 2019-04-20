<template>
<div id="hello">
    <p v-cloak>{{value1 | msgFormat}}</p>
    <p v-for="(value,index) in list" :key="value.id">
        {{index}} --- {{value.name | msgFormat}}</p>
    <button :class="[value2?'':'newclass']" @click="func1()">样式绑定</button>
    <button @click="func2()" ref="httpButton">http请求</button>
    <button @click="func3()">route转换</button>
    <input type="text" v-model="value1" v-focus>
    <transition />
    <router-link to="/test">link to test</router-link>

    <router-view> </router-view>

</div>
</template>

<script>
import Vue from "vue";
import transition from './transition.vue'
export default {
    data: function () {
        return {
            value1: 'www.hhh.www.conadfwww',
            value2: false,
            newclass: '',
            data: 'son son son',
            list: [{
                    id: 1,
                    name: 'name1'
                },
                {
                    id: 2,
                    name: 'name2'
                },
                {
                    id: 3,
                    name: 'name3'
                },
                {
                    id: 4,
                    name: 'name4'
                },
                {
                    id: 5,
                    name: 'name5'
                }
            ]
        }
    },
    props: {
        sonValue: String
    },
    components: {
        transition
    },
    methods: {
        //change the style of button
        func1: function () {
            //console.log("haha", this);
            this.newclass = 'newclass'
            this.value2 = ~this.value2
            this.$emit('getSon', this.data)
            console.log(this.$refs.httpButton.innerText)
        },
        func2: function () {
            /* $.ajax({
                type: "GET",      //data 传送数据类型。post 传递
                dataType: 'json',  // 返回数据的数据类型json
                url: "http://localhost:8081/TestJsonp",  // yii 控制器/方法
                //data: { callback: func },  //传送的数据
                error: function (err) {
                    console.log(err);
                }, 
                success: function (data) {
                        console.log(typeof(data),data);
                }
            }) */

            //vue-resource 比jQuery来说更小
            /* this.$http.get('http://localhost:8081/TestJsonp').then(data => {
                //this.$set('news', data.stories);
                console.log(data);
                this.data = data
            }); */
        },
        func3: function () {
            this.$router.push('/test1')
        }
    },
    beforeCreate: function () {},
    created: function () {},
    beforeMount: function () {},
    mounted: function () {},
    beforeUpdate: function () {},
    updated: function () {},
    beforeDestory() {},
    destoryed: function () {},
    filters: {
        msgFormat: function (msg) {
            return msg.replace(/w{2,}/g, '代替了') //替换全字符串
            //return msg.toString().padStart(2,'X')
        }
    },
    directives: {
        'focus': {
            bind: (el, binding) => {},
            inserted: (el) => {
                el.focus()
            },
            updated: () => {

            }
        }
    }
}
</script>

<style scoped>
#hello {
    margin: 0 auto;
    height: 500px;
    width: 100%;
    background-color: #f0f0f0;
}

.newclass {
    font-size: 20px;
    background-color: #ccc;
}
</style>
