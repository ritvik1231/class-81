var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d") //used for drawing shapes on the canvas
var color="red";

ctx.beginPath() //asks the canvas to start drawing the shapes
ctx.strokeStyle=color //used to set the color
ctx.lineWidth=2
ctx.arc(200,200,40,0,2*Math.PI) //arc(x,y,radius,start angle,end angle)and math.pi=180 degree
ctx.stroke() // border color

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    var mouse_x=e.clientX - canvas.offsetLeft;
   var mouse_y = e.clientY - canvas.offsetTop;
   console.log("x="+mouse_x+"y="+mouse_y);
circle(mouse_x,mouse_y); //calling the function
}
function circle(mouse_x,mouse_y)
{
    ctx.beginPath() //asks the canvas to start drawing the shapes
ctx.strokeStyle=color //used to set the color
ctx.lineWidth=2
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI) //arc(x,y,radius,start angle,end angle)and math.pi=180 degree
ctx.stroke() // border color
}