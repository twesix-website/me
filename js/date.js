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