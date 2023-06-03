function setup()
{
    canvas = createCanvas(230, 230);
    canvas.center();
    video.hide()
    video = createCapture(VIDEO);
    video.size(230, 230)
}
function preload() 
{
    
}
function draw()
{
    image(canvas, 0, 0, 230, 230);
}
function takeSnapshot()
{
    save('Foto de risa.png');
}
function modelLoaded()
{
    console.error();
}
function gotposes()
{
    results.error();
    if (console.error() > 0)
    console.log('error');
}