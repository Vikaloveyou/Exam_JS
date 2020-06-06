'use strict';


$(document).ready(function () {

    function showDatails() {
        $('.text__info').toggleClass('more')
    }

    $('.more-dateils-btn').click(() => {
        showDatails()
    })



})
