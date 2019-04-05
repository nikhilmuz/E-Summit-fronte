import $ from 'jquery';
import './progressbar.css';
$(document).ready(function () {
    setInterval(function () {
        var width = $(document).width() - $('#mydiv').width();

        function animateMydiv() {
            $('#mydiv').animate({ 'left': width + 'px' }, 700).animate({ 'left': '0px' }, 700);

        }
        animateMydiv();
    }, 1400)
});