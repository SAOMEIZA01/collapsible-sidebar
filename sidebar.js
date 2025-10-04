const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');
const aside = document.querySelector('aside');

toggleBtn.addEventListener('click', () => {
    if(window.innerWidth <= 768) {
      sidebar.classList.toggle('active')
      aside.classList.toggle('active')
    } else {
      sidebar.classList.toggle('collapsed')
    }
});

document.addEventListener('click', (e)=>{
  if(window.innerWidth <= 768){
    if(sidebar.classList.contains('active') && !sidebar.contains(e.target) && !toggleBtn.contains(e.target)){
      sidebar.classList.remove('active');
      aside.classList.toggle('active');
    };
  };
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    sidebar.classList.remove('active');
    aside.classList.remove('active');
  }
});