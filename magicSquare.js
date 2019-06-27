function myfun(){
	var a = document.querySelectorAll(".square_text");
	var x = [];

	var b = 15;

	for (var i = 0; i <a.length; i++) {
	x[i] = a[i].value;
	}


    if(x[0]!=='' && x[1]!=='' && x[2]!=='' && x[3]!=='' && x[4]!=='' 
    	&& x[5]!=='' && x[6]!=='' && x[7]!=='' && x[8]!==''){
      if(x[0]!== x[1] && x[0]!== x[2] && x[0]!== x[3] && x[0]!== x[4] && x[0]!== x[5] && x[0]!== x[6] && x[0]!== x[7] && 
      	x[0]!== x[8] && x[1]!== x[2] && x[1]!== x[3] && x[1]!== x[4] && x[1]!== x[5] && x[1]!==  x[6] && x[1]!== x[7] 
      	&& x[1]!== x[8] && x[2]!== x[3] && x[2]!== x[4] && x[2]!== x[5] && x[2]!== x[6] && x[2]!== x[7] && x[2]!== x[8] 
      	&& x[3]!== x[4] && x[3]!== x[5] && x[3]!== x[6] && x[3]!== x[7] && x[3]!== x[8] && x[4]!== x[5]
      	&& x[4]!== x[6] && x[4]!== x[7] && x[4]!== x[8] && x[5]!== x[6] && x[5]!== x[7] && x[5]!== x[8] && x[6]!==x[7]
      	&& x[6]!== x[8] && x[7]!== x[8]){
      	for (var i = 0; i <x.length; i++) {
      	x[i] = parseInt(x[i]);
      	}
      	if(x[0]+x[1]+x[2] == b && x[3]+x[4]+x[5] == b && x[6]+x[7]+x[8] == b  
      		&& x[0]+x[3]+x[6] == b && x[1]+x[4]+x[7] == b && x[2]+x[5]+x[8] == b && x[0]+x[4]+x[8] == b
      		&& x[2]+x[4]+x[6] == b){

        var p = document.write("<div style='color:#DD4132; margin-left:33%; margin-top:10%; margin-bottom:20px; text-size:30px; font-size:100px'>You Won!</div>");
		var btn = document.createElement("Button");
		btn.innerHTML = "PLAY AGAIN!";
		document.body.appendChild(btn);
		btn.style.backgroundColor ="#88B04B";
		btn.style.color = 'white';
		btn.style.borderRadius="10px";
		btn.style.borderWidth ="0px";
		btn.style.outline ="none";
		btn.style.margin ="0 40%";
		btn.style.padding='20px 10px';
		btn.style.width ='200px';
		btn.style.fontFamily ="verdana";
		btn.style.fontWeight ='bold';
		btn.style.fontSize ='15px';
		btn.onmouseover = function(){
			btn.style.backgroundColor="#EFC050";
			btn.style.borderRadius="40px";
		}
		btn.onmouseout = function(){
			btn.style.backgroundColor="#88B04B";
			btn.style.borderRadius="10px";
		}
		btn.onclick = function(){
			document.location.reload(true);
	}
      	}
    else{
    	document.write();
    	var p = document.write("<div style='color:red; margin-left:27%; margin-top:10%; margin-bottom:20px; text-size:30px;'><h1>Wrong answer!! Better Luck Next Time!</h1></div>");
		var btn = document.createElement("Button");
		btn.innerHTML = "PLAY AGAIN!";
		document.body.appendChild(btn);
		btn.style.backgroundColor ="#88B04B";
		btn.style.color = 'white';
		btn.style.borderRadius="10px";
		btn.style.borderWidth ="0px";
		btn.style.outline ="none";
		btn.style.margin ="0 40%";
		btn.style.padding='20px 10px';
		btn.style.width ='200px';
		btn.style.fontFamily ="verdana";
		btn.style.fontWeight ='bold';
		btn.style.fontSize ='15px';
		btn.onmouseover = function(){
			btn.style.backgroundColor="#EFC050";
			btn.style.borderRadius="40px";
		}
		btn.onmouseout = function(){
			btn.style.backgroundColor="#88B04B";
			btn.style.borderRadius="10px";
		}
		btn.onclick = function(){
			document.location.reload(true);
	}

      }
    }
    else{
    	var p = document.write("<div style='color:#DD4132; margin-left:25%; margin-top:10%; margin-bottom:20px; text-size:30px;'><h1>You can't use the same number more than once!</h1></div>");
		var btn = document.createElement("Button");
		btn.innerHTML = "PLAY AGAIN!";
		document.body.appendChild(btn);
		btn.style.backgroundColor ="#88B04B";
		btn.style.color = 'white';
		btn.style.borderRadius="10px";
		btn.style.borderWidth ="0px";
		btn.style.outline ="none";
		btn.style.margin ="0 40%";
		btn.style.padding='20px 10px';
		btn.style.width ='200px';
		btn.style.fontFamily ="verdana";
		btn.style.fontWeight ='bold';
		btn.style.fontSize ='15px';
		btn.onmouseover = function(){
			btn.style.backgroundColor="#EFC050";
			btn.style.borderRadius="40px";
		}
		btn.onmouseout = function(){
			btn.style.backgroundColor="#88B04B";
			btn.style.borderRadius="10px";
		}
		btn.onclick = function(){
			document.location.reload(true);
	}
    }
   }
	else{
		var p = document.write("<div style='color:#DD4132; margin-left:32%; margin-top:10%; margin-bottom:20px; text-size:30px;'><h1>You cannot leave empty spaces!</h1></div>");
		var btn = document.createElement("Button");
		btn.innerHTML = "PLAY AGAIN!";
		document.body.appendChild(btn);
		btn.style.backgroundColor ="#88B04B";
		btn.style.color = 'white';
		btn.style.borderRadius="10px";
		btn.style.borderWidth ="0px";
		btn.style.outline ="none";
		btn.style.margin ="0 40%";
		btn.style.padding='20px 10px';
		btn.style.width ='200px';
		btn.style.fontFamily ="verdana";
		btn.style.fontWeight ='bold';
		btn.style.fontSize ='15px';
		btn.onmouseover = function(){
			btn.style.backgroundColor="#EFC050";
			btn.style.borderRadius="40px";
		}
		btn.onmouseout = function(){
			btn.style.backgroundColor="#88B04B";
			btn.style.borderRadius="10px";
		}
		btn.onclick = function(){
			document.location.reload(true);
	}}

}