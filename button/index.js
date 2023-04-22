var blackphoto = document.querySelector('.emojiclosed');
var colourphoto = document.querySelector('.emojiopen');
var active = document.querySelector('active');
blackphoto.addEventListener ('click', () => {
    if (colourphoto.classList.contains('emojiopen')){
        colourphoto.classList.add('active');
        blackphoto.classList.remove('active');
        
    }
})

colourphoto.addEventListener ('click', () => {
    if (blackphoto.classList.contains('emojiclosed')){
        blackphoto.classList.add('active');
        colourphoto.classList.remove('active');
        
    }
})

