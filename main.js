let display = document.querySelector(".display");
// console.log(display);
let buttonsShow = document.querySelectorAll(".numbers , .operats");
let buttonsNum = document.querySelectorAll(".buttons .numbers");
let buttonsOperats = document.querySelectorAll(".buttons .operats");
let buttonEqual = document.querySelector(".buttons .equal");
let buttonsClear = document.querySelector(".buttons .clear");
let buttons = document.querySelectorAll("button");
let buttonDel = document.querySelector(".del");

buttonsShow.forEach(ele =>{
    // add eventlistner 
    ele.addEventListener("click" , (e)=>{
        console.log(e.target.textContent)
        // show number in screen display
        display.value += e.target.textContent;
    })
})

// clear content 
buttonsClear.onclick= function (e){
    display.value = ""
}
    
// show result 
buttonEqual.onclick= function (el){
    // "Eval" خاصية تستعمل لاجراء  العمليات الحسابية على العمليات  النصية 
    // let parseToNum = eval(display.value);

    // التحقق اذ كانت  الشاشة فارغة او بها مسافات
    if(display.value.trim() === ""){    
        console.log("not vide")
        return;
    }else{

    }
    // تغيير لون النتيجة 
}
buttons.forEach(btn =>{
    btn.addEventListener("click" , (el) =>{
        if(el.target.className === "equal" && display.value.trim() !== ""){
            display.value = eval(display.value);
            console.log("yes")
            display.classList.add("result_sc"); 
        }else{
          display.classList.remove("result_sc");  
        } 
        // edit delet button
        if(el.target.className === "del" && display.value.trim() !== ""){
            display.value= display.value.slice(0 , -1);
        }
    })
})
    
