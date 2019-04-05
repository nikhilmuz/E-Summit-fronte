import $ from 'jquery';
function resizeform(){
    $('.caform').height($('.login').height()+30);
    var halfwidth=(-($('.jumbotron3').height()))/2;
    $('.caform').attr('style',$('.caform').attr('style')+"margin-top:"+halfwidth+"px");
}
$(document).resize(function() {
    resizeform();
});
$( document ).ready(function() {
    resizeform();
});