const production = {
    shadeA: {
        numberOfCows: 34,
        avarageProduction: 15,
    },
    shadeB: {
        numberOfCows: 11,
        avarageProduction: 28,
    },
    shadeC: {
        numberOfCows: 27,
        avarageProduction: 18,
    },
    shadeD: {
        numberOfCows: 52,
        avarageProduction: 11,
    },

}
// console.log(production); commented out.
const milkPrice = 45;
const monthsS = ["Jan", "Feb", "Mar","April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ]
;
// the total milkproduction per shed
 const standardPrice = 45;
 function calculateTotal(){
     let res ={};
     for (let[key, vallues]of Object.entries(production)){
         let calc = vallues.numberOfCows*vallues.avarageProduction;
         res[key] =total;
     }
     return{res,total}
 }
// getting the number of days in a month.
daysInMonths(month, year, 2021){
    return (new Date(year, month, 0).getDate());
}
function totalProduction(){
    let st = '';
    const resp =calculateTotal();
    for ([key, vallues]of Object.entries(resp.res)){
        st += `your production per shed ${key.charAt(5)} is ${vallue} liters per day`;
    }
    st += `The total production is ${resp.total}liters per day`
}
// console.log(totalProduction()) commented out.
function incomeOverTime(sp=sellingPrice){
    let totalProd = calculatedTotal().total
    return `your weekly income will be Ksh ${sp*totalProd*7}
    Your yearly income will be Ksh ${sp*totalProd*365}`
}
// console.log(incomeOverTime)
// console.log(calculateTotal)