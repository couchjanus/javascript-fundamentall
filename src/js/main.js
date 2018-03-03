(function(){
    
    var hamburgerToggle = document.querySelector('#menu-toggle');
    
    hamburgerToggle.addEventListener('click', function(e){
        e.preventDefault();
        
        document.querySelector('.flexmenu').classList.toggle('active');
    });
    
    // var div = document.createElement('div');
    // var catrItem = document.querySelector('.cart');
    // var layout = document.querySelector('.grid-layout');
    
    // for (var i=0; i<33; i++){
    //     var item = div.cloneNode(false);
    //     item.setAttribute('class', 'grid-item');
    //     item.innerHTML = 'Item'+i; 
    //     layout.append(item);
    // }


})();