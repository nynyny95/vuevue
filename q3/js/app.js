// // 실습1
// // let app01 = new Vue.component('global', {
// //     template:'<p>이것은 다른 자녀 전세계 컴포넌트</p>'
// // });
// Vue.component('todo_footer',{
//     template:'<p>이것은 다른 자녀 전세계 컴포넌트</p>'
// });

// // 실습2
// // let app02 = new Vue{
// //     let temp2 = {
// //         template:'<p>이것은 다른 자녀 지역 컴포넌트</p>'
// //     }

// //     new Vue({
// //         el:'#app02',
// //         components:{
// //             'local':temp2
// //         }
// //     });
// // }
// let ccmp = {
//     template:'<p>이것은 다른 자녀 지역 컴포넌트</p>'
// }

// let app강사님 = new Vue({
//     el:'#app',
//     data:{
//         message:'이것은 그냥 졸린 것이 아닌 완전 졸림이다.'
//     },

//     components:{
//         'todo_list':ccmp
//     }
// });

// // let app = new Vue({
// //     el:'#app',
// //     data:{
// //         message:'이것은 그냥 졸린 것이 아닌 완전 졸림이다.'
// //     }
// // });


//===================================================


// //sibling_component를 이름으로 갖는 새로운 컴포넌트 등록하기
// //option: template, props
// Vue.component('cc', {
//     props:['propsdata'],
//     template:'<p>{{propsdata}}</p>'
// });

// Vue.component('sibling-component', {
//     props:['anotherMessage'],
//     template:'<p>{{anotherMessage}}</p>'
// });

// let app = new Vue({
//     el:'#app',
//     data:[
//         {message:'안녕~'},
//         {anotherMessage:'반가웡'}
//     ]

//     // data 속성 1개 더 지정(ex, anotherMessage) 후 임의의 문자열을 값으로 대입
//     // 새로 지정한 data 속성은 위 sibling_component에 props로 전달
// });


// 강사님 풀이
Vue.component('cc', {
    props:['propsdata'],
    template:'<p>{{propsdata}}</p>'
});

Vue.component('sibling-component', {
    props:['propsdata'],
    template:'<p>{{propsdata}}</p>'
});

let app = new Vue({
    el:'#app',
    data:{
        message:'안녕~',
        anotherMessage:'반가웡'
    }
});