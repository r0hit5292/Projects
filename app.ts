//var m = document.getElementById("app").innerHTML;
export { }

function NEWFUN(){
    var Input = (<HTMLInputElement>document.getElementById("Search")).value;
    if(Input===''){
        alert("please write somethng");
    }
    else {
    var OL = (<HTMLParagraphElement>document.getElementById("new"));
    var list = document.createElement("li");
    var text = document.createTextNode(Input);
    var closeButton = document.createElement("span");
    var ButtonText = document.createTextNode("X");
  list.appendChild(text);
OL.appendChild(list);
closeButton.className = "closedF";
var SpanClass = document.getElementsByClassName("closedF");
closeButton.appendChild(ButtonText);
  list.appendChild(closeButton);
  /*const result = <T extends any>(closed:T[]) => {
     closed[closed.length - 1]; 
  }*/
  Input='';
 //console.log(rohit);
  

 /*for (let i = 0; i <rohit.length; i++) {
    console.log(i);
    rohit[i].addEventListener("click",function() {
        console.log(this);
        //console.log(rohit[i].parentElement);
      // rohit[i].parentElement?.remove();
      //var k = this.parentElement;
     // k.remove();
      // return;
      
      })   
      //let element: HTMLElement = document.getElementsByClassName('closedF')[i] as HTMLElement;
//element[i].paremtElement.remove();
    
}
    }*/
    var i;
    for (i = 0; i < SpanClass.length; i++) {
      SpanClass[i].addEventListener("click",function() {
        /*console.log(this);
        console.log(this.paremtElement)*/
        var removeElement = this.parentElement;
        removeElement.remove();
      }
      )
}
    }}