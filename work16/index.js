function $(id) {
    return document.getElementById(id);
}

$('smallBox').onmouseover = function () {
    $('mask').style.display = "block";
    $('bigBox').style.display = "block";
};

$('smallBOX').onmouseout = function ()
