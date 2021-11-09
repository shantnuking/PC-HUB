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
        function  s2(){
            window.location="components/student2.html"
        }
        function  s3(){
            window.location="components/student3.html"
        }
        function  s4(){
            window.location="components/student4.html"
        }
        function  d1(){
            window.location="components/devloper1.html"
        }
        function  d2(){
            window.location="components/devloper2.html"
        }
        function  d3(){
            window.location="components/devloper3.html"
        }
        function  d4(){
            window.location="components/devloper4.html"
        }
        function  h1(){
            window.location="components/highend1.html"
        }
        function  h2(){
            window.location="components/highend2.html"
        }
        function  l1(){
            window.location="components/lowend1.html"
        }
        function  l2(){
            window.location="components/lowend2.html"
        }
        function  da1(){
            window.location="components/dataanalyst1.html"
        }
        function  da2(){
            window.location="components/dataanalyst2.html"
        }
        function  da3(){
            window.location="components/dataanalyst3.html"
        }