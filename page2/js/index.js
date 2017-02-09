var $ = require("jquery");

function show() {
    $('#wrap').hide();
    $('#header').show();
    $('#main').show();
    $('#nav').show();
}
$(window).on('load', function () {
    console.log(1);
    $('#header').hide();
    $('#main').hide();
    $('#nav').hide();
    setTimeout(show, 2500);
})

var Carousel = require("./carousel.js");
require("../css/carousel.css");
new Carousel($(".carousel"));

var GoTop = require("./gotop.js");
require("../css/gotop.css")
new GoTop;

var LazyLoad = require("./lazyload.js");
new LazyLoad;

var WaterFall = require("./water-basic.js")
new WaterFall($("#training .water-basic"), $("#training .btn-readmore"));
