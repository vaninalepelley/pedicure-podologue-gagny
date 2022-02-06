

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
    
//*********************** */ Pop-up ****************************//

// Pop-up Mentions Légales //

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


// Pop-up Contactez-moi //

// Ouvrir un Pop-Up //
const modal2 = document.querySelector('#my-modal2');
const modalBtn2 = document.querySelector('#modal-contact-me');
const closeBtn2 = document.querySelector('.close2');

// Events
modalBtn2.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);
window.addEventListener('click', outsideClick2);

// Open
function openModal2() {
  modal2.style.display = 'block';
}

// Close
function closeModal2() {
  modal2.style.display = 'none';
}

// Close If Outside Click
function outsideClick2(e) {
  if (e.target == modal2) {
    modal2.style.display = 'none';
  }
}

window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("test-form");
    var button = document.getElementById("test-form-submit");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add('success');
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add('error');
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }


