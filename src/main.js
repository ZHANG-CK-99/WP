import "./style/index.css";
import "./style/index.less";


import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

const gif = document.createElement("img");
const png = document.createElement("img");


gif.src = gifSrc;
png.src = pngSrc;

document.body.appendChild(gif);
document.body.appendChild(png);

const fn = () => {
    console.log('作业真的太难了！');
}

console.log(fn);

import app  from './app.vue';

// const myVue = new Vue({
    
// })
// //其他js文件可以引用main.js的myVue实例从而调用myVue的router、store等等
// export  myVue

