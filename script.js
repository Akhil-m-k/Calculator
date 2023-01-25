let choice=0;
let check=0;
function buttonclick(val){ 
    if(check==0||val=="+"||val=="-"||val=="*"||val=="/"||val==1||val==2||val==3||val==4||val==5||val==6||val==7||val==8||val==9||val==0){
     if(choice==0 ||val==1||val==2||val==3||val==4||val==5||val==6||val==7||val==8||val==9||val==0){
        document.getElementById("screen").value+=val;
        
    }
}
    if(val=='*'||val=='/'||val=='+'||val=='-'){
     choice=1;
    }else{
        choice=0;
    }
    if(val=="."){
      check=1;
    }
    
}

function clearDisplay(){
    document.getElementById("screen").value="";
    choice=0;
    check=0;
}

function equalbutton(){
    var text=document.getElementById("screen").value;
    var result= eval(text);
   document.getElementById("screen").value=result;
   choice=0;
   check=0;
}

function backspace(){
   let dlt= document.getElementById("screen").value;
   document.getElementById("screen").value= dlt.substring(0,dlt.length-1);
   choice=0;
   check=0;
}



/*in javaScript we can use a function as an argument in another function */