(function () {
    var resizePage = function () {

        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        
        var head = document.getElementsByTagName('head')[0];
        
        var link = document.createElement('link');
        link.id = 'widthCSS';
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '';
        link.media = 'all';
        head.appendChild(link);
        
        var link2 = document.createElement('link');
        link2.id = 'heightCSS';
        link2.rel = 'stylesheet';
        link2.type = 'text/css';
        link2.href = '';
        link2.media = 'all';
        head.appendChild(link2);

        if (width > 900) {
            link.href = 'style/style-ie900.css';
        }

        if (width < 900 && width > 700) {
            link.href = 'style/style-ie900-600.css';
        }

        if (width < 700 && width > 300) {
            link.href = 'style/style-ie600-300.css';
        }
        
        if (height > 1000){
            link2.href = 'style/style-ieh1000.css'
        }
        
        if (height < 999 && height > 100){
            link2.href = 'style/style-ieh950-100.css'
        }
    }
    resizePage();

    if (document.documentElement.attachEvent) {
        document.documentElement.attachEvent("onresize", resizePage);
    }

})()