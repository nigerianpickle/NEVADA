const circleProgress=document.querySelector('.circle-progress');
const numberOfBreaths=document.querySelector('.breath-input');
const start=document.querySelector('.start');
const instructions=document.querySelector('.instructions');
const breathsText=document.querySelector('.breaths-remain');

let breathsLeft=3;


//Watching for user selected breaths
numberOfBreaths.addEventListener('change', () => {
    breathsLeft=numberOfBreaths.value;
    breathsText.innerText=breathsLeft;
})

//grow and shrink circle
const growCircle=()=>{
    circleProgress.classList.add('circle-grow');
    setTimeout(()=>{
        circleProgress.classList.remove("circle-grow");
    },8000);
};

//Breathing insturctions
const breathTextUpdate=()=>{
    breathsLeft--;
    breathsText.innerText=breathsLeft;
    instructions.innerText="Breath in...";
    setTimeout(()=>{
        instructions.innerText="Hold Breath";
        setTimeout(()=>{
            instructions.innerText="Exhale Breath slowly"
        },4000);
    },4000);
};

//Breathing App Function
const breathingApp=()=>{
    const breathingAnimation=setInterval(()=>{
        if (breathsLeft==0) {
            clearInterval(breathingAnimation);
            instructions.innerText="Breathing session completed. Click Begin to start another session";
            start.classList.remove('start-inactive');
            breathsLeft=numberOfBreaths.value;
            breathsText.inneText=breathsLeft;

            return;
        }
        growCircle();
        breathTextUpdate();
    },12000);
}

//Start Breathing
start.addEventListener('click',()=>{
    start.classList.add("start-inactive");
    instructions.inneText="Ger relaxed, and ready to begin breathing";
    setTimeout(()=>{
        instructions.innerText="Breathing is about to begin...";
        setTimeout(()=>{
            breathingApp();
            growCircle();
            breathTextUpdate();
        },2000)
    },2000)


})
