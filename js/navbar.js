function activate_navbar_item(e)
{
    if(e.target)
    {
        $("#navbar-top ul>li").removeClass('active');
        $(e.target).parent().addClass('active');
    }
}