function preload(){
    img=loadImage("https://tse2.mm.bing.net/th?id=OIP.W81yzpMIz1_1wlH5t4peJgHaEo&pid=Api&P=0");
}
function setup(){
    canvas = createCanvas(640,500);
    canvas.position(560,400);
    webcam = createCapture(VIDEO);
    webcam.hide();
    tint_colour = "";
}
function draw(){
    image(webcam,0,0,640,500);
    tint(tint_colour); 
    let c = color(188, 167, 9);
    fill(c);
    rect(30, 20, 55, 55);
    let d = color(192,192,192);
    fill(d);
    circle(57, 100, 55,70);   
    fill(c);
    rect(30, 120, 55, 55);
    fill(d);
    circle(57, 200, 55,70); 
    fill(c);
    rect(30, 220, 55, 55);
    fill(d);
    circle(57, 300, 55,70);   

     
    fill(c);
    rect(530, 20, 55, 55);
    fill(d);
    circle(557, 100, 55,70);   
    fill(c);
    rect(530, 120, 55, 55);
    fill(d);
    circle(557, 200, 55,70); 
    fill(c);
    rect(530, 220, 55, 55);
    fill(d);
    circle(557, 300, 55,70);   
    

}  



function take_snapshot(){
save('filter_image.png');
}
function filter_tint(){
    tint_colour = document.getElementById("color_name").value;

}