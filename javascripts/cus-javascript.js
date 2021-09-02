var $topHeaderBtn = document.querySelector('.top-header');
var $closebtn = document.querySelector('.close-btn');


//close the elements
$closebtn.addEventListener('click', function closeAction(){
    $topHeaderBtn.classList.add('display-none');
});