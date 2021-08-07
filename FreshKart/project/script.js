// alert("Shop with FreshKART and get 30% off");
function togglehide()
{
    let btn=  document.getElementsByClassName('dropdown');
    // let content= document.getElementsByClassName('dropdown-content')
    if(btn.style.visibility != 'hidden')
    {
        btn.style.visibility = 'hidden';
    }
    else
    {
        btn.style.visibility = 'visible';
    }
}