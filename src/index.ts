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
  let flourInputBaseStr: string = (<HTMLInputElement>document.querySelector("#flourInputBase")).value;
  let flourInputBase!: number;
  // get water percent
  let waterInputStr: string = (<HTMLInputElement>document.querySelector("#waterInput")).value;
  let waterInput!: number;
  //get salt percent
  let saltInputStr: string = (<HTMLInputElement>document.querySelector("#saltInput")).value;
  let saltInput!: number;
  // get yeast percent
  let yeastInputStr: string = (<HTMLInputElement>document.querySelector("#yeastInput")).value;
  let yeastInput!: number;
  // get starter percent
  let starterInputStr: string = (<HTMLInputElement>document.querySelector("#starterInput")).value;
  let starterInput!: number;
  // get Fat/oil percent
  let fatInputStr: string = (<HTMLInputElement>document.querySelector("#fatInput")).value;
  let fatInput!: number;

  // validate form input
  try {
    flourInputBase = parseFloat(flourInputBaseStr);
    if (isNaN(flourInputBase) || !parseFloat(flourInputBaseStr) || flourInputBase <= 0) {
      (<HTMLInputElement>document.querySelector("#flourInputBase")).value = "Invalid Input";
      (<HTMLInputElement>document.querySelector("#flourInputBase")).style.color = "red";
      throw "Flour input needs to be a number larger than zero.";
    } else {
      (<HTMLInputElement>document.querySelector("#flourInputBase")).style.color = "";
    }

    waterInput = parseFloat(waterInputStr);
    if (isNaN(waterInput) || waterInput <= 0) throw "Water input needs to be a number larger than zero.";

    saltInput = parseFloat(saltInputStr);
    if (isNaN(saltInput) || saltInput <= 0) throw "Salt input needs to be a number larger than zero.";

    yeastInput = parseFloat(yeastInputStr);
    if (isNaN(yeastInput) || yeastInput <= 0) throw "Yeast input needs to be a number larger than zero.";

    starterInput = parseFloat(starterInputStr);
    if (isNaN(starterInput) || starterInput < 0) throw "Starter input needs to be a number, zero or more.";

    fatInput = parseFloat(fatInputStr);
    if (isNaN(fatInput) || fatInput < 0) throw "Fat/Oil input needs to be a number, zero or more.";
  } catch (error) {
    console.error(error);
    alert(error);
  }

  //====== Water Calculations ======
  // water percent to decimal
  let waterOut: number = waterInput / 100;
  // calculate water to grams based on flour weight
  let waterResultsQuantity = waterOut * flourInputBase;
  // check for bad input
  if (!isNaN(waterResultsQuantity) && waterResultsQuantity > 0) {
    (<HTMLInputElement>document.querySelector("#waterResultsQuantity")).value = waterResultsQuantity.toString();
    (<HTMLInputElement>document.querySelector("#waterResultsQuantity")).style.color = "";
  } else {
    (<HTMLInputElement>document.querySelector("#waterResultsQuantity")).value = "Invalid Input";
    (<HTMLInputElement>document.querySelector("#waterResultsQuantity")).style.color = "red";
  }

  //====== Salt calculations ======
  // salt percent to decimal
  let saltOut: number = saltInput / 100;
  // calculate salt to grams based on flour weight
  let saltResultsQuantity = saltOut * flourInputBase;
  // check for bad input
  if (!isNaN(saltResultsQuantity) && saltResultsQuantity > 0) {
    (<HTMLInputElement>document.querySelector("#saltResultsQuantity")).value = saltResultsQuantity.toString();
    (<HTMLInputElement>document.querySelector("#saltResultsQuantity")).style.color = "";
  } else {
    (<HTMLInputElement>document.querySelector("#saltResultsQuantity")).value = "Invalid Input";
    (<HTMLInputElement>document.querySelector("#saltResultsQuantity")).style.color = "red";
  }

  //====== Yeast calculations ======
  // yeast percent to decimal
  let yeastOut: number = yeastInput / 100;
  // calculate yeast to grams based on flour weight
  let yeastResultsQuantity = yeastOut * flourInputBase;
  if (!isNaN(yeastResultsQuantity) && yeastResultsQuantity > 0) {
    (<HTMLInputElement>document.querySelector("#yeastResultsQuantity")).value = yeastResultsQuantity.toString();
    (<HTMLInputElement>document.querySelector("#yeastResultsQuantity")).style.color = "";
  } else {
    (<HTMLInputElement>document.querySelector("#yeastResultsQuantity")).value = "Invalid Input";
    (<HTMLInputElement>document.querySelector("#yeastResultsQuantity")).style.color = "red";
  }

  //====== Starter calculations ======
  // starter percent to decimal
  let starterOut: number = starterInput / 100;
  // calculate starter to grams based on flour weight
  let starterResultsQuantity = starterOut * flourInputBase;
  if (!isNaN(starterResultsQuantity) && starterResultsQuantity >= 0) {
    (<HTMLInputElement>document.querySelector("#starterResultsQuantity")).value = starterResultsQuantity.toString();
    (<HTMLInputElement>document.querySelector("#starterResultsQuantity")).style.color = "";
  } else {
    (<HTMLInputElement>document.querySelector("#starterResultsQuantity")).value = "Invalid Input";
    (<HTMLInputElement>document.querySelector("#starterResultsQuantity")).style.color = "red";
  }

  //====== Fat/oil calculations ======
  // Fat/oil percent to decimal
  let fatOut: number = fatInput / 100;
  // // calculate Fat/oil to grams based on flour weight
  let fatResultsQuantity = fatOut * flourInputBase;
  if (!isNaN(fatResultsQuantity) && fatResultsQuantity >= 0) {
    (<HTMLInputElement>document.querySelector("#fatResultsQuantity")).value = fatResultsQuantity.toString();
    (<HTMLInputElement>document.querySelector("#fatResultsQuantity")).style.color = "";
  } else {
    (<HTMLInputElement>document.querySelector("#fatResultsQuantity")).value = "Invalid Input";
    (<HTMLInputElement>document.querySelector("#fatResultsQuantity")).style.color = "red";
  }
}

function resetForm() {
  let flourInputBaseStr: string =
    ((<HTMLInputElement>document.querySelector("#flourInputBase")).value = "500") && ((<HTMLInputElement>document.querySelector("#flourInputBase")).style.color = "");
  (<HTMLInputElement>document.querySelector("#waterResultsQuantity")).style.color = "";
  (<HTMLInputElement>document.querySelector("#saltResultsQuantity")).style.color = "";
  (<HTMLInputElement>document.querySelector("#yeastResultsQuantity")).style.color = "";
  (<HTMLInputElement>document.querySelector("#starterResultsQuantity")).style.color = "";
  (<HTMLInputElement>document.querySelector("#fatResultsQuantity")).style.color = "";
}

function clearForm() {
  // get flour input in grams
  let flourInputBaseStr: string = ((<HTMLInputElement>document.querySelector("#flourInputBase")).value = "");

  // get water percent
  let waterInputStr: string = ((<HTMLInputElement>document.querySelector("#waterInput")).value = "");
  (<HTMLInputElement>document.querySelector("#waterResultsQuantity")).value = "";

  //get salt percent
  let saltInputStr: string = ((<HTMLInputElement>document.querySelector("#saltInput")).value = "");
  (<HTMLInputElement>document.querySelector("#saltResultsQuantity")).value = "";

  // get yeast percent
  let yeastInputStr: string = ((<HTMLInputElement>document.querySelector("#yeastInput")).value = "");
  (<HTMLInputElement>document.querySelector("#yeastResultsQuantity")).value = "";

  // get starter percent
  let starterInputStr: string = ((<HTMLInputElement>document.querySelector("#starterInput")).value = "");
  (<HTMLInputElement>document.querySelector("#starterResultsQuantity")).value = "";

  // get Fat/oil percent
  let fatInputStr: string = ((<HTMLInputElement>document.querySelector("#fatInput")).value = "");
  (<HTMLInputElement>document.querySelector("#fatResultsQuantity")).value = "";
}
