const container= document.getElementById("container");
const text= document.getElementById("text");

const totalTime=19000;
const breatheTime=4000;
const holdTime=7000;
function breatheAnimation(){
  text.innerHTML="Breathe In!";
  container.className="container grow";

  setTimeout(()=>{
      text.innerHTML="Hold";

      setTimeout(()=>{
        text.innerHTML="Breathe Out!";
        container.className="container shrink"
      },holdTime)

  },breatheTime)
}

setInterval(breatheAnimation,totalTime);
breatheAnimation();
