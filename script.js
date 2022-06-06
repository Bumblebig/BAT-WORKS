document.querySelector('#drop').style.display ='none';

document.querySelector('.menu').addEventListener('click', function() {
    var menu = document.querySelector('.dropdown');
    menu.style.display = 'block';
    document.querySelector('.cross').style.display = 'block' ;
});

document.querySelector('.cross').addEventListener('click', function(){
    var cross = document.querySelector('.dropdown');
    cross.style.display = 'none';
    document.querySelector('.cross').style.display = 'none' ;
})

