var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("fotoSkit");
    for (i = 0; i < x.length; i++) {
       //x[i].style.display = "none";
       $(x[i]).fadeOut(5000);  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].fadeIn(5000);
    //x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000);
}

$(function() {
  var $pageContent = $('#content');
 
  var loadContent = function(url) {
    $pageContent.fadeOut(function() {
      $pageContent.load(url, function() {
        $pageContent.fadeIn();
      });
    });
  };
 
  loadContent('hem.html');
 
  $('.menulink').on('click', function(event) {
    event.preventDefault();
    loadContent($(this).attr('href'));
  });
});