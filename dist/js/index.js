"use strict";
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
        if (isNaN(flourInputBase) || !parseFloat(flourInputBaseStr))
            throw "Flour input needs to be a number.";
        waterInput = parseFloat(waterInputStr);
        if (isNaN(waterInput))
            throw "Water input needs to be a number.";
        saltInput = parseFloat(saltInputStr);
        if (isNaN(saltInput))
            throw "Salt input needs to be a number.";
        yeastInput = parseFloat(yeastInputStr);
        if (isNaN(saltInput))
            throw "Yeast input needs to be a number.";
        starterInput = parseFloat(starterInputStr);
        if (isNaN(starterInput))
            throw "Starter input needs to be a number.";
        fatInput = parseFloat(fatInputStr);
        if (isNaN(fatInput))
            throw "Fat/Oil input needs to be a number.";
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
    document.querySelector("#waterResultsQuantity").value = waterResultsQuantity.toString();
    //====== Salt calculations ======
    // salt percent to decimal
    let saltOut = saltInput / 100;
    // calculate salt to grams based on flour weight
    let saltResultsQuantity = saltOut * flourInputBase;
    document.querySelector("#saltResultsQuantity").value = saltResultsQuantity.toString();
    //====== Yeast calculations ======
    // yeast percent to decimal
    let yeastOut = yeastInput / 100;
    // calculate yeast to grams based on flour weight
    let yeastResultsQuantity = yeastOut * flourInputBase;
    document.querySelector("#yeastResultsQuantity").value = yeastResultsQuantity.toString();
    //====== Starter calculations ======
    // starter percent to decimal
    let starterOut = starterInput / 100;
    // calculate starter to grams based on flour weight
    let starterResultsQuantity = starterOut * flourInputBase;
    document.querySelector("#starterResultsQuantity").value = starterResultsQuantity.toString();
    //====== Fat/oil calculations ======
    // Fat/oil percent to decimal
    let fatOut = fatInput / 100;
    // // calculate Fat/oil to grams based on flour weight
    let fatResultsQuantity = fatOut * flourInputBase;
    document.querySelector("#fatResultsQuantity").value = fatResultsQuantity.toString();
}
function resetForm() {
    let flourInputBaseStr = (document.querySelector("#flourInputBase").value = "500");
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
