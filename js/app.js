/*global document, $ */
(function () {
    'use strict';

    $(document).ready(function () {
        /* ----- Begin writing your JavaScript here  ------*/
        $('.readmore').click(function (e) {
            e.preventDefault();
            $('#show-this-on-click').slideDown();
            $('.readless').show();
            $('.readmore').hide();

        });
        $('.readless').click(function (e) {
            e.preventDefault();
            $('#show-this-on-click').slideUp();
            $('.readmore').show();
            $('.readless').hide();

        });

        $('.learnmore').click(function (e) {
            e.preventDefault();
            $('#learnmoretext').slideDown();
            $('.learnmore').hide();
      

        });
        /* ----- Finish writing your JavaScript here  -----*/
    });
}());

