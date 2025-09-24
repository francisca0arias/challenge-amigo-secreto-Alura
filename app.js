// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];// creamos la variable 

function agregarAmigo(){   // creamos la funcion para agregar los nombres en la consola y este debe coincidir en el Index 

  const input = document.getElementById("amigo");
  const nombreAmigo =input.value.trim(); 

     if(nombreAmigo ===""){ 
        alert("Por favor, inserte un nombre");
      return;
    }
    
      if(listaAmigos.includes(nombreAmigo)){
        alert("El nombre se encuntra ya en la lista");
        input.select();
        return; 
    } 
    listaAmigos.push(nombreAmigo);
    console.log(listaAmigos);
    input.value =""; 
    mostrarLista(); 
}

function mostrarLista() {  // creamos la funcion mostrar lista para mostrarla en la pantalla 
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; 
        for(let i = 0; i < listaAmigos.length; i++){
            const li = document.createElement("li")
            li.textContent = listaAmigos[i]; 
            lista.appendChild(li); 
        }
        
}

       function sortearAmigo() { //
  
       if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre.");
          return;
          }

  //  Generar un índice aleatorio
        const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

  //  Obtener el nombre sorteado
        const amigoSorteado = listaAmigos[indiceAleatorio];

  // Mostrar el resultado en pantalla
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `🎉 Tu amigo secreto es: ${amigoSorteado}`;
      
}
       
     





  

      