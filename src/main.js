import './assets/css/index.css'
import  {printMe}  from './assets/js/index'
// import Vue from 'vue'
let arr = ['测试的1', '测试的5', '测试的4'];
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = 'Hello'
  // debugger
  document.body.appendChild(element);
  console.log('这是一个数组' + arr + '123')
  console.log('使用了热替换11111111')
  // if (module.hot) {
  //   debugger
  //   module.hot.accept('./assets/js/index', function () {
  //     console.log('Accepting the updated printMe module!');
  //      debugger
  //      printMe();
  //   })
  // }
  return element;
}
component()
