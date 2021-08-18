console.log(Vue);
// const Counter = {
//     data(){
//         return {
//             counter: 100
//         }
//     }
// }
// alias
const { ref, reactive } = Vue;
const App = {
    setup(){
        const msg = ref(0);
        const msg2 = ref('1');
        const msg3 = ref(true);

        const arr1 = reactive([0, 1, 2, 3, 4]);
        const obj1 = reactive({
            name: 'Tony',
            friend: [{name: 'Tom'}, {name: 'Abbie'}, {name: 'Frank'}]
        })
        arr1.push(5);
        console.log(arr1);
        console.log(obj1);
        
        
        // msg.value ++;   
        return {
            msg,
            msg2,
            msg3,
            arr1
        };
    }    
};
Vue.createApp(App).mount("#app");