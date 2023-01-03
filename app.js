let stepOne = document.getElementById("num-1"),
    stepTwo = document.getElementById("num-2"),
    stepThree = document.getElementById("num-3"),
    stepFour = document.getElementById("num-4"),
    stepOneDiv = document.querySelector(".step1"),
    stepTwoDiv = document.querySelector(".step2"),
    stepThreeDiv = document.querySelector(".step3"),
    stepFourDiv = document.querySelector(".step4"),
    stepFiveDiv = document.querySelector(".step5"),
    nextBtnOne = document.querySelectorAll(".btn-1"),
    nextBtnTwo = document.querySelectorAll(".btn-2"),
    nextBtnThree = document.querySelectorAll(".btn-3"),
    confirmBtn = document.querySelectorAll(".btn-4"),
    backBtnTwo = document.querySelectorAll(".back-btn-2"),
    backBtnThree = document.querySelectorAll(".back-btn-3"),
    backBtnFour = document.querySelectorAll(".back-btn-4"),
    changeBtn = document.getElementById("change-btn"),
    subType = document.querySelectorAll(".sub"),
    addOnType = document.querySelectorAll(".add-on"),
    checkBox = document.querySelectorAll(".checkbox"),
    twoMonthsFree = document.querySelectorAll(".free"),
    durationCheckBox = document.getElementById("duration-check-box"),
    subMonthlyAmounts = document.querySelectorAll(".mo"),
    subYearlyAmounts = document.querySelectorAll(".yr"),
    subClicked = document.getElementById("sub-clicked"),
    durationClicked = document.getElementById("duration-clicked"),
    subAmountsClicked = document.getElementById("sub-amount"),
    addOnChecked = document.querySelectorAll(".add-on-checked"),
    monthlyValue = document.querySelectorAll(".mo-val"),
    yearlyValue = document.querySelectorAll(".yr-val"),
    totalValue = document.getElementById("total-val"),
    inputInfo = document.querySelectorAll(".info-input"),
    fieldMsg = document.querySelector(".field");


nextBtnOne.forEach(btn => {
    btn.addEventListener("click", function(){
        if(inputInfo.item(0).value === "" || inputInfo.item(1).value === "" || inputInfo.item(2).value === ""){
            fieldMsg.classList.add("show")
        }
        else{
            fieldMsg.classList.remove("show");
            stepTwoColor();
            stepOneDiv.classList.toggle("hide");
            stepTwoDiv.classList.toggle("show");
        }
    });
});

nextBtnTwo.forEach(btn => {
    btn.addEventListener("click", function(){
        stepThreeColor();
        stepTwoDiv.classList.toggle("show");
        stepThreeDiv.classList.toggle("show");
    });
});

nextBtnThree.forEach(btn => {
    btn.addEventListener("click", function(){
        stepFourColor();
        stepThreeDiv.classList.toggle("show");
        stepFourDiv.classList.toggle("show");
        calc();
    });
});

confirmBtn.forEach(btn => {
    btn.addEventListener("click", function(){
        stepOne.classList.remove("step-color");
        stepTwo.classList.remove("step-color");
        stepThree.classList.remove("step-color");
        stepFour.classList.remove("step-color");
        stepFourDiv.classList.toggle("show");
        stepFiveDiv.classList.toggle("show");
    });
});

backBtnTwo.forEach(btn => {
    btn.addEventListener("click", function(){
        stepOneColor();
        stepOneDiv.classList.toggle("hide");
        stepTwoDiv.classList.toggle("show");
    });;
});

backBtnThree.forEach(btn => {
    btn.addEventListener("click", function(){
        stepTwoColor();
        stepTwoDiv.classList.toggle("show");
        stepThreeDiv.classList.toggle("show");
    });;
});

backBtnFour.forEach(btn => {
    btn.addEventListener("click", function(){
        stepThreeColor();
        stepThreeDiv.classList.toggle("show");
        stepFourDiv.classList.toggle("show");
    });;
});

changeBtn.addEventListener("click", function(){
    stepTwoColor();
    stepTwoDiv.classList.toggle("show");
    stepFourDiv.classList.toggle("show");
});

durationCheckBox.addEventListener("change", function(){
    subType.forEach(sub => sub.classList.remove("sub-props"));
    if(durationCheckBox.checked === true){
        twoMonthsFree.forEach(free => free.classList.toggle("show"));
        subMonthlyAmounts.forEach(monthly => monthly.classList.toggle("hide"));
        subYearlyAmounts.forEach(yearly => yearly.classList.toggle("show"));
        durationClicked.innerText = "Yearly";
    }
    else{
        twoMonthsFree.forEach(free => free.classList.toggle("show"));
        subMonthlyAmounts.forEach(monthly => monthly.classList.toggle("hide"));
        subYearlyAmounts.forEach(yearly => yearly.classList.toggle("show"));
        durationClicked.innerText = "Monthly";
    }
});

subType.item(0).addEventListener("click", function(){
    subType.item(0).classList.toggle("sub-props");
    subType.item(1).classList.remove("sub-props");
    subType.item(2).classList.remove("sub-props");
    subClicked.innerText = "Arcade";
    if(durationCheckBox.checked === true){
        subAmountsClicked.innerText = "$90/yr";
    }
    else{
        subAmountsClicked.innerText = "$9/mo";
    }
});

subType.item(1).addEventListener("click", function(){
    subType.item(0).classList.remove("sub-props");
    subType.item(1).classList.toggle("sub-props");
    subType.item(2).classList.remove("sub-props");
    subClicked.innerText = "Advanced";
    if(durationCheckBox.checked === true){
        subAmountsClicked.innerText = "$120/yr";
    }
    else{
        subAmountsClicked.innerText = "$12/mo";
    }
});

subType.item(2).addEventListener("click", function(){
    subType.item(0).classList.remove("sub-props");
    subType.item(1).classList.remove("sub-props");
    subType.item(2).classList.toggle("sub-props");
    subClicked.innerText = "Pro";
    if(durationCheckBox.checked === true){
        subAmountsClicked.innerText = "$150/yr";
    }
    else{
        subAmountsClicked.innerText = "$15/mo";
    }
});

checkBox.item(0).addEventListener("change", function(){
    addOnType.item(0).classList.toggle("sub-props");
    if(checkBox.item(0).checked === true){
        addOnChecked.item(0).classList.toggle("checked");
    }
    else{
        addOnChecked.item(0).classList.toggle("checked");
    }
    if(checkBox.item(1).checked === true){
        addOnType.item(1).classList.add("sub-props");
    }
    else{
        addOnType.item(1).classList.remove("sub-props");
    }
    if(checkBox.item(2).checked === true){
        addOnType.item(2).classList.add("sub-props");
    }
    else{
        addOnType.item(2).classList.remove("sub-props");
    }    
});

checkBox.item(1).addEventListener("change", function(){
    addOnType.item(1).classList.toggle("sub-props");
    if(checkBox.item(1).checked === true){
        addOnChecked.item(1).classList.toggle("checked");
    }
    else{
        addOnChecked.item(1).classList.toggle("checked");
    }
    if(checkBox.item(0).checked === true){
        addOnType.item(0).classList.add("sub-props");
    }
    else{
        addOnType.item(0).classList.remove("sub-props");
    }
    if(checkBox.item(2).checked === true){
        addOnType.item(2).classList.add("sub-props");
    }
    else{
        addOnType.item(2).classList.remove("sub-props");
    } 
});

checkBox.item(2).addEventListener("change", function(){
    addOnType.item(2).classList.toggle("sub-props");
    if(checkBox.item(2).checked === true){
        addOnChecked.item(2).classList.toggle("checked");
    }
    else{
        addOnChecked.item(2).classList.toggle("checked");
    }
    if(checkBox.item(0).checked === true){
        addOnType.item(0).classList.add("sub-props");
    }
    else{
        addOnType.item(0).classList.remove("sub-props");
    }
    if(checkBox.item(1).checked === true){
        addOnType.item(1).classList.add("sub-props");
    }
    else{
        addOnType.item(1).classList.remove("sub-props");
    } 
});

function calc(){
    if(durationCheckBox.checked === true){
        if(subClicked.innerText === "Arcade"){
            if(checkBox.item(0).checked){
                totalValue.innerText = "100"
            }
            if(checkBox.item(1).checked){
                totalValue.innerText = "110"
            }
            if(checkBox.item(2).checked){
                totalValue.innerText = "110"
            }
            if(checkBox.item(0).checked && checkBox.item(1).checked){
                totalValue.innerText = "120"
            }
            if(checkBox.item(0).checked && checkBox.item(2).checked){
                totalValue.innerText = "120"
            }
            if(checkBox.item(1).checked && checkBox.item(2).checked){
                totalValue.innerText = "130"
            }
            if(checkBox.item(0).checked && checkBox.item(1).checked && checkBox.item(2).checked){
                totalValue.innerText = "140"
            }
        }
        else if(subClicked.innerText === "Advanced"){
            if(checkBox.item(0).checked){
                totalValue.innerText = "130"
            }
            if(checkBox.item(1).checked){
                totalValue.innerText = "140"
            }
            if(checkBox.item(2).checked){
                totalValue.innerText = "140"
            }
            if(checkBox.item(0).checked && checkBox.item(1).checked){
                totalValue.innerText = "150"
            }
            if(checkBox.item(0).checked && checkBox.item(2).checked){
                totalValue.innerText = "150"
            }
            if(checkBox.item(1).checked && checkBox.item(2).checked){
                totalValue.innerText = "160"
            }
            if(checkBox.item(0).checked && checkBox.item(1).checked && checkBox.item(2).checked){
                totalValue.innerText = "170"
            }
        }
        else if(subClicked.innerText === "Pro"){
            if(checkBox.item(0).checked){
                totalValue.innerText = "160"
            }
            if(checkBox.item(1).checked){
                totalValue.innerText = "170"
            }
            if(checkBox.item(2).checked){
                totalValue.innerText = "170"
            }
            if(checkBox.item(0).checked && checkBox.item(1).checked){
                totalValue.innerText = "180"
            }
            if(checkBox.item(0).checked && checkBox.item(2).checked){
                totalValue.innerText = "180"
            }
            if(checkBox.item(1).checked && checkBox.item(2).checked){
                totalValue.innerText = "190"
            }
            if(checkBox.item(0).checked && checkBox.item(1).checked && checkBox.item(2).checked){
                totalValue.innerText = "200"
            }
        }
    }
    else{
        if(subClicked.innerText === "Arcade"){
            if(checkBox.item(0).checked){
                totalValue.innerText = "10"
            }
            if(checkBox.item(1).checked){
                totalValue.innerText = "11"
            }
            if(checkBox.item(2).checked){
                totalValue.innerText = "11"
            }
            if(checkBox.item(0).checked && checkBox.item(1).checked){
                totalValue.innerText = "12"
            }
            if(checkBox.item(0).checked && checkBox.item(2).checked){
                totalValue.innerText = "12"
            }
            if(checkBox.item(1).checked && checkBox.item(2).checked){
                totalValue.innerText = "13"
            }
            if(checkBox.item(0).checked && checkBox.item(1).checked && checkBox.item(2).checked){
                totalValue.innerText = "14"
            }
        }
        else if(subClicked.innerText === "Advanced"){
            if(checkBox.item(0).checked){
                totalValue.innerText = "13"
            }
            if(checkBox.item(1).checked){
                totalValue.innerText = "14"
            }
            if(checkBox.item(2).checked){
                totalValue.innerText = "14"
            }
            if(checkBox.item(0).checked && checkBox.item(1).checked){
                totalValue.innerText = "15"
            }
            if(checkBox.item(0).checked && checkBox.item(2).checked){
                totalValue.innerText = "15"
            }
            if(checkBox.item(1).checked && checkBox.item(2).checked){
                totalValue.innerText = "16"
            }
            if(checkBox.item(0).checked && checkBox.item(1).checked && checkBox.item(2).checked){
                totalValue.innerText = "17"
            }
        }
        else if(subClicked.innerText === "Pro"){
            if(checkBox.item(0).checked){
                totalValue.innerText = "16"
            }
            if(checkBox.item(1).checked){
                totalValue.innerText = "17"
            }
            if(checkBox.item(2).checked){
                totalValue.innerText = "17"
            }
            if(checkBox.item(0).checked && checkBox.item(1).checked){
                totalValue.innerText = "18"
            }
            if(checkBox.item(0).checked && checkBox.item(2).checked){
                totalValue.innerText = "18"
            }
            if(checkBox.item(1).checked && checkBox.item(2).checked){
                totalValue.innerText = "19"
            }
            if(checkBox.item(0).checked && checkBox.item(1).checked && checkBox.item(2).checked){
                totalValue.innerText = "20"
            }
        }
    }
}

function stepOneColor(){
    stepOne.classList.toggle("step-color");
    stepTwo.classList.remove("step-color");
    stepThree.classList.remove("step-color");
    stepFour.classList.remove("step-color");
    subType.item(0).classList.toggle("sub-props");
    if(checkBox.item(0).checked === true && checkBox.item(1).checked === true){
        addOnType.item(0).classList.toggle("sub-props");
        addOnType.item(1).classList.toggle("sub-props");
        addOnChecked.item(0).classList.toggle("checked");
        addOnChecked.item(1).classList.toggle("checked");
    }
    else{
        addOnType.item(0).classList.toggle("sub-props");
        addOnType.item(1).classList.toggle("sub-props");
        addOnChecked.item(0).classList.toggle("checked");
        addOnChecked.item(1).classList.toggle("checked");
    }
}
function stepTwoColor(){
    stepOne.classList.remove("step-color");
    stepTwo.classList.toggle("step-color");
    stepThree.classList.remove("step-color");
    stepFour.classList.remove("step-color");
}
function stepThreeColor(){
    stepOne.classList.remove("step-color");
    stepTwo.classList.remove("step-color");
    stepThree.classList.toggle("step-color");
    stepFour.classList.remove("step-color");
}
function stepFourColor(){
    stepOne.classList.remove("step-color");
    stepTwo.classList.remove("step-color");
    stepThree.classList.remove("step-color");
    stepFour.classList.toggle("step-color");
}

window.onload = stepOneColor;