const chave = '777fd6c175f16899b669ab9b22be7638'
const url = `https://api.openweathermap.org/data/2.5/weather?q=São Paulo&lang=pt_br&appid=${chave}&units=metric`

const obterTemp = () =>{

  fetch(url)
        .then(resposta =>{
          // console.log(resposta)
          return resposta.json()
        })
          .then(dados =>{
            console.log(dados.main.temp)
          })
          .catch(erro => {
            console.log(erro)
          })
 }