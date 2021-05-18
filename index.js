class Timer{
    constructor(durationInput,startButton,pauseButton){
        this.DurationInput = durationInput;
        this.StartButton = startButton;
        this.PauseButton = pauseButton;

        this.StartButton.addEventListener('click',this.Start); // All Methods / properties especially when nested are not available in this scope
        this.PauseButton.addEventListener('click',this.Pause);
    };
    ImportantMethodToCall(){
        console.log('An Important Thing was done');
    }

    Start = () => {
        this.Tick();
        this.interval = setInterval(this.Tick, 1000); //1000ms = 1s
    };

    Pause = () => {
        clearInterval(this.interval);
    };
    
    Tick = () => {
        console.log('tick');
    };

   

   
}


const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput,startButton,pauseButton);
// timer.Start();


// NOTE WHenever we call setIntervl() we get back a variable called id(an integer) which is the number of runs/ running interval.





