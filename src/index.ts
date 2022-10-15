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
    if (isNaN(flourInputBase) || !parseFloat(flourInputBaseStr)) throw "Flour input needs to be a number.";
    waterInput = parseFloat(waterInputStr);
    if (isNaN(waterInput)) throw "Water input needs to be a number.";
    saltInput = parseFloat(saltInputStr);
    if (isNaN(saltInput)) throw "Salt input needs to be a number.";
    yeastInput = parseFloat(yeastInputStr);
    if (isNaN(saltInput)) throw "Yeast input needs to be a number.";
    starterInput = parseFloat(starterInputStr);
    if (isNaN(starterInput)) throw "Starter input needs to be a number.";
    fatInput = parseFloat(fatInputStr);
    if (isNaN(fatInput)) throw "Fat/Oil input needs to be a number.";
  } catch (error) {
    console.error(error);
    alert(error);
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

function resetForm() {
  let flourInputBaseStr: string = ((<HTMLInputElement>document.querySelector("#flourInputBase")).value = "500");
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
