


const screen = document.getElementById('screen');
//Starting
const startScreen = document.querySelector('.startScreen')
const startButton = document.querySelector('#startButton')

const board  = document.querySelector('.board');
const levels  = document.querySelectorAll('.levels');
const road  = document.getElementById('road');
const water  = document.getElementById('water');
const grass  = document.getElementById('grass');
const finishLine  = document.getElementById('finish-line');
const startLine  = document.getElementById('start-line');
const winLand  = document.getElementById('winLand');
const waterInLand = document.querySelectorAll('.waterLand');
const fleas = document.querySelectorAll('.fleas');



//Finish line specifications
waterInLand.forEach(waterOne => {
    waterOne.style.position = 'absolute';
    waterOne.style.width = window.innerWidth*0.175 + 'px';
    waterOne.style.height = '45px';
    waterOne.style.backgroundImage = 'url(images/water.webp)'

})
const waterOne = document.getElementById('waterOne')
const waterTwo = document.getElementById('waterTwo')
const waterThree = document.getElementById('waterThree')
const waterFour = document.getElementById('waterFour')
waterOne.style.left = window.innerWidth*0 + 'px';
waterTwo.style.left = window.innerWidth*0.225 +'px';
waterThree.style.left = window.innerWidth*0.45 +'px';
waterFour.style.left = window.innerWidth*0.675 +'px';



fleas.forEach(flea => {
    flea.style.position = 'absolute';
    flea.style.width = window.innerWidth/20 + 'px';
    flea.style.height = '45px';
    flea.style.backgroundImage = 'url(images/grass.jpeg)';
    flea.style.display = 'flex'
})
const flea4 = document.getElementById('flea4')
const flea3 = document.getElementById('flea3')
const flea2 = document.getElementById('flea2')
const flea1 = document.getElementById('flea1')
flea4.style.left = window.innerWidth*0.175 + 'px';
flea3.style.left = window.innerWidth*0.4 +'px';
flea2.style.left = window.innerWidth*0.625 +'px';
flea1.style.left = window.innerWidth*0.85 + 'px';


//dimensions
finishLine.style.height = '45px';
// grass.style.height = '45px';
water.style.height = '180px';
road.style.height = '180px';
startLine.style.height = '45px';
board.style.height = '495px';










//timer and score
const timer = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
let score = 0;


//frog
const frogDisplay = document.createElement('div');
frogDisplay.classList.add('frogdisplay');
const frogHeight = 40;
const frogWidth = window.innerWidth/27;
frogDisplay.style.height = frogHeight + 'px';
frogDisplay.style.width = frogWidth + 'px';
const frogStartPosition = [window.innerWidth*0.45,2.5]
let frogCurrentPosition = frogStartPosition;
frogDisplay.style.left = frogCurrentPosition[0] + 'px';
frogDisplay.style.bottom = frogCurrentPosition[1] + 'px';
board.appendChild(frogDisplay);

//draw frog function
function drawFrog()
{
    frogDisplay.style.left = frogCurrentPosition[0] + 'px';
    frogDisplay.style.bottom = frogCurrentPosition[1] + 'px';
}


//move frog
function moveFrog(e)
{
    
    switch (e.key) {
        case 'ArrowLeft':
            if(frogCurrentPosition[0] > frogWidth)
            {
                frogCurrentPosition[0] -= window.innerWidth/20;
                drawFrog();                
            }
            break;
        case 'ArrowRight':
            if(frogCurrentPosition[0] + frogWidth*1.9 < (window.innerWidth*0.9))
            {
                frogCurrentPosition[0] += window.innerWidth/20;
                drawFrog();                
            }
            break;
        case 'ArrowUp':
            if(frogCurrentPosition[1] < 420)
            {
                frogCurrentPosition[1] += 45;
                drawFrog();                
            }
            break;
        case 'ArrowDown':
            if(frogCurrentPosition[1] > 10)
            {
                
                frogCurrentPosition[1] -= 45;
                drawFrog();                
            }
            break;
    
        default:
            break;
    }
}

function moveFrogOnObject(){
    
    if(frogCurrentPosition[0] > 0 && frogDisplay.classList.contains('moveLeft'))
    {
        frogCurrentPosition[0] -= window.innerWidth/1000;
        drawFrog()
    }    

    else if(frogCurrentPosition[0] + frogWidth < window.innerWidth*0.9 && frogDisplay.classList.contains('moveRight'))
    {
        frogCurrentPosition[0] += window.innerWidth/1000;
        drawFrog()
    }
    
}


// setTimeout(() => {
document.addEventListener('keydown',moveFrog)
// }, 8000);/



//lanes
const roadLanes = document.querySelectorAll('.roadLanes div');
const lane1 = document.querySelectorAll('#laneOne div');
const lane2 = document.querySelectorAll('#laneTwo div');
const lane3 = document.querySelectorAll('#laneThree div');
const lane4 = document.querySelectorAll('#laneFour div');
const lanes = [lane1,lane2,lane3,lane4];

const waterLanes = document.querySelectorAll('.waterLanes div');
const wlane1 = document.querySelectorAll('#wlaneOne div');
const wlane2 = document.querySelectorAll('#wlaneTwo div');
const wlane3 = document.querySelectorAll('#wlaneThree div');
const wlane4 = document.querySelectorAll('#wlaneFour div');
const wlanes = [wlane1,wlane2,wlane3,wlane4];



//obstacles
let car1 = document.getElementById('car1');
let car2 = document.getElementById('car2');
let car3 = document.getElementById('car3');
let car4 = document.getElementById('car4');

let bus1 = document.getElementById('bus1');
let bus2 = document.getElementById('bus2');
let bus3 = document.getElementById('bus3');
let bus4 = document.getElementById('bus4');
let bus5 = document.getElementById('bus5');

let SUV1 = document.getElementById('SUV1');
let SUV2 = document.getElementById('SUV2');
let SUV3 = document.getElementById('SUV3');
let SUV4 = document.getElementById('SUV4');
let SUV5 = document.getElementById('SUV5');
let SUV6 = document.getElementById('SUV6');

let truck1 = document.getElementById('truck1');
let truck2 = document.getElementById('truck2');
let truck3 = document.getElementById('truck3');
let truck4 = document.getElementById('truck4');
let truck5 = document.getElementById('truck5');
let truck6 = document.getElementById('truck6');
let truck7 = document.getElementById('truck7');

let bigLog1 = document.getElementById('bigLog1');
let bigLog2 = document.getElementById('bigLog2');
let bigLog3 = document.getElementById('bigLog3');
let bigLog4 = document.getElementById('bigLog4');
let bigLog5 = document.getElementById('bigLog5');
let bigLog6 = document.getElementById('bigLog6');
let bigLog7 = document.getElementById('bigLog7');


let log1 = document.getElementById('log1');
let log2 = document.getElementById('log2');
let log3 = document.getElementById('log3');
let log4 = document.getElementById('log4');
let log5 = document.getElementById('log5');


let branch1 = document.getElementById('branch1');
let branch2 = document.getElementById('branch2');
let branch3 = document.getElementById('branch3');
let branch4 = document.getElementById('branch4');




let twig1 = document.getElementById('twig1');
let twig2 = document.getElementById('twig2');
let twig3 = document.getElementById('twig3');
let twig4 = document.getElementById('twig4');
let twig5 = document.getElementById('twig5');
let twig6 = document.getElementById('twig6');

const twigs = Array.from(document.querySelectorAll('#wlaneOne div'))
const branchs = Array.from(document.querySelectorAll('#wlaneTwo div'))
const logs = Array.from(document.querySelectorAll('#wlaneThree div'))
const bigLogs = Array.from(document.querySelectorAll('#wlaneFour div'))



const evenLaneStartingPosition = -window.innerWidth/6;
const evenLaneStartingPosition1 = -window.innerWidth*0.133167;
const oddLaneStartingPosition = window.innerWidth*0.92;


const cars = document.querySelectorAll('.cars');
const truck = document.querySelectorAll('.truck');
const SUV = document.querySelectorAll('.SUV');
const bus = document.querySelectorAll('.bus');

const endingPosition = window.width;



const carGapWidth = (window.innerWidth/6 + window.innerWidth/10); 
const truckGapWidth = (window.innerWidth*0.11); 
const SUVGapWidth = (window.innerWidth*65/500); 
const busGapWidth = (window.innerWidth*5.2/32); 

const carTimeout = carGapWidth*15
const truckTimeout = truckGapWidth*15
const SUVTimeout = SUVGapWidth*15
const busTimeout = busGapWidth*15
// let currentPosition = evenLaneStartingPosition;



const bigLog = document.querySelectorAll('.bigLog');
const twig = document.querySelectorAll('.twig');
const log = document.querySelectorAll('.log');
const branch = document.querySelectorAll('.branch');



let randomIndex = Math.floor(Math.random()*3);



function drawObstacle(veh){
    
    veh.style.left = veh.currentPosition + 'px';
}

function moveObstacleLeft(veh1){

    if(veh1.currentPosition < window.innerWidth*0.899)
    {        
        veh1.currentPosition += (window.innerWidth/1000);
        drawObstacle(veh1);
    }
    else{
        veh1.currentPosition = evenLaneStartingPosition;
    }
}
function moveObstacleLeft1(veh1){

    if(veh1.currentPosition < window.innerWidth*0.899)
    {        
        veh1.currentPosition += (window.innerWidth/1000);
        drawObstacle(veh1);
    }
    else{
        veh1.currentPosition = evenLaneStartingPosition1;
    }
}

function moveObstacleRight(veh1){
    
    
    if(veh1.currentPosition + window.innerWidth/8 > 0)
    {        
        veh1.currentPosition -= (window.innerWidth/1000);
        drawObstacle(veh1);
    }
    else{
        veh1.currentPosition = oddLaneStartingPosition;
    }
}

let timerIdCar = setInterval(()=>
{
        moveObstacleLeft(car1)
        setTimeout(()=>
        {
            moveObstacleLeft(car2)
        },4000)
        setTimeout(()=>
        {
            moveObstacleLeft(car3)
        },8000)
        setTimeout(()=>
        {
            moveObstacleLeft(car4)
        },12000)
}, 15)


let timerIdTruck = setInterval(()=>
{
    
        moveObstacleLeft1(truck1)
        setTimeout(()=>
        {
            moveObstacleLeft1(truck2)
        },truckTimeout)
        setTimeout(()=>
        {
            moveObstacleLeft1(truck3)
        },2*truckTimeout)
        setTimeout(()=>
        {
            moveObstacleLeft1(truck4)
        },3*truckTimeout)
        setTimeout(()=>
        {
            moveObstacleLeft1(truck5)
        },4*truckTimeout)
        setTimeout(()=>
        {
            moveObstacleLeft1(truck6)
        },5*truckTimeout)
        setTimeout(()=>
        {
            moveObstacleLeft1(truck7)
        },6*truckTimeout)
    
}, 15)

let timerIdSUV = setInterval(()=>
{
        moveObstacleRight(SUV1)
        setTimeout(()=>
        {
            moveObstacleRight(SUV2)
        },SUVTimeout)
        setTimeout(()=>
        {
            moveObstacleRight(SUV3)
        },2*SUVTimeout)
        setTimeout(()=>
        {
            moveObstacleRight(SUV4)
        },3*SUVTimeout)
        setTimeout(()=>
        {
            moveObstacleRight(SUV5)
        },4*SUVTimeout)
        setTimeout(()=>
        {
            moveObstacleRight(SUV6)
        },5*SUVTimeout)
}, 15)

let timerIdBus = setInterval(()=>
{
        moveObstacleRight(bus1)
        setTimeout(()=>
        {
            moveObstacleRight(bus2)
        },busTimeout)
        setTimeout(()=>
        {
            moveObstacleRight(bus3)
        },2*busTimeout)
        setTimeout(()=>
        {
            moveObstacleRight(bus4)
        },3*busTimeout)
        setTimeout(()=>
        {
            moveObstacleRight(bus5)
        },4*busTimeout)
}, 15)


let timerIdBigLog = setInterval(()=>{
        moveObstacleLeft(bigLog1);
        setTimeout(()=>
        {
            moveObstacleLeft(bigLog2)
        },truckTimeout)
        setTimeout(()=>
        {
            moveObstacleLeft(bigLog3)
        },2*truckTimeout)
        setTimeout(()=>
        {
            moveObstacleLeft(bigLog4)
        },3*truckTimeout)
        setTimeout(()=>
        {
            moveObstacleLeft(bigLog5)
        },4*truckTimeout)
        setTimeout(()=>
        {
            moveObstacleLeft(bigLog6)
        },5*truckTimeout)
        setTimeout(()=>
        {
            moveObstacleLeft(bigLog7)
        },6*truckTimeout)
},15)

let timerIdLog = setInterval(()=>{
        moveObstacleRight(log1);
        setTimeout(()=>
        {
            moveObstacleRight(log2)
        },busTimeout)
        setTimeout(()=>
        {
            moveObstacleRight(log3)
        },2*busTimeout)
        setTimeout(()=>
        {
            moveObstacleRight(log4)
        },3*busTimeout)
        setTimeout(()=>
        {
            moveObstacleRight(log5)
        },4*busTimeout)
        
},15)


let timerIdBranch = setInterval(()=>{
        moveObstacleLeft(branch1);
        setTimeout(()=>
        {
            moveObstacleLeft(branch2)
        },carTimeout)
        setTimeout(()=>
        {
            moveObstacleLeft(branch3)
        },2*carTimeout)
        setTimeout(()=>
        {
            moveObstacleLeft(branch4)
        },3*carTimeout)
       
        
},15)



let timerIdTwig = setInterval(()=>
{
        moveObstacleRight(twig1)
        setTimeout(()=>
        {
            moveObstacleRight(twig2)
        },SUVTimeout)
        setTimeout(()=>
        {
            moveObstacleRight(twig3)
        },2*SUVTimeout)
        setTimeout(()=>
        {
            moveObstacleRight(twig4)
        },3*SUVTimeout)
        setTimeout(()=>
        {
            moveObstacleRight(twig5)
        },4*SUVTimeout)
        setTimeout(()=>
        {
            moveObstacleRight(twig6)
        },5*SUVTimeout)
}, 15)


const vehicleWidth = [window.innerWidth/(100/6),window.innerWidth/10,window.innerWidth/12.5, window.innerWidth/20];

function roadCollision()
{
    for(let i =0; i < 4; i++)
    {

    
        lanes[i].forEach(vehicle => {
            if(frogCurrentPosition[1] == 47.5 + 45*i)
            {
                
            
                if((frogCurrentPosition[0] + frogWidth > parseFloat(vehicle.style.left))  &&
                (frogCurrentPosition[0] < parseFloat(vehicle.style.left) + vehicleWidth[i]))
                {
                    stop();
                    setTimeout(()=>{
                        alert("Frog died, Reload to restart the game")
                        
                    },500)
                    return;
                    
                }
        }
        })
    }
}
let timerIdCollision = setInterval(roadCollision,1)

setInterval(moveFrogOnObject,15)
function waterHandling(e)
{
    
    frogDisplay.classList.remove('moveLeft')
    frogDisplay.classList.remove('moveRight')
    switch(e.key)
    {
        case 'ArrowUp':
            
            if(frogCurrentPosition[1] === 47.5 + 45*5)
            {
                
                
                frogDisplay.classList.contains('moveLeft') ? frogDisplay.classList.remove('moveRight') : frogDisplay.classList.add('moveLeft');
                frogDisplay.classList.remove('moveRight')
                let onObject = false;
                for(let i = 0; i < twigs.length; i++)
                {
                    if((frogCurrentPosition[0] + frogWidth > parseFloat(twigs[i].style.left))  &&
                    (frogCurrentPosition[0] < parseFloat(twigs[i].style.left) + vehicleWidth[0]))
                    {
                        onObject = true;
                    }
                    
                }
                if(onObject)
                {
                    
                }
                else{
                    stop();
                    setTimeout(alert("Frog drowned, reload to start again"),700);
                }


            }
            
            if(frogCurrentPosition[1] === 47.5 + 45*6)
            {
                
                frogDisplay.classList.contains('moveRight') ? frogDisplay.classList.remove('moveLeft') : frogDisplay.classList.add('moveRight');
                frogDisplay.classList.remove('moveLeft')
                let onObject = false;
                for(let i = 0; i < branchs.length; i++)
                {
                    if((frogCurrentPosition[0] + frogWidth > parseFloat(branchs[i].style.left))  &&
                    (frogCurrentPosition[0] < parseFloat(branchs[i].style.left) + vehicleWidth[0]))
                    {
                        onObject = true;
                    }
                    
                }
                if(onObject)
                {
                    
                }
                else{
                    stop();
                    setTimeout(alert("Frog drowned, reload to start again"),700);
                }
            }

            if(frogCurrentPosition[1] === 47.5 + 45*7)
            {
                
                frogDisplay.classList.contains('moveLeft') ? frogDisplay.classList.remove('moveRight') : frogDisplay.classList.add('moveLeft');
                frogDisplay.classList.remove('moveRight')
                let onObject = false;
                for(let i = 0; i < logs.length; i++)
                {
                    if((frogCurrentPosition[0] + frogWidth > parseFloat(logs[i].style.left))  &&
                    (frogCurrentPosition[0] < parseFloat(logs[i].style.left) + vehicleWidth[0]))
                    {
                        onObject = true;
                    }
                    
                }
                if(onObject)
                {
                    
                }
                else{
                    stop();
                    setTimeout(alert("Frog drowned, reload to start again"),700);
                }

            }

            if(frogCurrentPosition[1] === 47.5 + 45*8)
            {
                
                frogDisplay.classList.contains('moveRight') ? frogDisplay.classList.remove('moveLeft') : frogDisplay.classList.add('moveRight');
                frogDisplay.classList.remove('moveLeft')
                let onObject = false;
                for(let i = 0; i < bigLogs.length; i++)
                {
                    if((frogCurrentPosition[0] + frogWidth > parseFloat(bigLogs[i].style.left))  &&
                    (frogCurrentPosition[0] < parseFloat(bigLogs[i].style.left) + vehicleWidth[0]))
                    {
                        onObject = true;
                    }
                    
                }
                if(onObject)
                {
                  
                }
                else{
                    stop();
                    setTimeout(alert("Frog drowned, reload to start again"),700);
                }

            }
            break;
        case 'ArrowDown':
            if(frogCurrentPosition[1] === 47.5 + 45*5)
            {
                
                frogDisplay.classList.contains('moveLeft') ? frogDisplay.classList.remove('moveRight') : frogDisplay.classList.add('moveLeft');
                frogDisplay.classList.remove('moveRight')
                let onObject = false;
                for(let i = 0; i < twigs.length; i++)
                {
                    if((frogCurrentPosition[0] + frogWidth > parseFloat(twigs[i].style.left))  &&
                    (frogCurrentPosition[0] < parseFloat(twigs[i].style.left) + vehicleWidth[0]))
                    {
                        onObject = true;
                    }
                    
                }
                if(onObject)
                {
                   
                }
                else{
                    stop();
                    setTimeout(alert("Frog drowned, reload to start again"),700);
                }


            }
            
            if(frogCurrentPosition[1] === 47.5 + 45*6)
            {
                
                frogDisplay.classList.contains('moveRight') ? frogDisplay.classList.remove('moveLeft') : frogDisplay.classList.add('moveRight');
                frogDisplay.classList.remove('moveLeft')
                let onObject = false;
                for(let i = 0; i < branchs.length; i++)
                {
                    if((frogCurrentPosition[0] + frogWidth > parseFloat(branchs[i].style.left))  &&
                    (frogCurrentPosition[0] < parseFloat(branchs[i].style.left) + vehicleWidth[0]))
                    {
                        onObject = true;
                    }
                    
                }
                if(onObject)
                {
                  
                }
                else{
                    stop();
                    setTimeout(alert("Frog drowned, reload to start again"),700);
                }
            }

            if(frogCurrentPosition[1] === 47.5 + 45*7)
            {
                
                frogDisplay.classList.contains('moveLeft') ? frogDisplay.classList.remove('moveRight') : frogDisplay.classList.add('moveLeft');
                frogDisplay.classList.remove('moveRight')
                let onObject = false;
                for(let i = 0; i < logs.length; i++)
                {
                    if((frogCurrentPosition[0] + frogWidth > parseFloat(logs[i].style.left))  &&
                    (frogCurrentPosition[0] < parseFloat(logs[i].style.left) + vehicleWidth[0]))
                    {
                        onObject = true;
                    }
                    
                }
                if(onObject)
                {
                
                }
                else{
                    stop();
                    setTimeout(alert("Frog drowned, reload to start again"),700);
                }

            }

            if(frogCurrentPosition[1] === 47.5 + 45*8)
            {
                
                frogDisplay.classList.contains('moveRight') ? frogDisplay.classList.remove('moveLeft') : frogDisplay.classList.add('moveRight');
                frogDisplay.classList.remove('moveLeft')
                let onObject = false;
                for(let i = 0; i < bigLogs.length; i++)
                {
                    if((frogCurrentPosition[0] + frogWidth > parseFloat(bigLogs[i].style.left))  &&
                    (frogCurrentPosition[0] < parseFloat(bigLogs[i].style.left) + vehicleWidth[0]))
                    {
                        onObject = true;
                    }
                    
                }
                if(onObject)
                {
                
                }
                else{
                    stop();
                    setTimeout(alert("Frog drowned, reload to start again"),700);
                }

            }
            break;
        case 'ArrowLeft' || 'ArrowRight':

            if(frogCurrentPosition[1] >= 47.5 + 45*5 && frogCurrentPosition[1] <= 47.5 + 45*8)
            {
                
                stop();
                setTimeout(alert("Frog drowned, reload to start again"),700);
            }
            break;
    }
    
}

document.addEventListener('keydown', waterHandling)



function stop()
{
    clearInterval(timerIdBus)
    clearInterval(timerIdSUV)
    clearInterval(timerIdTruck)
    clearInterval(timerIdCar)
    clearInterval(timerIdCollision)
    clearInterval(timerIdLog)
    clearInterval(timerIdTwig)
    clearInterval(timerIdBigLog)
    clearInterval(timerIdBranch)
    // clearInterval(timerIdWon)
    clearTimeout(timerIDTimeout)
    // frogDisplay.style.b = none;
    document.removeEventListener('keydown',moveFrog)
}


let flea = document.createElement('div')
flea.classList.add('flea');
flea.style.width = window.innerWidth/25 + 'px';
flea.style.height = '35px';
flea.style.position = 'absolute';

flea.style.backgroundImage = 'url(images/flea.png)';
flea.style.backgroundsize = 'cover';


flea1.appendChild(flea)

function fleaEater()
{
    
    if(frogCurrentPosition[1] > 47.5 + 45 * 8)
    {
        if(flea1.contains(flea) && frogCurrentPosition[0] + frogWidth/2 > window.innerWidth*0.825)
        {
            
            flea1.removeChild(flea);
            flea2.appendChild(flea);
            score += 10;
            scoreDisplay.innerHTML = score;
            return;

        }
        if(flea2.contains(flea) && 
        frogCurrentPosition[0] + frogWidth/2 > window.innerWidth*0.6 &&
        frogCurrentPosition[0] + frogWidth/2 < 0.675*window.innerWidth)
        {
            
            flea2.removeChild(flea);
            flea3.appendChild(flea);
            score += 10;
            scoreDisplay.innerHTML = score;
            return;

        }
        if(flea3.contains(flea) && 
        frogCurrentPosition[0] + frogWidth/2 > window.innerWidth*0.375 &&
        frogCurrentPosition[0] + frogWidth/2 < window.innerWidth*0.45)
        {
            
            flea3.removeChild(flea);
            flea4.appendChild(flea);
            score += 10;
            scoreDisplay.innerHTML = score;
            return;

        }
        if(flea4.contains(flea) && 
        frogCurrentPosition[0] + frogWidth/2 > window.innerWidth*0.15 &&
        frogCurrentPosition[0] + frogWidth/2 < window.innerWidth*0.225)
        {
            
            flea4.removeChild(flea);
            // flea3.appendChild(flea);
            score += 10;
            scoreDisplay.innerHTML = score;
            
            return;

        }
        if(!document.contains(flea))
        {
            score += timerWidth*200/window.innerWidth;
            score = Math.round(score);
            scoreDisplay.innerHTML = score;
            clearInterval(timerIdFlea)
            alert('You Won. Reload the site to play again.');
            
            stop();
            
        }
        
        
        // stop();
    }
    
}

let timerIdFlea = setInterval(fleaEater,10)




const timerBar = document.getElementById('timerBar');
timerBar.style.backgroundColor = 'green';

let timerWidth = window.innerWidth*0.50;
timerBar.style.width = timerWidth + 'px';

function timerDecrease()
{
    if (timerWidth > 0)
    {
        timerWidth--;
        timerBar.style.width  = timerWidth + 'px';
    }
    else
    {
        alert('Time up. Game over.')
        stop();
    }
}
let timerIDTimeout = setTimeout(() => {
    let timerIdTimer = setInterval(timerDecrease,200)
}, 8000);


startButton.addEventListener('click', () =>
{
    startScreen.style.display = 'none';

    

    const buffer = document.createElement('div');
    screen.appendChild(buffer);
    buffer.style.width = '100%';
    buffer.style.position = 'absolute'
    buffer.style.height = '495px';
    buffer.style.backgroundImage = 'url(images/buffer.gif)'
    setTimeout(()=>{
        screen.removeChild(buffer)
    },8000)
    
})