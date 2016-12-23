$(function()
{
    $("[data-correspond-with='navbar']").hide();
    if(location.hash)
    {
        $("a[href='"+location.hash+"']").parent().addClass('active');
        $(location.hash).show(300);
    }
    else
    {
        activate_navbar_item({target:$("#navbar-top ul>li>a:first")[0]});
    }
    $(document.body).css('visibility','visible');

    $("#navbar-top ul>li").click(activate_navbar_item);
    $("#days").text(get_days());
});

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

function get_days()
{
    var date=new Date();
    date.setFullYear(1996);
    date.setMonth(9);
    date.setDate(10);
    date.setHours(5);
    date.setMinutes(0);
    date.setSeconds(0);
    return parseInt((new Date().getTime()-date.getTime())/(1000*3600*24));
}