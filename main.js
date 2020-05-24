var index = 0;
var colors = [ "red", "orange", "yellow", "green", "blue", "navy", "purple"];
var max = colors.length;
var timerId;

function start2(){
    timerId = setInterval(changeColor, 1000);
}

function changeColor(){     
        if( index != max){
            console.log(index);
            document.body.style.backgroundColor = colors[index];           
            index++;
        }
        else{           
            clearInterval( timerId);
            alert("배경색 변경완료");
        }
}

var index = 0;
var color = ["gray"];
var max = colors.length;
var timerId;

function start1(){
    timerId = setInterval(changeColor, 50);
}

function changeColor(){     
        if( index != max){
            console.log(index);
            document.body.style.backgroundColor = color[index];           
            index++;
        }
        else{           
            clearInterval( timerId);
            alert("배경색 변경완료");
        }
}
           