var hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
});

$('.show-more').on('click', function() {
    var linkID = $(this).attr('href');
    $('html, body').animate({ 
      scrollTop: $(linkID).offset().top 
    }, 'slow');
});

$('.click-about').on('click', function() {
    var linkID = $(this).attr('href');
    $('html, body').animate({ 
      scrollTop: $(linkID).offset().top 
    }, 'slow');
});

$('.click-gallery').on('click', function() {
    var linkID = $(this).attr('href');
    $('html, body').animate({ 
      scrollTop: $(linkID).offset().top 
    }, 'slow');
});

$('.click-contact').on('click', function() {
    var linkID = $(this).attr('href');
    $('html, body').animate({ 
      scrollTop: $(linkID).offset().top 
    }, 'slow');
});

$('.logo-footer').on('click', function() {
    var linkID = $(this).attr('href');
    $('html, body').animate({ 
      scrollTop: $(linkID).offset().top 
    }, 'slow');
});