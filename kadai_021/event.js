const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  const text = document.getElementById('text');
  setTimeout(()=> {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});

try {
  notFunction()
} catch(error) {
  console.log('--- output error ---')
  console.log(error.name)
  console.log(error.message)
}
console.log('aaa')