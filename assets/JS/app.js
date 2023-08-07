let cl = console.log;

const bundlesSection = [...document.querySelectorAll('.bundles-section')];

const pair = [... document.querySelectorAll('.pair')];
// const radiobtn = [...document.querySelectorAll('.radio')];



const onhandler = (eve) =>{
    bundlesSection.forEach((eves) => {
        eves.classList.remove('active')
    })
    eve.target.classList.add('active');
}




bundlesSection.forEach((ele)=>{
    ele.addEventListener('click', onhandler)
})






