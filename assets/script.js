$(document).ready(function() {
    $("#navClick").click(function () {
        $(".top-bar").removeClass("expanded");
    });
    
    $(".jCarousel").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 5
    });
});
