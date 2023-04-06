 function dateform(){
    const dt = new Date()
    const y = dt.getFullYear()
    const m =add_zero(dt.getMonth() + 1)
    const d =add_zero(dt.getDate())
  
    const hh =add_zero(dt.getHours())
    const mm =add_zero(dt.getMinutes())
    const ss =add_zero(dt.getSeconds())
    return (`${y}年${m}月${d}日   ${hh}:${mm}:${ss}`);
}

 function add_zero(a){
   if(a<9){
    return '0'+a
   }
   else{
    return a
   }
}
module.exports={
    dateform
}
// 暴露出去
// 测试
// const newdate = dateform()
// console.log(newdate);
// 这个得注释掉，不然在其他js文件引用改模块，这个内容会一起输出，模块具有作用域，只有在module.exports 下才会暴露，不知道js有没有类似Python if main = 这样的设置

// const time = require('./封装时间.js')
// const newdate = time.dateform()
// console.log(newdate);
// 可以调用当前时间