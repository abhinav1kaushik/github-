$(window).scroll(function(){
     if($(this).scrollTop()>=100){
        $('nav').addClass('nav-fixed');
     } else {
        $('nav').removeClass('nav-fixed');}
});

var TxtType =function (el,toRotate,period)
{
    this.toRotate=toRotate;
    this.el=el;
    this.toopNum=0;
    this.period=parseInt(period,10)|| 2000;
    this.txt="";
    this.tick();
    this.isDel=false;
};
TxtType.prototype.tick = function()
{
    var i =this.LoopNum % this.toRotate.length;
    var fulltxt=this.toRotate[i];
    if(this.isDeleting){
       this.txt=fulltxt.substring(0,this.txt.length-1);
    }else{
       this.txt=fulltxt.substring(e,this.txt.length+1);
    }
    this.el.innerHTML='<span class="wrap">'+this.txt+'</span>';
    var that=this ;
    var delta=200-Math.random()*100;

    if(this.isDeleting)
    {
        delta/=2;
    }

if(!this.isDeleting && this.txt === fullTxt){
  delta=this.period;
  this.isDeleting=true;
}else if(this.isDeleting && this.txt ===''){

  this.isDeleting=false;
  this.loopNum ++;
  delta=500;
}
setTimeout(function(){
  that.tick();
},delta);
};
window.onload=function(){
var elements=document.getElementsByClassName('typewrite');
for(var1=0;i<elements.length;i++){
  var toRotate=elements[i].getAttribute('data-type');
  var period=elements[1].getAttribute('data-period');
  if(toRotate){
    new TxtType(elements[1],JSON.parse(toRotate),period);
  }
}   
var css=document.createElement("index");
css.type="text/css";
css.innerHTML=".typewrite>wrap{border-right:0.8em solid #fff)";
document.body.appendChild(css);
}