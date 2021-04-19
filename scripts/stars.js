function Star(){
    this.x = Math.floor(Math.random() * cnv.width);
    this.y = Math.floor(Math.random() * cnv.height);
    this.width = 2;
    this.height = 2;
    this.velX = Math.floor(Math.random() * 1.4) + 1;
    this.color = 'white';

    this.draw = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.update = () => {
        this.x += this.velX;
        if(this.x > cnv.width + this.width){
            this.x = 0 - this.width;
            this.y = Math.floor(Math.random() * cnv.height);
        }
    }
}