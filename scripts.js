/*function convertCurrency(amountMoney, input, output){
    const moneyChange = amountMoney * exchangeRates[input][output];
    return moneyChange;
}*/
function formatCurrency(type, value){
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}

async function getConvertedValue(conversion, amount){
  const api = `https://free.currencyconverterapi.com/api/v6/convert?q=${conversion}&compact=y&apiKey=15a224c5f34bb33b4e67`;
  const json = await fetch(api);
  const result = await json.json();
  return result[conversion].val * amount;
}
async function converter(){
    const amount = document.getElementById('amount').value;
    const input = document.getElementById("from").value;
    const output = document.getElementById("to").value;
    const convertedValue = await getConvertedValue(`${input}_${output}`, amount);
    document.getElementById('result').innerHTML = formatCurrency(output, convertedValue);
}