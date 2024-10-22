const year = new Date().getFullYear().toString();
const month = (new Date().getMonth() + 1).toString();
const date = new Date().getDate().toString();
const today = year + '年' + month + '月' + date + '日'; 
console.log(today);