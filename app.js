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
const totalProduction ={
    milkPrice = 45,
    monthS = ["Jan", "Feb", "Mar","April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ]
};
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
daysInMonth( month,year, 2021) {
    return (new Date(year, month, 0).getDate());
}