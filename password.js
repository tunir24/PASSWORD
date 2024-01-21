let inp = document.querySelector(".check");
let button = document.querySelector("button");
let lists = document.querySelector("ul");
let node = lists.childNodes;
let one = lists.firstElementChild;
let two = node[3];
let three = node[5];
let four = lists.lastElementChild;
 let cp = lp = di = ch = 0;
 let text ;
inp.addEventListener("input",()=>{
    text = inp.value;
    let length = text.length;

    for (i=0 ;i<length ;i++ ){
        if (text[i]>='A' && text[i]<='Z'){
         cp++;
        }
       else if (text[i]>='a' && text[i]<='z'){
            lp++;
           }
        else if (text[i]>=0 && text[i]<=9){
            di++;
           }
       else  if (text[i]=='$' || text[i]=='~'|| text[i]=='@'|| text[i]=='#'|| text[i]=='%'|| text[i]=='&'|| text[i]=='*'|| text[i]=='('|| text[i]==')'|| text[i]=='^'){
            ch++;
           }
    }
    if (cp>=1){
    one.className = "new";
    }
    else  one.className = "old";
    if (lp>=1){
        two.className = "new";
        }
        else  two.className = "old";
    if (di>=1){
            three.className = "new";
            }
    else three.className = "old";
    if (ch>=1){
                four.className = "new";
                }
       else  four.className = "old";

})
button.addEventListener("click",()=>{
    button.style.backgroundColor="Red";
    if (cp>=1 && lp>=1 && di>=1 && ch>=1){
        alert(" Password Set Successfully");
    }
    else{ alert(" Password doesn't match criterias")
}
    disable();
})
disable=()=>{
setTimeout(function(){
window.location.reload()
},500)
}
