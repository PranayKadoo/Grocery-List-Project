// let hidden1 = document.getlElementById("hidden1");
// hidden1.style.diplay = "none"; hidden2.style.diplay = "none"

let btnadd = document.getElementById("addbtn");
getitems.innerHTML = "";


btnadd.addEventListener("click",function(){
   
    let setitem = document.getElementById("setitems").value;
    // hidden1.style.diplay = "block";
    document.getElementById("hidden1").innerText = setitem+" had added";
    setTimeout(function(){
        document.getElementById("hidden1").innerText = "";
        // hidden1.style.diplay = "none";
    },3000);
    
    let para = document.createElement("P");
    para.innerText = setitem;
    getitems.appendChild(para);

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    getitems.appendChild(btn);
    
    btn.addEventListener("click", function(){
        getitems.removeChild(para);
        getitems.removeChild(btn);
        document.getElementById("hidden2").innerText = para.innerText+" has removed";
        // hidden2.style.diplay = "block";
        setTimeout(function(){
            document.getElementById("hidden2").innerText = "";
            // hidden2.style.diplay = "none";
        },3000);
       
    })

    setitem = " ";
    document.getElementById("setitems").value = setitem;      

})

let btnremove = document.getElementById("removebtn");
btnremove.addEventListener("click", function(){
    
        document.getElementById("hidden2").innerText = "All items removed";
        // hidden2.style.diplay = "block";
    setTimeout(function(){
        document.getElementById("hidden2").innerText = "";
        // hidden2.style.diplay = "none";
    },3000);
   
    getitems.innerHTML = "";

})
