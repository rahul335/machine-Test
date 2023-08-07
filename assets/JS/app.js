let cl = console.log;

const pair = [...document.querySelectorAll('.pair')];
const radiobtn = [...document.querySelectorAll('.radio')];


const onhandler = (eve) => {
    pair.forEach((eves) => {
        eves.parentElement.classList.remove('active');
        eves.children[0].classList.remove('active');
    })
    if (eve.target.matches('.pair')) {
        eve.target.parentElement.classList.add('active');
        eve.target.children[0].classList.add('active');
    }else{
        eve.target.closest(".pair").parentElement.classList.add('active');
        eve.target.closest(".pair").children[0].classList.add('active');
    }


}




pair.forEach((ele) => {
    ele.addEventListener('click', onhandler)
})






