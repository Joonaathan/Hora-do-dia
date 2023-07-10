function carregar(){
   let msg = window.document.getElementById ('msg')
   let img = window.document.getElementById ('imagem')
   let data = new Date()
   let hora = data.getHours()
   let minutos = data.getMinutes();
   //var hora = 8
   msg.innerHTML =`Agora São ${hora} Horas e ${minutos} Minutos.`
   if (hora >= 0 && hora < 12) { msg.innerHTML += ' <pre> Boa Dia!'
      // BOM DIA!
       img.src = 'img/manha1.jpg'
       document.body.style.background = '#ff9966'
   } else if (hora >= 12 && hora <= 18) {msg.innerHTML += ' <pre> Boa Tarde!'
      // BOA TARDE!
      img.src = 'img/tarde.jpg'
      document.body.style.background ='#fc6a03'
   } else {  msg.innerHTML += '<pre> Boa Noite!'
       // BOA NOITE!
       img.src = 'img/noite.jpg' 
       document.body.style.background ='noite.jpg'
       document.body.style.backgroundImage = 'linear-gradient(180deg, #614C06 0%, #FAA13A 200%)'
    }

}
