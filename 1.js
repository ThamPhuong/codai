document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelectorAll('.moveSlides ul li');
    var slides = document.querySelectorAll('.slides ul li');
    var list_categories = document.querySelector('.mynav .nav-item ul.dropdown-menu');
    var nav_categories = document.querySelector('.mynav .nav-item .nav-categories');

    var timeAutoSlides = setInterval(function () { autoSlides(); }, 6000);
    nav_categories.addEventListener('mouseover', function () {
        list_categories.style.display = "block";
    });
    list_categories.addEventListener('mouseover', function () {
        this.style.display = "block";
    });
    nav_categories.addEventListener('mouseout', function () {
        list_categories.style.display = "none";
    });
    list_categories.addEventListener('mouseout', function () {
        this.style.display = "none";
    });
    // bat su kien click cho tung button
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            var position = 0;
            var btnActived = this;
            var slideNow = document.querySelector('.slides ul li.actived');
            // var btnslideNow = document.querySelector('.moveSlides ul li.active');

            //delete auto Slides
            clearInterval(timeAutoSlides);
            //Calculator the position of the active button
            for (position = 0; btnActived = btnActived.previousElementSibling; position++) { }
            //ending the loop: position = Activation button location
            //B1: Hiddening all active element = remove all active class
            for (var j = 0; j < slides.length; j++) {
                // slides[j].classList.remove('actived');
                btn[j].classList.remove('active');
            }
            btn[position].classList.add('active');

            slideNow.classList.add('bienMat');

            // B2: adding class active when you click on button, and show corresponding content
            slides[position].classList.add('diVao');
            // Bien mat
            slideNow.addEventListener('webkitAnimationEnd',function(){
                this.classList.remove('bienMat');
                this.classList.remove('actived');
                // btnslideNow.classList.remove('active');
            })
            slides[position].addEventListener('webkitAnimationEnd',function(){
                slides[position].classList.add('actived');
                this.classList.remove('diVao');
            })
        });
    }// end event click button moveSlides
    // function auto move slides
    function autoSlides() {
        // B1: What do slide is show?
        var positionSlide = 0;
        var slideNow = document.querySelector('.slides ul li.actived');

        // lan theo ve truoc no de culculate the index of slide
        for (positionSlide = 0; slideNow = slideNow.previousElementSibling; positionSlide++) { }
        var phatuHientai = slides[positionSlide];
        if (positionSlide < slides.length - 1) {
            for (var j = 0; j < slides.length; j++) {
                // slides[j].classList.remove('actived');
                btn[j].classList.remove('active');
            }
            // add class active for next index of slide and button moveSlides
            // slides[positionSlide].nextElementSibling.classList.add('actived');
            btn[positionSlide].nextElementSibling.classList.add('active');
            positionSlide = positionSlide + 1;
        }
        else {
            positionSlide = 0;
            for (var k = 0; k < slides.length; k++) {
                // slides[k].classList.remove('actived');
                btn[k].classList.remove('active');
            }
            slides[0].classList.add('actived');
            btn[0].classList.add('active');
        }
        var phantuNext = slides[positionSlide];

        var xulyNowKetthucCD = function () {
            this.classList.remove('bienMat');
            this.classList.remove('actived');
        }
        var xulyNextKetthucCD = function () {
            this.classList.remove("diVao");
            this.classList.add("actived");
        }
        phatuHientai.addEventListener("webkitAnimationEnd", xulyNowKetthucCD);
        phantuNext.addEventListener("webkitAnimationEnd", xulyNextKetthucCD);

        phatuHientai.classList.add('bienMat');
        phantuNext.classList.add('diVao');
    }

}, false);