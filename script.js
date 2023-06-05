const preguntas = [
  {
    id: 0,
    pregunta: "¿Cuál es el resultado de '2' + 2 en JavaScript?",
    opciones: ["22", "4", "Error"],
    correcta: 0,
    respuesta: false
  },
  {
    id: 1,
    pregunta: "¿Cuál es el resultado de typeof typeof 42 en JavaScript?",
    opciones: ["'number'", "'string'", "'undefined'"],
    correcta: 1,
    respuesta: false
  },
  {
    id: 2,
    pregunta: "¿Cuál es el resultado de NaN === NaN en JavaScript?",
    opciones: ["true", "false", "TypeError"],
    correcta: 1,
    respuesta: false
  },
  {
    id: 3,
    pregunta: "¿Cuál es el resultado de [10] === [10] en JavaScript?",
    opciones: ["true", "false", "TypeError"],
    correcta: 1,
    respuesta: false
  }
]
const verResultado = () =>{
app.innerHTML = ""
const tabla = document.createElement("table")
preguntas.forEach((pregunta)=>{
  const fila = document.createElement("tr")
  fila.innerHTML = `
                  <td>Pregunta: ${pregunta.pregunta}</td>
                  <td>Respuesta: ${pregunta.opciones[pregunta.correcta]}</td> 
                  <td>:${pregunta.respuesta ? "correcta" : "incorrecta"}</td> `
  tabla.append(fila)
                  
})
app.append(tabla)

}
const evaluarRespuesta =  (id) =>{

  const formularioPregunta = document.querySelector("#" + "formularioPregunta" + id)
  formularioPregunta.addEventListener("submit",(e)=>{
      e.preventDefault()
      const opciones = document.getElementsByName('opciones')
      for (let i = 0; i < opciones.length; i++) {
          if (opciones[i].checked) {
              if(opciones[i].value == preguntas[id].correcta){
                  preguntas[id].respuesta = true
              }
              break
          }
      }
      id++
     if(id == preguntas.length ){
      verResultado()
      return
     }
     verPregunta(preguntas[id]) 
  })
}
const verPregunta = ({id,pregunta,opciones}) =>{
  const formularioPregunta = document.createElement("form")
  formularioPregunta.className = "formularioPregunta"
  formularioPregunta.id = "formularioPregunta" + id
  const titulo = document.createElement("h3")
  titulo.innerText = pregunta
  formularioPregunta.append(titulo)
  opciones.forEach((opcion,index) => {
      const input = document.createElement("input")
      input.type = "radio"
      input.name = "opciones"
      input.value = index
      const label = document.createElement("label")
      label.innerText = opcion
      formularioPregunta.append(input,label)
  });
  const btn = document.createElement("button")
  btn.innerText = "Siguiente"
  btn.type="submit"
  formularioPregunta.append(btn)
  const app = document.querySelector("#app")
  app.innerHTML = ""
  app.append(formularioPregunta)
  evaluarRespuesta(id)
}
verPregunta(preguntas[0])