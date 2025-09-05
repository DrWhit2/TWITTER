<script>

document.addEventListener('click', (e)=>{
  const btn = e.target.closest('.tweet-actions button');
  if(!btn) return;
  const action = btn.dataset.action;
  if(!action) return;

  btn.classList.toggle('is-active');

  if(action === 'bookmark'){
    const ic = btn.querySelector('i');
    if(ic){
      ic.classList.toggle('far');
      ic.classList.toggle('fas');
    }
  }
});


</script>

