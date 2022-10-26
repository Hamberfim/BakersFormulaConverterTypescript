/***************************************************************
 * Name         : Baker's Formula Converter - index.ts
 * Author       : Anthony Hamlin
 * Created      : 10/26/2022 (original version for desktop in C# 2019)
 * Version      : 1.1
 * OS           : Windows 10
 * IDE          : Visual Studio Code
 * Language     : Typescript
 * Copyright    : Contents are ©2019-2022 by Anthony Hamlin
 *                This content and associated files may not be copied, adapted, remixed,
 *                redistributed or used for commercial purposes without the expressed written consent of the author.
 * Description  : Converts bakers volume formulas into gram based recipes - built for mobile
 ***************************************************************/
"use strict"; // add to TS file move it below the above file information
// base flour calculations
function calculateFormula() {
    // 100% base flour/ flour input in grams
    let flourInputBaseStr = document.querySelector("#flourInputBase").value;
    let flourInputBase;
    // get water percent
    let waterInputStr = document.querySelector("#waterInput").value;
    let waterInput;
    //get salt percent
    let saltInputStr = document.querySelector("#saltInput").value;
    let saltInput;
    // get yeast percent
    let yeastInputStr = document.querySelector("#yeastInput").value;
    let yeastInput;
    // get starter percent
    let starterInputStr = document.querySelector("#starterInput").value;
    let starterInput;
    // get Fat/oil percent
    let fatInputStr = document.querySelector("#fatInput").value;
    let fatInput;
    // validate form input
    try {
        flourInputBase = parseFloat(flourInputBaseStr);
        if (isNaN(flourInputBase) || !parseFloat(flourInputBaseStr) || flourInputBase <= 0) {
            document.querySelector("#flourInputBase").value = "Invalid Input";
            document.querySelector("#flourInputBase").style.color = "red";
            throw "Flour input needs to be a number larger than zero.";
        }
        else {
            document.querySelector("#flourInputBase").style.color = "";
        }
        waterInput = parseFloat(waterInputStr);
        if (isNaN(waterInput) || waterInput <= 0)
            throw "Water input needs to be a number larger than zero.";
        saltInput = parseFloat(saltInputStr);
        if (isNaN(saltInput) || saltInput <= 0)
            throw "Salt input needs to be a number larger than zero.";
        yeastInput = parseFloat(yeastInputStr);
        if (isNaN(yeastInput) || yeastInput <= 0)
            throw "Yeast input needs to be a number larger than zero.";
        starterInput = parseFloat(starterInputStr);
        if (isNaN(starterInput) || starterInput < 0)
            throw "Starter input needs to be a number, zero or more.";
        fatInput = parseFloat(fatInputStr);
        if (isNaN(fatInput) || fatInput < 0)
            throw "Fat/Oil input needs to be a number, zero or more.";
    }
    catch (error) {
        console.error(error);
        alert(error);
    }
    //====== Water Calculations ======
    // water percent to decimal
    let waterOut = waterInput / 100;
    // calculate water to grams based on flour weight
    let waterResultsQuantity = waterOut * flourInputBase;
    // check for bad input
    if (!isNaN(waterResultsQuantity) && waterResultsQuantity > 0) {
        document.querySelector("#waterResultsQuantity").value = waterResultsQuantity.toString();
        document.querySelector("#waterResultsQuantity").style.color = "";
    }
    else {
        document.querySelector("#waterResultsQuantity").value = "Invalid Input";
        document.querySelector("#waterResultsQuantity").style.color = "red";
    }
    //====== Salt calculations ======
    // salt percent to decimal
    let saltOut = saltInput / 100;
    // calculate salt to grams based on flour weight
    let saltResultsQuantity = saltOut * flourInputBase;
    // check for bad input
    if (!isNaN(saltResultsQuantity) && saltResultsQuantity > 0) {
        document.querySelector("#saltResultsQuantity").value = saltResultsQuantity.toString();
        document.querySelector("#saltResultsQuantity").style.color = "";
    }
    else {
        document.querySelector("#saltResultsQuantity").value = "Invalid Input";
        document.querySelector("#saltResultsQuantity").style.color = "red";
    }
    //====== Yeast calculations ======
    // yeast percent to decimal
    let yeastOut = yeastInput / 100;
    // calculate yeast to grams based on flour weight
    let yeastResultsQuantity = yeastOut * flourInputBase;
    if (!isNaN(yeastResultsQuantity) && yeastResultsQuantity > 0) {
        document.querySelector("#yeastResultsQuantity").value = yeastResultsQuantity.toString();
        document.querySelector("#yeastResultsQuantity").style.color = "";
    }
    else {
        document.querySelector("#yeastResultsQuantity").value = "Invalid Input";
        document.querySelector("#yeastResultsQuantity").style.color = "red";
    }
    //====== Starter calculations ======
    // starter percent to decimal
    let starterOut = starterInput / 100;
    // calculate starter to grams based on flour weight
    let starterResultsQuantity = starterOut * flourInputBase;
    if (!isNaN(starterResultsQuantity) && starterResultsQuantity >= 0) {
        document.querySelector("#starterResultsQuantity").value = starterResultsQuantity.toString();
        document.querySelector("#starterResultsQuantity").style.color = "";
    }
    else {
        document.querySelector("#starterResultsQuantity").value = "Invalid Input";
        document.querySelector("#starterResultsQuantity").style.color = "red";
    }
    //====== Fat/oil calculations ======
    // Fat/oil percent to decimal
    let fatOut = fatInput / 100;
    // // calculate Fat/oil to grams based on flour weight
    let fatResultsQuantity = fatOut * flourInputBase;
    if (!isNaN(fatResultsQuantity) && fatResultsQuantity >= 0) {
        document.querySelector("#fatResultsQuantity").value = fatResultsQuantity.toString();
        document.querySelector("#fatResultsQuantity").style.color = "";
    }
    else {
        document.querySelector("#fatResultsQuantity").value = "Invalid Input";
        document.querySelector("#fatResultsQuantity").style.color = "red";
    }
}
function resetForm() {
    let flourInputBaseStr = (document.querySelector("#flourInputBase").value = "500") && (document.querySelector("#flourInputBase").style.color = "");
    document.querySelector("#waterResultsQuantity").style.color = "";
    document.querySelector("#saltResultsQuantity").style.color = "";
    document.querySelector("#yeastResultsQuantity").style.color = "";
    document.querySelector("#starterResultsQuantity").style.color = "";
    document.querySelector("#fatResultsQuantity").style.color = "";
}
function clearForm() {
    // get flour input in grams
    let flourInputBaseStr = (document.querySelector("#flourInputBase").value = "");
    // get water percent
    let waterInputStr = (document.querySelector("#waterInput").value = "");
    document.querySelector("#waterResultsQuantity").value = "";
    //get salt percent
    let saltInputStr = (document.querySelector("#saltInput").value = "");
    document.querySelector("#saltResultsQuantity").value = "";
    // get yeast percent
    let yeastInputStr = (document.querySelector("#yeastInput").value = "");
    document.querySelector("#yeastResultsQuantity").value = "";
    // get starter percent
    let starterInputStr = (document.querySelector("#starterInput").value = "");
    document.querySelector("#starterResultsQuantity").value = "";
    // get Fat/oil percent
    let fatInputStr = (document.querySelector("#fatInput").value = "");
    document.querySelector("#fatResultsQuantity").value = "";
}
