import React, { useEffect } from 'react';
import './App.css';


var i = 0;
var txt = ['practicing minimalist.','lifelong learner.', 'building something Super.', 'sharing my thoughts.'];
var nextStatement=0;
var typingSpeed = 100;
var clearingSpeed = 50;

var cursor = true;
var speed = 500;

setInterval(() => {
   if(cursor) {
     document.getElementById('cursor').style.opacity = 0;
     cursor = false;
   }else {
     document.getElementById('cursor').style.opacity = 1;
     cursor = true;
   }
}, speed);


function typeWriter() {
  if (i <= txt[nextStatement].length) {
    document.getElementById("demo").innerHTML = txt[nextStatement].split('').slice(0,i).join('');
    i++;
    setTimeout(typeWriter, typingSpeed);
  } else{
    if(nextStatement<3)
      setTimeout(clearWriter, 2000);
	}
}
function clearWriter(){
	if(i>0){
      document.getElementById("demo").innerHTML = txt[nextStatement].split('').slice(0,i).join('');
	i--;
	setTimeout(clearWriter, clearingSpeed);
	} else{
    	nextStatement++
        var id = setTimeout(typeWriter, typingSpeed);
        if(nextStatement===4)
                clearTimeout(id);       
    }
}


function App() {
  useEffect(()=>{
    {setTimeout(typeWriter, typingSpeed)}
  })
  return (
    <>
      <p className="main-content">
        <samp>Ad@rsh Patil,&nbsp;</samp>
        <samp>Front-end developer,&nbsp;</samp>
        <samp id="demo"> </samp>
        <samp id="cursor">|</samp>
      </p>
      <table>
        <tr>
          <td>
            Hello
          </td>
        </tr>
        <tr>
          <td>
            Hello
          </td>
        </tr>
        <tr>
          <td>
            Hello
          </td>
        </tr>
        
      </table>
    </>
  );
}

export default App;
