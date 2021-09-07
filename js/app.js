document.querySelector('.fpass-btn').addEventListener('click', function(){
    document.querySelector('.fpass-popup-box').style = 'transform: scale(1);';
})
document.querySelector('.close-btn').addEventListener('click', function(){
    document.querySelector('.fpass-popup-box').style = 'transform: scale(0);';
})