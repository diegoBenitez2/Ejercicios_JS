
const $l0 = document.getElementById('l0')
const $l1 = document.getElementById('l1')
const $l2 = document.getElementById('l2')
const $l3 = document.getElementById('l3')
const $l4 = document.getElementById('l4')
const $l5 = document.getElementById('l5')
const $l6 = document.getElementById('l6')
const $l7 = document.getElementById('l7')
const $l8 = document.getElementById('l8')
const $l9 = document.getElementById('l9')
const $l10 = document.getElementById('l10')
const $l11 = document.getElementById('l11')
const letra = document.getElementById('letra')
const btnReiniciar = document.getElementById('btnReiniciar')
const btn_letra = document.getElementById('btn_letra')  
const $live = document.getElementById('vidas')
$live.value = 3
// $l0.addEventListener('click',(ev)=>{
//   console.log(ev)
// })
class ahorcado {
  constructor(){
    this.espacios = [$l0, $l1, $l2, $l3, $l4, $l5, $l6, $l7, $l8, $l9, $l10, $l11]
    this.palabras ={
      1:'casa',
      2:'zapato',
      3:'carruaje',
      4:'laberintos',
      5:'ferrocariles'
    }
    this.validarLetra = this.validarLetra.bind(this)
    this.siguienteNivel = this.siguienteNivel.bind(this)
    this.inicializar()
    this.agregarEventos()
    this.ULTIMO_NIVEL = 5
  }
  inicializar(){
    this.inicio = 4
    this.final = 7
    this.live = 3
    $live.value = this.live
    this.nivel = 1
    letra.value = ""
    this.casillas_llenas = 0
    this.mostrarEspacios(this.inicio, this.final)
  }
  mostrarEspacios(inicio,final){
    for(let i = inicio; i <= final; i++ ){
      if(!this.espacios[i].classList.contains('verEpacios')){
          this.espacios[i].classList.add('verEspacios')
      }

    }
  }
  validarLetra(){
    this.cantidad_letras = this.palabras[this.nivel].length
    this.letra = letra.value
    if(this.palabras[this.nivel].indexOf(this.letra) === -1 ){
        this.live -= 1
        if(this.live === 0){
          this.perdioElJuego()
        }
        else{
          $live.value = this.live
          letra.value = ""
          swal.fire({
            icon:'error',
            title:'Incorrecto',
            showConfirmButton:false,
            timer:1000
          })
        }
          

    }
    else{
      this.mostrarLetra(this.cantidad_letras, this.letra)
      if(this.casillas_llenas === this.cantidad_letras){
        if(this.nivel === this.ULTIMO_NIVEL){
            this.ganoElJuego()
            this.inicializar()
        }
        else{
        this.inicio = this.inicio - 1
        this.final = this.final + 1
        this.nivel++
        swal.fire({
          icon:'success',
          title:'Haz subido al nivel:'+ this.nivel,
          showConfirmButton: false,
          timer: 1500
        })
        this.siguienteNivel()

        }

      }
      letra.value = ""
    } 

      
    
  }
  mostrarLetra(cantidadLetras,letra){
    for(let i = 0; i < cantidadLetras; i++) {
      if(letra === this.palabras[this.nivel].charAt(i)){
        this.espacios[this.inicio + i].value = letra
        this.casillas_llenas += 1
      }
    }
  }
  siguienteNivel(){
    this.casillas_llenas = 0
    this.limpiarEspacios()
    this.mostrarEspacios(this.inicio, this.final)
  }
  agregarEventos(){
    btn_letra.addEventListener('click',this.validarLetra)
  }
  limpiarEspacios(){
    for(let i = 0; i <  this.espacios.length; i++){
      this.espacios[i].value = ""
    }
  }
  ganoElJuego(){
    swal.fire({
      title:'GANASTE!',
      width: 600,
      imageUrl:'./img/winner.jpg',
      imageWidth: 600,
      imageHeight: 300,
      backdrop:`
       rgb(252,238,192,.9)
      no-repeat`,
      showConfirmButton: false,
      timer: 2000,
    })
    this.limpiarEspacios()
  }
  perdioElJuego(){
    swal.fire({
      imageUrl: './img/gameOver.jpg',
      imageWidth: 600,
      imageHeight: 300,
      background:'rgba(0,0,0,.9)',
      backdrop:`
        rgba(0,0,0,.9)`,
        showConfirmButton: false,
        timer: 2000
    })
    this.inicializar()
  }

}
window.juego = new ahorcado()

 function soloLetras(e) {
   key = e.keyCode || e.which
    tecla = String.fromCharCode(key).toLowerCase()
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz"
    especiales = [8, 37, 39, 46]

    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial){
        return false;
    }

}
 

