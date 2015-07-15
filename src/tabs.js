(function() {
  $('.tab-nav a').click(function (e) {
    e.preventDefault();
    var target = $(this),
        tabnav = target.parent(),
        tabcon = target.attr('href');
    tabnav.addClass('active');
    tabnav.siblings().removeClass('active');
    $('.tab-content').not(tabcon).hide();
    // TODO incorporate fx_methods for $.fadeIn(), et al.
    $(tabcon).show();
  });
  $('.tab-nav a').first().click();
}());
