const secondHand=document.querySelector('.second-hand');



function setDate() {

const now=new Date();
const seconds=now.getSeconds();
const secDegrees=(((seconds/60)*360)+90);
secondHand.style.transform=`rotate(${secDegrees}deg)`;


}
setInterval(setDate,1000)