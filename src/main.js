import './assets/css/index.css'
import Vue from 'vue'
import App from './APP'
import router from './router'
// import route from 'vue-router'

// import  {printMe}  from './assets/js/index'
// import Vue from 'vue'
// let arr = ['测试的1', '测试的5', '测试的4'];
// function component() {
//   var element = document.createElement('div');
//   let promise = new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//       resolve(123)
//      },100)
//   })

  // // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // element.innerHTML = 'Hello'
  // promise.then((res)=>{
  
  //   element.innerHTML = 'Hello'+res
  //   console.log(promise)
  // })
  // debugger
  // document.body.appendChild(element);
  // console.log('这是一个数组' + arr + '123');
  // console.log('使用了热替换11111111');
  // console.log('这是对文件的热替换改进，已及对代码进行分离');
  // printMe()

//   return element;
// }
// component()
Vue.component('APP',App)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})