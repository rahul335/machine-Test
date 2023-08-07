let cl = console.log;

const bundlesSection = [...document.querySelectorAll('.bundles-section')];



const onhandler = (eve) =>{
    cl(eve.target)
    bundlesSection.forEach((eve) => {
        eve.classList.remove('active')
    })
    eve.target.classList.add('active');
}





bundlesSection.forEach((ele)=>{
    ele.addEventListener('click', onhandler)
})




