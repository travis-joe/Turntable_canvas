class TurntableCanvas {
  constructor(imgSrc){
    this.canvas = document.createElement("canvas");
    this.canvas.width=500;
    this.canvas.height =500;
    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");
    this.image = new Image();
    this.image.onload = () => this.context.drawImage(this.image, 0, 0, 500, 500);
    this.image.src = imgSrc;
    this.degree = 0;
  }

  rotateAnimation(){
    const {context, canvas, image} = this;
    context.clearRect(0,0,canvas.width,canvas.height);
    context.save();
    context.translate(canvas.width/2,canvas.height/2);
    context.rotate((this.degree+=5)*Math.PI/180);
    context.drawImage(image,-250,-250, 500, 500);
    context.restore();
  }

  rotate() {
    this.rotateAnimation();
    this.startRotating = window.requestAnimationFrame(this.rotate.bind(this));
  }

  rotateTo(degree = 0) {
    console.log(this.degree);
    if(degree > 0 && this.degree < degree) {
      this.rotateAnimation();
      this.startRotating = window.requestAnimationFrame(this.rotateTo.bind(this, degree));
    }else {
      this.stop();
    }
  }

  stop(){
    window.cancelAnimationFrame(this.startRotating);
    this.degree = 0;
    this.startRotating = null;
  }


  test(){
    let isRotating = false;
    this.canvas.addEventListener('click',  () => {
      if(!this.startRotating) {
        this.rotateTo(300);
      } else {
        this.stop();
      }
    })
  }

}

export default TurntableCanvas;