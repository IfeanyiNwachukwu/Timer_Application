
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray',perimeter);

let duration;
const checkTimerActions = {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset',
        (perimeter * timeRemaining)/ duration - perimeter);
        
    },
    onComplete() {
        console.log('Timer is Completed');
    }
};
// Timer class is called and activated here
const timer = new Timer(durationInput,startButton,pauseButton,checkTimerActions);
// These callbacks get invoked at very specific times during our Timer life cycle
// We have to look for a way to tell the outside word of what is happening in the timer class in javascript
// timer.Start();


// NOTE WHenever we call setIntervl() we get back a variable called id(an integer) which is the number of runs/ running interval.

       //AT START
// dasharray = perimeter;
// dashoffset = 0

       //AT END
// dasharray = perimeter;
// dashoffset = -1 * perimeter

//offsetAtStart = p * 30/30 - p /= p - p
// offsetAtEnd = p * 0/30 - p  /= -p




