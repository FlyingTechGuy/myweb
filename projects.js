setTimeout(function() {
    document.querySelector("body").classList.add("show");
}, 500);

let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.worksCard');

for(let i = 0; i<list.length; i++){
  list[i].addEventListener('click', function(){
    for(let j = 0; j<list.length; j++){
      list[j].classList.remove('actives');
    }
    this.classList.add('actives');
    
    let dataFilter = this.getAttribute('data-filter');
    
    for(let k = 0; k<itemBox.length; k++){
      itemBox[k].classList.add('hide');
      if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
        itemBox[k].classList.remove('hide');
      }
    }
    
  })
}