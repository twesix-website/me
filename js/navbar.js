function activate_navbar_item(e)
{
    if(e.target)
    {
        $("#navbar-top ul>li").removeClass('active');
        $(e.target).parent().addClass('active');
        var id=$(e.target,"a")[0].href.split('#')[1];
        $("[data-correspond-with='navbar']").hide();
        $("#"+id).show(300);
    }
}