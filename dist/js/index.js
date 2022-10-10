"use strict";
// base flour calculations
function calculateFormula() {
    // 100% base flour/ flour input in grams
    const flourInputBaseStr = document.querySelector("#flourInputBase").value;
    let flourInputBase;
    // get water percent
    const waterInputStr = document.querySelector("#waterInput").value;
    let waterInput;
    //get salt percent
    const saltInputStr = document.querySelector("#saltInput").value;
    let saltInput;
    // get yeast percent
    const yeastInputStr = document.querySelector("#yeastInput").value;
    let yeastInput;
    // get starter percent
    const starterInputStr = document.querySelector("#starterInput").value;
    let starterInput;
    // get Fat/oil percent
    const fatInputStr = document.querySelector("#fatInput").value;
    let fatInput;
    try {
        flourInputBase = parseFloat(flourInputBaseStr);
        if (isNaN(flourInputBase))
            throw "Flour input is not a number";
        waterInput = parseFloat(waterInputStr);
        if (isNaN(waterInput))
            throw "Water input is not a number";
        saltInput = parseFloat(saltInputStr);
        if (isNaN(saltInput))
            throw "Salt input is not a number";
        yeastInput = parseFloat(yeastInputStr);
        if (isNaN(saltInput))
            throw "Yeast input is not a number";
        starterInput = parseFloat(starterInputStr);
        if (isNaN(starterInput))
            throw "Starter input is not a number";
        fatInput = parseFloat(fatInputStr);
        if (isNaN(fatInput))
            throw "Fat/Oil input is not a number";
    }
    catch (error) {
        console.error(error);
    }
    console.log(fatInput); // TODO: REMOVE
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
