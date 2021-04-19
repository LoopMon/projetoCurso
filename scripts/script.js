const cnv = document.getElementById('cnv');
const ctx = cnv.getContext('2d');
cnv.width = window.innerWidth - 2;
cnv.height = window.innerHeight - 2;
const stars = []

for(let i = 0; i <= 700; i++){
    stars.push(new Star());
}

function update(){
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, cnv.clientWidth, cnv.height);
    for(let i = 0; i < stars.length; i++){
        stars[i].update();
    }
}

function draw(){
    for(let i = 0; i < stars.length; i++){
        stars[i].draw();
    }
}

function loop(){
    update();
    draw();
    window.requestAnimationFrame(loop);
}

corpo.addEventListener('mouseenter', alterColorOn);
corpo.addEventListener('mouseout', alterColorOff);
pe.addEventListener('mouseenter', alterColorOn);
pe.addEventListener('mouseout', alterColorOff);
pd.addEventListener('mouseenter', alterColorOn);
pd.addEventListener('mouseout', alterColorOff);
bag.addEventListener('mouseenter', alterColorOn);
bag.addEventListener('mouseout', alterColorOff);


loop();

/*
perfil AVA
<div style="background:url(&quot;https://thumbs.gfycat.com/GlamorousSphericalIslandcanary-size_restricted.gif&quot;);height:250px;width:444px;">
<img src="https://vignette.wikia.nocookie.net/minecraft/images/e/e7/BlueFire.gif/revision/latest/scale-to-width-down/340?cb=20200207201333" alt="340?cb=20200207201333" style="text-align:center;width:50px;height:50px;float:left;"><img src="https://vignette.wikia.nocookie.net/minecraft/images/e/e7/BlueFire.gif/revision/latest/scale-to-width-down/340?cb=20200207201333" alt="340?cb=20200207201333" style="text-align:center;width:50px;height:50px;float:right;">
</div>
*/