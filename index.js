let count = 0;
let displayEl = document.querySelector("#display");

function sub() {
    if ( count > 0)
    {
    count --;
    displayEl.textContent = count;
    }
}
function add()
{
    count ++ ;
    displayEl.textContent = count;
}
function reset()
{
    count = 0;
    displayEl.textContent = count;
}