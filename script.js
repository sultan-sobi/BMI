


const buttonE=document.querySelector(".btn");

buttonE.addEventListener("click",()=>{
       const height=document.getElementById("height").value/100;
       const weight=document.getElementById("weight").value;
       const resultE=document.getElementById("result");
      const bmi= resultE.value=(weight/(height*height)).toFixed(2);
       const conditionE= document.querySelector("span");

       if(bmi<=18){
        conditionE.innerText="Under weight! You hav to eat balanced diet";
        conditionE.style.color="purple";
        conditionE.style.fontSize="18px";
        conditionE.style.fontWeight="600px";
       } else if(bmi>=18 && bmi<=24){
        conditionE.innerText="You are in good condition";
        conditionE.style.color="green";
        conditionE.style.fontSize="18px";
        conditionE.style.fontWeight="600px";
       }else if(bmi>=24 && bmi<=30){
        conditionE.innerText="Obesity";
        conditionE.style.color="gold";
        conditionE.style.fontSize="18px";
        conditionE.style.fontWeight="600px";
       } else if(bmi>30){
        conditionE.innerText="Over weight";
        conditionE.style.color="red";
        conditionE.style.fontSize="18px";
        conditionE.style.fontWeight="600px";
       }




})