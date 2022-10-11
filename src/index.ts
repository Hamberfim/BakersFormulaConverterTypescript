// base flour calculations
function calculateFormula() {
  // 100% base flour/ flour input in grams
  const flourInputBaseStr: string = (<HTMLInputElement>document.querySelector("#flourInputBase")).value;
  let flourInputBase: number;
  // get water percent
  const waterInputStr: string = (<HTMLInputElement>document.querySelector("#waterInput")).value;
  let waterInput: number;
  //get salt percent
  const saltInputStr: string = (<HTMLInputElement>document.querySelector("#saltInput")).value;
  let saltInput: number;
  // get yeast percent
  const yeastInputStr: string = (<HTMLInputElement>document.querySelector("#yeastInput")).value;
  let yeastInput: number;
  // get starter percent
  const starterInputStr: string = (<HTMLInputElement>document.querySelector("#starterInput")).value;
  let starterInput: number;
  // get Fat/oil percent
  const fatInputStr: string = (<HTMLInputElement>document.querySelector("#fatInput")).value;
  let fatInput: number;
  try {
    flourInputBase = parseFloat(flourInputBaseStr);
    if (isNaN(flourInputBase)) throw "Flour input is not a number";
    waterInput = parseFloat(waterInputStr);
    if (isNaN(waterInput)) throw "Water input is not a number";
    saltInput = parseFloat(saltInputStr);
    if (isNaN(saltInput)) throw "Salt input is not a number";
    yeastInput = parseFloat(yeastInputStr);
    if (isNaN(saltInput)) throw "Yeast input is not a number";
    starterInput = parseFloat(starterInputStr);
    if (isNaN(starterInput)) throw "Starter input is not a number";
    fatInput = parseFloat(fatInputStr);
    if (isNaN(fatInput)) throw "Fat/Oil input is not a number";
  } catch (error) {
    console.error(error);
  }

  //====== Water Calculations ======
  // water percent to decimal
  let waterOut: number = waterInput / 100;
  // calculate water to grams based on flour weight
  let waterResultsQuantity = waterOut * flourInputBase;
  (<HTMLInputElement>document.querySelector("#waterResultsQuantity")).value = waterResultsQuantity.toString();
  //====== Salt calculations ======
  // salt percent to decimal
  let saltOut: number = saltInput / 100;
  // calculate salt to grams based on flour weight
  let saltResultsQuantity = saltOut * flourInputBase;
  (<HTMLInputElement>document.querySelector("#saltResultsQuantity")).value = saltResultsQuantity.toString();

  //====== Yeast calculations ======
  // yeast percent to decimal
  let yeastOut: number = yeastInput / 100;
  // calculate yeast to grams based on flour weight
  let yeastResultsQuantity = yeastOut * flourInputBase;
  (<HTMLInputElement>document.querySelector("#yeastResultsQuantity")).value = yeastResultsQuantity.toString();

  //====== Starter calculations ======
  // starter percent to decimal
  let starterOut: number = starterInput / 100;
  // calculate starter to grams based on flour weight
  let starterResultsQuantity = starterOut * flourInputBase;
  (<HTMLInputElement>document.querySelector("#starterResultsQuantity")).value = starterResultsQuantity.toString();

  //====== Fat/oil calculations ======
  // Fat/oil percent to decimal
  let fatOut: number = fatInput / 100;
  // // calculate Fat/oil to grams based on flour weight
  let fatResultsQuantity = fatOut * flourInputBase;
  (<HTMLInputElement>document.querySelector("#fatResultsQuantity")).value = fatResultsQuantity.toString();
}
