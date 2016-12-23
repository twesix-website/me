$(function()
{
    $("[data-correspond-with='navbar']").hide();
    $("a[href='"+location.hash+"']").parent().addClass('active');
    $(location.hash).show(300);
    $(document.body).css('visibility','visible');

    $("#navbar-top ul>li").click(activate_navbar_item);
    $("#days").text(get_days());
});