function lefft()
{
    document.getElementsByClassName('dog-box')[0].style.width='5%';
    document.getElementById('dog').style.display='none';
    document.getElementById('cat').style.display='block';
    document.getElementsByClassName('cat-box')[0].style.width='95%';
}

function midddle()
{
    document.getElementsByClassName('dog-box')[0].style.width='50%';
    document.getElementById('dog').style.display='block';
    document.getElementById('cat').style.display='block';
    document.getElementsByClassName('cat-box')[0].style.width='50%';
}

function rigght()
{
    document.getElementsByClassName('dog-box')[0].style.width='95%';
    document.getElementById('cat').style.display='none';
    document.getElementById('dog').style.display='block';
    document.getElementsByClassName('cat-box')[0].style.width='5%';
}