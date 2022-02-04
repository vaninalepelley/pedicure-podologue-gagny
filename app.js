

// ScrollMagic //

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    
    triggerElement: '.box1',
    reverse: false
})

    .setClassToggle('.box1', 'fade-in')
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    
    triggerElement: '.box2',
    reverse: false
})
    
    .setClassToggle('.box2', 'fade-in')
       
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    
    triggerElement: '.box3',
    reverse: false
})
        
    .setClassToggle('.box3', 'fade-in')
           
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    
    triggerElement: '.box_soin_1',
    reverse: false
})
    
    .setClassToggle('.box_soin_1', 'fade-in')
       
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    
    triggerElement: '.box_soin_2',
    reverse: false
})
        
    .setClassToggle('.box_soin_2', 'fade-in')
           
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    
    triggerElement: '.box_soin_3',
    reverse: false
})
        
    .setClassToggle('.box_soin_3', 'fade-in')
           
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    
    triggerElement: '.box_soin_4',
    reverse: false
})
            
    .setClassToggle('.box_soin_4', 'fade-in')
               
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    
    triggerElement: '.box_rdv_1',
    reverse: false
    })
                
    .setClassToggle('.box_rdv_1', 'fade-in')
                   
    .addTo(controller);
    
var scene = new ScrollMagic.Scene({
    
    triggerElement: '.box_rdv_2',
    reverse: false
    })
                
    .setClassToggle('.box_rdv_2', 'fade-in')
                   
    .addTo(controller);
    
var scene = new ScrollMagic.Scene({
    
    triggerElement: '.box_rdv_3',
    reverse: false
    })
                
    .setClassToggle('.box_rdv_3', 'fade-in')
                   
    .addTo(controller);

var scene = new ScrollMagic.Scene({
    
    triggerElement: '.box_rdv_4',
    reverse: false
    })
                
    .setClassToggle('.box_rdv_4', 'fade-in')
                   
    .addTo(controller);
    
// Ouvrir un Pop-Up //
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-mentions-legales');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
