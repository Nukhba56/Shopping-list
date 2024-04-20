//Access the elements for functional
let entItem = document.querySelector("#enter");
let filtItem = document.querySelector("#filter");
let add = document.querySelector("#add");
let ul = document.querySelector("#list");
let clearAll = document.querySelector("#clear")
let li = ul.querySelectorAll("li.list-items");
let upBtn = document.querySelector("#update");

//************Add items Event

let  addList=()=>{
    
    //get val from input
    let val =  entItem.value;
    console.log(val);
    //li 
    let li = document.createElement("li");
    li.classList.add("list-items");
    //anchor
    let a = document.createElement("a");
    a.href = "#";
    a.innerHTML = val;
    //del btn
    let delbtn = document.createElement("button");
   delbtn.onclick = (e)=>{
        delItem(e);
   };
    delbtn.classList.add("del");
    delbtn.innerText = "X";
    //edit btn
    let editbtn = document.createElement("button");
    editbtn.classList.add("edit");
    editbtn.innerHTML = "Edit";
    editbtn.onclick = (e)=>{
        editItem(e);
    }
    //img
    // let img = document.createElement("img");
    // img.src = "edit.png";
    // img.alt = "edit";
    // editbtn.appendChild(img);
     //append all into ul   
     li.appendChild(a);
     li.appendChild(editbtn);
     li.appendChild(delbtn);   
     ul.appendChild(li);  
     entItem.value = "";
}

add.addEventListener("click",addList);

//*************Delete Items Event
let delItem =(e)=>{
  
    console.log(e.target);
    let del = e.target;
    del.parentElement.remove();
}
let delbtn = ul.querySelectorAll("button.del");
console.log(delbtn);
for(btn of delbtn){
    btn.addEventListener("click",delItem);
}
//****************Filter Items Event
let filterList = ()=>{
    let val =  filtItem.value.toUpperCase();
    console.log(val);
    let ul = document.getElementById("list");
let li = ul.querySelectorAll("li.list-items");
console.log(li);
    for(let i = 0 ; i<li.length ; i++){
        let a = li[i].getElementsByTagName("a")[0];
console.log(a);
        if(a.innerHTML.toUpperCase().indexOf(val) > -1){
            li[i].style.display = '';
        }else{
            li[i].style.display = "none";
        }
        
    }    
}

filtItem.addEventListener("input",filterList);

//*************Clear Items Event
let clearList = ()=>{
   console.log("in");
   let ul = document.getElementById("list");
   let li = ul.querySelectorAll("li.list-items");

 li.forEach(element => {
    element.remove();
   });    
}
clearAll.addEventListener("click",clearList);

//Edit Item Event

// ul.addEventListener("click",(e)=>{

//     if(e.target.tagName === "Button"){
//         const btn = e.target;
//         const li = btn.parentNode;
//         const ul = li.parentNode;
//     }
//     if(btn.className === "edit"){
//        const a =  li.firstElementChild;
//        entItem.value = a.textContent;
//        add.style.display = "none";
//        upBtn.style.display = "inline";
//     }
//     else if(upBtn.onclick === "click"){
//         a.textContent =  entItem.value;
//         upBtn.style.display = "none";
//         add.style.display = "inline";

//     }
// });

var  btn ;
var lis ;
 var a;
let editItem = (e)=>{
   //get val from anchor tag
   btn = e.target;
   lis = btn.parentElement;
   a = lis.firstElementChild;
   console.log(a.textContent);    
      //go back to input 
      entItem.value = a.innerHTML ;
      add.style.display = "none";
      upBtn.style.display = "inline";
}

let editbtn = ul.querySelectorAll("button.edit");
console.log(editbtn);
for(edt of editbtn){
    edt.addEventListener("click",editItem);
}
// //update btn
let updateItem = ()=>{
    console.log(a);
    a.innerHTML = entItem.value;
          add.style.display = "inline";
           upBtn.style.display = "none";
           console.log(a.innerHTML);
  
       }
      
      
       upBtn.addEventListener("click",updateItem);

