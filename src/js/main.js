(function(){
    
    var hamburgerToggle = document.querySelector('#menu-toggle');
    
    hamburgerToggle.addEventListener('click', function(e){
        e.preventDefault();
        
        document.querySelector('.flexmenu').classList.toggle('active');
    });
    
    var div = document.createElement('div');
    var catrItem = document.querySelector('.cart');
    var layout = document.querySelector('.grid-layout');
    
    for (var i=0; i<33; i++){
        var item = div.cloneNode(false);
        item.setAttribute('class', 'grid-item');
        item.innerHTML = 'Item'+i; 
        layout.append(item);
    }


    
    

    // var container = document.querySelector('.container');

    

    // function toggleSidebar() {
    //     isShowingSidebar() ? hideSidebar() : showSidebar();
    //   }
      
    // function showSidebar() {
    //     container.classList.add('show-sidebar');
    //   }
      
    // function hideSidebar() {
    //     container.classList.remove('show-sidebar');
    //   }
      
    // function isShowingSidebar() {
    //     return container.classList.contains('show-sidebar');
    //   }
      
    // document.querySelector('.menuButton').addEventListener('click', toggleSidebar, false);
      
    //   container.addEventListener('click', function(e) {
    //     if (isShowingSidebar() && main.contains(e.target)) {
    //       e.preventDefault();
    //       hideSidebar();
    //     }
    //   }, true);
})();