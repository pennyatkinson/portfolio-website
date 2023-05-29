
function openNav(){
    document.getElementById("myNav").style.height = "100%";
}

function closeNav(){
    document.getElementById("myNav").style.height = "0%";
}

window.onload = function() {

    var pageTitle = document.title;
    var attentionMessage = 'Come back!';
    var blinkEvent = null;
  
    document.addEventListener('visibilitychange', function(e) {
      var isPageActive = !document.hidden;
  
      if(!isPageActive){
        blink();
      }else {
        document.title = pageTitle;
        clearInterval(blinkEvent);
      }
    });
  
    function blink(){
      blinkEvent = setInterval(function() {
        if(document.title === attentionMessage){
          document.title = pageTitle;
        }else {
          document.title = attentionMessage;
        }
      }, 100);
    }
  };

