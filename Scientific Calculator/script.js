
const x = document.getElementsByTagName('a')[9]
 
x.addEventListener('click', () => {
    x.classList.toggle('btn')
})
const y = document.getElementsByTagName('a')[10]
 
y.addEventListener('click', () => {
    y.classList.toggle('btn')
})
const z = document.getElementsByTagName('a')[11]
 
z.addEventListener('click', () => {
    z.classList.toggle('btn')
})
const u = document.getElementsByTagName('a')[12]
 
u.addEventListener('click', () => {
    u.classList.toggle('btn')
})
const v = document.getElementsByTagName('a')[13]
 
v.addEventListener('click', () => {
    v.classList.toggle('btn')
})



var display = document.getElementById("screen");
var buttons = document.getElementsByClassName("button");
  
  Array.prototype.forEach.call(buttons, function(button) {
  button.addEventListener("click", function() {
    if (button.textContent != "=" && 
    button.textContent != "C" && 
    button.textContent != "x" && 
    button.textContent != "÷" && 
    button.textContent != "√" && 
    button.textContent != "x ²" && 
    button.textContent != "%" && 
    button.textContent != "<=" && 
    button.textContent != "±" && 
    button.textContent != "sin" && 
    button.textContent != "cos" && 
    button.textContent != "tan" && 
    button.textContent != "log" && 
    button.textContent != "ln" && 
    button.textContent != "x^" && 
    button.textContent != "x !" && 
    button.textContent != "π" && 
    button.textContent != "e" && 
    button.textContent != "rad" 
    && button.textContent != "∘") {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "±") {
      plusMinus();
    } else if (button.textContent === "<=") {
      backspace();
    } else if (button.textContent === "%") {
      percent();
    } else if (button.textContent === "π") {
      pi();
    } else if (button.textContent === "x ²") {
      square();
    } else if (button.textContent === "√") {
      squareRoot();
    } else if (button.textContent === "sin") {
      sin();
    } else if (button.textContent === "cos") {
      cos();
    } else if (button.textContent === "tan") {
      tan();
    } else if (button.textContent === "log") {
      log();
    } else if (button.textContent === "ln") {
      ln();
    } else if (button.textContent === "x^") {
      exponent();
    } else if (button.textContent === "x !") {
      factorial();
    } else if (button.textContent === "e") {
      exp();
    } else if (button.textContent === "rad") {
      radians();
    } else if (button.textContent === "∘") {
      degrees();
    }
  });
});


function syntaxError() {
  if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
    display.value == "Syntax Error";
  }
}


function equals() {
  if ((display.value).indexOf("^") > -1) {
    var base = (display.value).slice(0, (display.value).indexOf("^"));
    var exponent = (display.value).slice((display.value).indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value)
    checkLength()
    syntaxError()
  }
}

function clear() {
  display.value = "";
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
  display.value += "*";
}

function divide() {
  display.value +=  "/";
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function factorial() {
  var number = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var number = 1;
    for (var i = display.value; i > 0; i--) {
      number *=  i;
    }
    display.value = number;
  }
}

function pi() {
  display.value = (display.value * Math.PI);
}

function square() {
  display.value = eval(display.value * display.value);
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}

function percent() {
  display.value = display.value / 100;
}

function sin() {
  display.value = Math.sin(display.value);
}

function cos() {
  display.value = Math.cos(display.value);
}

function tan() {
  display.value = Math.tan(display.value);
}

function log() {
  display.value = Math.log10(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}

function exponent() {
  display.value += "^";
}

function exp() {
  display.value = Math.exp(display.value);
}

function radians() {
  display.value = display.value * (Math.PI / 180);
}

function degrees() {
  display.value = display.value * (180 / Math.PI);
}
///
setInterval(()=>{

  let hh = document.getElementById('hh')
  let mm = document.getElementById('mm')
  let ss = document.getElementById('ss')
  let sdots = document.querySelector('.sec_dot')
  let mdots = document.querySelector('.min_dot')
  let hdots = document.querySelector('.hr_dot')
  let hours = document.getElementById('hours')
  let minutes = document.getElementById('minutes')
  let seconds = document.getElementById('seconds')
  let ampm = document.getElementById('ampm')

  
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let am = h >=12 ? "PM":"AM";
  if(h>12){
      h=h-12;
  }
  h = (h<10)? "0" + h:h;
  m = (m<10)? "0" + m:m;
  s = (s<10)? "0" + s:s;
  
  hh.style.strokeDashoffset = 510-(510*h)/12;
  mm.style.strokeDashoffset = 630-(630*m)/60;
  ss.style.strokeDashoffset = 760-(760*s)/60;
  sdots.style.transform= `rotateZ(${s*6}deg)`
  mdots.style.transform= `rotateZ(${m*6}deg)`
  hdots.style.transform= `rotateZ(${h*30}deg)`
  hours.innerHTML = h
  minutes.innerHTML = m
  seconds.innerHTML = s
  hours.innerHTML = h
  ampm.innerHTML = am
})


burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp');
    navList.classList.toggle('v-class-resp');
})
