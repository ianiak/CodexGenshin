
function changeText(option) {
    
    document.querySelector('.hutaoselect').style.display = 'none';
    document.querySelector('.furinaselect').style.display = 'none';
    document.querySelector('.nahidaselect').style.display = 'none';

    
    if (option === 1) {
        document.querySelector('.hutaoselect').style.display = 'block';
        updateActiveImage('.hutao');
    } else if (option === 2) {
        document.querySelector('.furinaselect').style.display = 'block';
        updateActiveImage('.furina');
    } else if (option === 3) {
        document.querySelector('.nahidaselect').style.display = 'block';
        updateActiveImage('.nahida');
    }
}


function updateActiveImage(activeClass) {
    
    document.querySelectorAll('.wrapper > div').forEach(div => {
        div.classList.remove('active');
        div.querySelector('.text-overlay').style.opacity = '0'; 
        
        
        const video = div.querySelector('video');
        if (video) {
            video.pause(); 
            video.currentTime = 0; 
        }
    });

   
    const activeDiv = document.querySelector(activeClass);
    activeDiv.classList.add('active');
    activeDiv.querySelector('.text-overlay').style.opacity = '1'; 
    
    // Reproduzir o vídeo ativo
    const activeVideo = activeDiv.querySelector('video');
    if (activeVideo) {
        activeVideo.play(); 
    }
}


window.onload = function() {
    changeText(2); 
};
