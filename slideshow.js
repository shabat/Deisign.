var nextSLide = document.querySelector('#nextSlide');
var prevSLide = document.querySelector('#prevSlide');

nextSLide.addEventListener('click', () => {
    var firstSLide = document.querySelector('.one');
    var secondSLide = document.querySelector('.two');
    var thirdSLide = document.querySelector('.three');

        
        firstSLide.classList.add('two');
        secondSLide.classList.add('three');
        thirdSLide.classList.add('one');
        secondSLide.classList.remove('two');
        thirdSLide.classList.remove('three');
        firstSLide.classList.remove('one');
        
});

prevSLide.addEventListener('click', () => {
    var firstSLide = document.querySelector('.one');
    var secondSLide = document.querySelector('.two');
    var thirdSLide = document.querySelector('.three');

        
        firstSLide.classList.add('three');
        thirdSLide.classList.add('two'); 
        secondSLide.classList.add('one')
        thirdSLide.classList.remove('three');
        firstSLide.classList.remove('one');
        secondSLide.classList.remove('two');
            
});