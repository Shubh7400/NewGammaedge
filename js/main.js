// toggle
$(".navbar-toggler").on("click", function () {
    var w = $('#sidebar').width();
    var pos = $('#sidebar').offset().left;

    if (pos === 0) {
        $("#sidebar").animate({ "left": -w }, "slow");
    }
    else {
        $("#sidebar").animate({ "left": "0" }, "slow");
    }

});
$('#sidebar').on('hide.bs.collapse', function () {
    $('.navbar-toggler').removeClass('open');
})
$('#sidebar').on('show.bs.collapse', function () {
    $('.navbar-toggler').addClass('open');
});


$('.filters ul li').click(function(){
    $('.filters ul li').removeClass('active');
    $(this).addClass('active');
    
    var data = $(this).attr('data-filter');
    $grid.isotope({
      filter: data
    })
  });
  
  var $grid = $(".grid").isotope({
    // itemSelector: ".all",
    percentPosition: true,
    masonry: {
    //   columnWidth: ".all"
    }
  })