//global var
var image;

function main() {
	
	    //get  a reference to the image, notice how we don't use var
    image = document.getElementById("pizzas");
    //add event listeners to the image 
    image.addEventListener("mouseover", mouseOver); 
    image.addEventListener("mouseout", mouseOut); 
	
	

    
  // set up a new date object 
  var today = new Date();
  //extract the hour min and seconds and store them in a variable 
  var curr_hour = today.getHours();
  var curr_minute = today.getMinutes();
  var curr_second = today.getSeconds();
  var d = today.getDate();
  var m = today.getMonth() +1;
  var y = today.getFullYear();
  
  
  var cur_time =  d + ":" + m + ":" + y + " / " + curr_hour + ":" + curr_minute + ":" + curr_second;
  console.log(cur_time);    
  // inset id into p element with the id of clock-large
  document.getElementById("clock-large").innerHTML = cur_time;
   
 //get reference to button 
 var myButton =  document.getElementById("startClock");
  myButton.addEventListener("click", startTime);    
}

function startTime(){
 console.log("you clicked a button");  
 setInterval(main, 500);
}




function mouseOver() {
    //update image src attribute
    image.src = "images/pizzas_grey.jpg";   
}


function mouseOut() {
   //update image src attribute
  image.src = "images/pizzas.jpg";      
}