const wrapper=document.querySelector(".wrapper");
const card=document.querySelector(".card");
const sneaker=document.querySelector(".sneaker img")
const info=document.querySelector(".info h1");
const description=document.querySelector("info h4");
const sizes=document.querySelector(".sizes");
const purchase=document.querySelector(".purchase button");


wrapper.addEventListener('mousemove', (e)=>{
    console.log("HEY")
    let xAxis=(window.innerWidth/2 - e.pageX)/20;
    let yAxis=(window.innerHeight/2 - e.pageY)/20;

    card.style.transform=`RotateY(${xAxis}deg) RotateX(${yAxis}deg)`;
    sneaker.style.transform='translateZ(250px) rotateZ(-45deg) scaleZ(1.12)';
    info.style.transform="translateZ(200px)";
    description.style.transform="translateZ(150px)";
    sizes.style.transform="translateZ(100px)";
    purchase.style.transform="translate(80px)";

})
wrapper.addEventListener('mouseleave',(e)=>{
    card.style.transform=`RotateY(0deg) RotateX(0deg)`;
    card.style.transition='all 0.5s ease';
    sneaker.style.transform='translateZ(0) rotateZ(0) scale(1)';
    info.style.transform='translateZ(0)';
    description.style.transform="translateZ(0)";
    sizes.style.transform="translateZ(0)";
    purchase.style.transform="translate(0)";
})
wrapper.addEventListener('mouseenter',(e)=>{
    card.style.transition='none'
})



    
