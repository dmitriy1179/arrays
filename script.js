const arrOfpurchase = [
  {
    name: "apple",
    quantity: 5,
    sold: true,
    unit_price: 10,
    sum: 50,
  },
  {
    name: "banan",
    quantity: 7,
    sold: true,
    unit_price: 7,
    sum: 49,
  },
  {
    name: "pear",
    quantity: 3,
    sold: false,
    unit_price: 15,
    sum: 45,
  },
  {
    name: "orange",
    quantity: 5,
    sold: true,
    unit_price: 9,
    sum: 45,
  },
  {
    name: "kiwi",
    quantity: 5,
    sold: false,
    unit_price: 8,
    sum: 40,
  },
];

console.log("arrOfpurchase", arrOfpurchase);

const sortProduct = (arr) => {
  arr.sort((a, b) => {
    return a.sold - b.sold
  })
}

sortProduct(arrOfpurchase);
console.log("sortProduct", arrOfpurchase);

const purchaseOfProduct = (name, arr) => {
  for (product of arr) {
    if (name == product.name) product.sold = true;
  }
}

purchaseOfProduct("pear", arrOfpurchase);
console.log("purchaseOfProduct(pear)", arrOfpurchase);

const removeProduct = (name, arr) => {
  return arr.filter(product => product.name !== name);
}

const newArrOfpurchase = removeProduct("kiwi", arrOfpurchase);
console.log("removeProduct(kiwi)", newArrOfpurchase);

const addPurchase = (product, arr) => {
  const productAvailable = arr.find(element => element.name == product.name);
  if (productAvailable) {
    productAvailable.quantity += product.quantity;
    productAvailable.sum = productAvailable.quantity * productAvailable.unit_price;
  } else {
    arrOfpurchase.push(product);
  }
}

const newPurchaseKiwi = {
  name: "kiwi",
  quantity: 7,
  sold: false,
  unit_price: 8,
  sum: 56,
};

const newPurchasePlum = {
  name: "plum",
  quantity: 6,
  sold: false,
  unit_price: 8,
  sum: 48,
};

addPurchase(newPurchaseKiwi, arrOfpurchase);
console.log("addPurchase(newPurchaseKiwi, arrOfpurchase)", arrOfpurchase);

addPurchase(newPurchasePlum, arrOfpurchase);
console.log("addPurchase(newPurchasePlum, arrOfpurchase)", arrOfpurchase);

const calculationPurchaseAmounts = (arr) => {
  let sum = 0;
  arr.forEach(element => {
    sum += element.sum
  });
  return sum
}

console.log("calculationPurchaseAmounts", calculationPurchaseAmounts(arrOfpurchase));

const calculationUnpurchaseAmounts = (arr) => {
  let sum = 0;
  arr.forEach(element => {
    if (!element.sold) sum += element.sum
  });
  return sum
}

console.log("calculationUnpurchaseAmounts", calculationUnpurchaseAmounts(arrOfpurchase));

const sortPurchaseBySum = (arr, param) => {
  if (param == "smallest") {
    arr.sort((a, b) => {
      return a.sum - b.sum
    })
  }
    if (param == "largest") {
    arr.sort((a, b) => {
      return b.sum - a.sum
    })
  }
}

sortPurchaseBySum(arrOfpurchase, "smallest");
console.log("sortPurchaseBySum(arrOfpurchase, smallest)", arrOfpurchase);

sortPurchaseBySum(arrOfpurchase, "largest");
console.log("sortPurchaseBySum(arrOfpurchase, largest)", arrOfpurchase);
