const showContainers = document.querySelectorAll('.show__replies');

showContainers.forEach(btn => btn.addEventListener('click', (e) =>{
   let parentContainer = e.target.closest('.comment__container');
   let _id = parentContainer.id;
   if (_id) {
      let childrenContainer = parentContainer.querySelectorAll(`[dataset=${_id}]`);
      childrenContainer.forEach((child) => child.classList.toggle('opened'));
   }
}))

var show = document.getElementById('show__form');
var hide = document.getElementById('hide');
var form = document.getElementById('reply__comment__form');
var textarea = document.getElementById('reply__textarea');

show.addEventListener('click', function(e){
   form.style = ('display: block');
   textarea.style = ('animation: riseHeight 1s .1s normal forwards');
   hide.style = ('display: block');
   show.disabled = true;
   e.preventDefault();
})
hide.addEventListener('click', function() {
   form.style = ('display: none');
   hide.style = ('display: none');
   show.disabled = false;
})
