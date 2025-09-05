<script>
/* 액션 토글: 리트윗/하트/북마크 */
document.addEventListener('click', (e)=>{
  const btn = e.target.closest('.tweet-actions button');
  if(!btn) return;
  const action = btn.dataset.action;
  if(!action) return;

  btn.classList.toggle('is-active');

  // 아이콘(regular <-> solid) 토글은 북마크에만 적용
  if(action === 'bookmark'){
    const ic = btn.querySelector('i');
    if(ic){
      ic.classList.toggle('far');
      ic.classList.toggle('fas');
    }
  }
});

/* 메뉴: 현재 페이지에 맞춰 활성 상태 스타일 유지(파랑은 북마크 페이지에서만) */
/* 별도 코드 불필요 — 각 HTML에서 active/filled 설정 */
</script>

