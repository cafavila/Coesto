var inicio = function ()
{
    console.log('inicio');
    $('div.jq').mouseenter(function ()
    {
        console.log('mouseenter');
        $('div.jq').fadeTo('fast', 1);
    });
    $('div.jq').mouseleave(function ()
    {
        $('div.jq').fadeTo('fast', 0.5);
    });
    $('div.jq').click(function ()
    {
        console.log('Hizo click');
        $('div.jq').fadeTo('slow', 0.1);
    });
}
$(document).ready(inicio);