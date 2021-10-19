var i = 0;
        var images = []
        var time = 3000;
        images[0] = 'images/slide3.jfif'
        images[1] = 'images/slide2.jfif'
        images[2] = 'images/slide1.jfif'
        images[3] = 'images/slide5.jpg'
        images[4] = 'images/slide4.jfif'
        images[5] = 'images/slide6.jpg'
        function changeImg() {
            document.slide.src = images[i];
            if (i < images.length - 1) {
                i++;
            }
            else {
                i = 0;
            }
            setTimeout("changeImg()", time)
        }
        window.onload = changeImg;

        function  buttonFirst(){
            window.location="components/student1.html"
        }