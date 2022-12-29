let inputEl =  document.getElementById("input_el");
let convertBtn = document.getElementById("convert_btn");
let meterAndFoot = document.getElementById("result_meter");
let literAndGolon = document.getElementById("result_liter");
let poundAndKilo = document.getElementById("result_pound");


convertBtn.addEventListener("click" , function(){
    let number =  Number(inputEl .value );
    let feet  =number * 3.280 ;
    let meter  =number *  0.304 ;
    meterAndFoot.innerText = `${number} meters =  ${feet}  feet  |  ${number}  feet =  ${meter } meters `;
    
    let gallons = number* 0.264 ;
    let liter  = number* 3.787 ;
    literAndGolon.innerText = `${number} liters = ${gallons} galons | ${number} galons = ${liter} liters`

    let pound =number * 2.204;
    let kilo = number * 0.453; 
    poundAndKilo.innerText = `${number} kilos = ${pound} ponds | ${number} pounds = ${kilo} kilos`
})
