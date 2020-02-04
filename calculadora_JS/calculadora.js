
window.onload = function(){
//entrada de datos
const numeros =[]
var oper = ""
const $add = document.getElementById('add')
const $subtract = document.getElementById('subs')
const $multiply = document.getElementById('multiply')
const $divide = document.getElementById('divide')
const $input_num = document.getElementById('numbers')
const $result = document.getElementById('result')
const $clear = document.getElementById('btn_clear')
//guardar numeros
function ingresarNumeros(num){
  if(num === ""){
    alert('ingrese un numero')
  }
  else{
    numeros.push(num)
    console.log(numeros)
    
  }

}
//evento suma
$add.addEventListener('click',()=>{
  ingresarNumeros($input_num.value)
  oper ="suma"
  $input_num.value = ""

})
//evento resta
$subtract.addEventListener('click',()=>{
  ingresarNumeros($input_num.value)
  oper ="resta"
  $input_num.value = ""


})
//evento multiplicacion
$multiply.addEventListener('click',()=>{
  ingresarNumeros($input_num.value)
  oper ="multiplicacion"
  $input_num.value = ""


})
//evento dividir
$divide.addEventListener('click',()=>{
  ingresarNumeros($input_num.value)
  oper ="division"
  $input_num.value = ""
})
//evento resultado
$result.addEventListener('click',()=>{
  ingresarNumeros($input_num.value)
  $input_num.value = ""
  $input_num.value = resultado(oper,numeros) 
  numeros.length = 0
})

//evento limpiar
$clear.addEventListener('click',()=>{
  $input_num.value =""
})

//funcion  resultado
function resultado(ope, numeros){
  var total = 0
  switch(ope){
    case 'suma':{
      for(var num of numeros){
      total += parseFloat(num)
    }
    return total
    }
    case 'resta':{
      total = parseFloat( numeros[0])* 2
      for(num  of  numeros){
         total -= parseFloat(num)
      }
      return total
    }
    case 'multiplicacion':{
      total = 1
      for(var num of numeros){
        total*=  parseFloat(num)
      }
      return total
    }
    case 'division':{
     total = parseFloat( numeros[0])* 2
      for(var num of numeros){
        total = total /  parseFloat(num)
      }
      return total
    }

  }
}

}
