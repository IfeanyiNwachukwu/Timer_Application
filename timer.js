class Timer{
    constructor(durationInput,startButton,pauseButton,callbacks){
        this.DurationInput = durationInput;
        this.StartButton = startButton;
        this.PauseButton = pauseButton;
        if(callbacks){
            this.OnStart = callbacks.onStart;
            this.OnTick = callbacks.onTick;
            this.OnComplete = callbacks.onComplete;
        }

        this.StartButton.addEventListener('click',this.Start); // All Methods / properties especially when nested are not available in this scope
        this.PauseButton.addEventListener('click',this.Pause);
    };
    
    Start = () => {
        if(this.OnStart){
            this.OnStart(this.timeRemaining); // time remaining is the first time that is set
        }
        this.Tick(); // Ensures a tick immediately after the start button is clicked
        this.interval = setInterval(this.Tick, 50); //1000ms = 1s

    };

    Pause = () => {
        clearInterval(this.interval);
    };
    
    Tick = () => {
        if(this.timeRemaining <= 0){
            this.Pause();
            if(this.OnComplete){
                this.OnComplete();
            }
        }
        else{
            this.timeRemaining = this.timeRemaining - 0.05;
            if(this.OnTick){
                this.OnTick(this.timeRemaining);
            }
        }
        
    };

//    GETTER AND SETTER
   get timeRemaining(){
       return parseFloat(this.DurationInput.value); 
   }
   set timeRemaining(time){
    this.DurationInput.value = time.toFixed(2);
   }

   
}
