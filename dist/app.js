!function(e){function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){!function(e){"use strict";e(window).load(function(){e("#page-loader").delay(300).fadeOut(400,function(){}),e("#loader-name").addClass("loader-left"),e("#loader-job").addClass("loader-right"),e("#loader-animation").addClass("loader-hide")}),e(document).ready(function(){function t(){e("#main-menu").addClass("main-menu-pgactive"),e("#section-home").addClass("section-vcardbody-pgactive"),e(".profileActive").removeClass("profileActive"),e("#profile2").addClass("profileActive"),a=1}function n(){e(".section-page-active").removeClass("section-page-active"),e("#main-menu").removeClass("main-menu-pgactive"),e("#section-home").removeClass("section-vcardbody-pgactive"),e(".profileActive").removeClass("profileActive"),e("#profile1").addClass("profileActive"),a=0}e("#loading-wraper").fadeIn(300),e(".section-vcardbody").perfectScrollbar({wheelSpeed:.9});var a=0,o="";e(".link-page").on("click",function(n){n.preventDefault(),e(".menuActive").removeClass("menuActive"),e(this).addClass("menuActive"),o=e(this).attr("href"),e(".section-page-active").removeClass("section-page-active"),e(o).addClass("section-page-active"),t()}),e(".link-home").on("click",function(t){t.preventDefault(),0==a||1==a&&(e(".menuActive").removeClass("menuActive"),e(this).addClass("menuActive"),n())})})}(jQuery)},function(e,t){}]);