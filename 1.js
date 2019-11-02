document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelectorAll('.moveSlides ul li');
    var slides = document.querySelectorAll('.slides ul li');
    var timeAutoSlides = setInterval(function () { autoSlides(); }, 4000);



    window.addEventListener('scroll', function () {
        this.alert("scroll run");
    });
    // bat su kien click cho tung button
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            var position = 0;
            var btnActived = this;
            //delete auto Slides
            clearInterval(timeAutoSlides);
            //Calculator the position of the active button
            for (position = 0; btnActived = btnActived.previousElementSibling; position++) { }
            //ending the loop: position = Activation button location
            //B1: Hiddening all active element = remove all active class
            for (var j = 0; j < slides.length; j++) {
                slides[j].classList.remove('actived');
                btn[j].classList.remove('active');
            }
            // B2: adding class active when you click on button, and show corresponding content
            slides[position].classList.add('actived');
            this.classList.add('active');
        });
    }// end event click button moveSlides
    // function auto move slides
    function autoSlides() {
        // B1: What do slide is show?
        var positionSlide = 0;
        var slideNow = document.querySelector('.slides ul li.actived');

        // lan theo ve truoc no de culculate the index of slide
        for (positionSlide = 0; slideNow = slideNow.previousElementSibling; positionSlide++) { }
        if (positionSlide < slides.length - 1) {
            console.log('position ' + positionSlide);
            for (var j = 0; j < slides.length; j++) {
                slides[j].classList.remove('actived');
                btn[j].classList.remove('active');
            }
            // add class active for next index of slide and button moveSlides
            slides[positionSlide].nextElementSibling.classList.add('actived');
            btn[positionSlide].nextElementSibling.classList.add('active');
        }
        else {
            for (var k = 0; k < slides.length; k++) {
                slides[k].classList.remove('actived');
                btn[k].classList.remove('active');
            }
            //
            slides[0].classList.add('actived');
            btn[0].classList.add('active');
        }
    }
}, false);