import $ from 'jquery'
$(document).ready(function(){

if (!!$.cookie('token')) {
    alert('cookie')
   } else {
    alert('no cookie')
   }
});