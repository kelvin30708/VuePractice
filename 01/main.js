console.log(Vue);
const Counter = {
    data(){
        return {
            counter: 100
        }
    }
}
Vue.createApp(Counter).mount("#counter")