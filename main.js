const secondHand=document.querySelector('.second-hand');
const minHand=document.querySelector('.minute-hand');
const hourHand=document.querySelector('.hour-hand')


function setDate() {

const now=new Date();
const seconds=now.getSeconds();
const secDegrees=(((seconds/60)*360)+90);
secondHand.style.transform=`rotate(${secDegrees}deg)`;

const mins=now.getMinutes();
const minDegrees=(((mins/60)*360))+90;
minHand.style.transform=`rotate(${minDegrees}deg)`;

const hrs=now.getHours();
const hrDegrees=(((hrs/12))*360)+90;
hourHand.style.transform=`rotate(${hrDegrees}deg)`;

if(secDegrees===90)secondHand.style.transition='all 0s';
else secondHand.style.transition='all 0.05s';

if (minDegrees===90)minHand.style.transition='all 0s';
else minHand.style.transition='all 0.1s';

console.log('It is :'+ hrs+':'+mins+":"+seconds);
}
setInterval(setDate,1000)