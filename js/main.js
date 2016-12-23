$(function()
{
    $("[data-correspond-with='navbar']").hide();
    $("#basic").show();
    $(document.body).css('visibility','visible');

    $("#navbar-top ul>li").click(activate_navbar_item);
    $("#days").text(get_days());
});