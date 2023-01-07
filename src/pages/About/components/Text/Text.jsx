import { Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import TextArea from './TextArea'

function Text() {
  const handleCalculateAge = (birthDate) => {
    const today = new Date()
    const birthDateDate = new Date(birthDate)
    let age = today.getFullYear() - birthDateDate.getFullYear()
    const month = today.getMonth() - birthDateDate.getMonth()

    if (month < 0 || (month === 0 && today.getDate() < birthDateDate.getDate())) {
      age -= 1
    }

    return age
  }

  function getPeriodOfDay() {
    // Obtém a data e hora atuais
    const currentDate = new Date();

    // Obtém a hora atual em formato de 24 horas
    const currentHour = currentDate.getHours();

    // Verifica o período do dia com base na hora atual
    if (currentHour >= 6 && currentHour < 12) {
      return "bom dia";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "boa tarde";
    } else if (currentHour >= 18 && currentHour < 24) {
      return "boa noite";
    } else {
      return "boa madrugada";
    }
  }


  return (
    <TextArea>
      <p>Oi {getPeriodOfDay()}! Como ja dito no nosso contato inicial eu sou o Erik, tenho {handleCalculateAge('1995-04-11')} anos, sou guarulhense nascido e criado aqui mesmo no estado de São Paulo. </p>
      <p>Atualmente as coisas que mais gosto de fazer são ir à academia, estudar, programar e ouvir música. Os meus maiores amores são minha família e meu gato Naruto</p>
      <p>Sempre fui uma pessoa cheia de sonhos, alguns ja realizados, como por exemplo meu apartamento
        algumas viagens, e outros que vem desde os meus 12 anos que vou contar um pouco aqui.</p>
      <p>Essa época foi onde eu dei meu primeiro passo profissional graças às pessoas mais importantes da minha vida, meus pais. Eles me permitiram ter meu primeiro contato com algo que eu já gostava e me deram meu primeiro computador. O meu primeiro contato veio uns anos antes com a descoberta do computados hahaha e da internet.</p>
      <p>Eu havia visto o filme Matrix com meu primo e depois disso ele ligou a discagem do modem e somente aquilo me fascinou e me deixou curioso sobre o funcionamento daquilo foi a partir de aí que comecei a me interessar pelo assunto.</p>
      <p>Alguns anos depois de receber esse presente dos meus pais eu acabei fazendo um curso de WebDesigne e foi onde tive meu primeiro contato com programação, novamente graças aos meus pais onde aprendi HTML, CSS e na época também Flash... Saudades.</p>
      <p>Após terminar o ensino médio eu diferente dos meus amigos ja sabia o que queria fazer da minha vida e nesse momento veio meu primeiro desafio, conseguir pagar meus estudos então comecei a trabalhar como aprendiz na produção de uma empresa na função de embalador, um lugar que não era o que eu queria, mas que foi um passo necessário para chegar no segundo ponto de impacto da minha jornada, que foi o curso o de gestão em Tecnologia de informação.
      </p>
      <p>Foi nesse ponto que descobri as várias nuances da tecnologia e como elas despertavam minha criatividade e a curiosidade.</p>
      <p>Após isso passei por outras escolas como a do querido Gustavo Guanabara e a RocketSeat.</p>
      <p>A certeza sobre trabalhar na area veio ao trabalhar em uma empresa que respira tecnologia, na época ainda uma start up, mas que mostrou como esse mercado era aconchegante e valoroso.</p>
      <p>Após 6 anos de carreira na Clear Sale, resolvi tomar a descidão de sair e começar estudar programação na Trybe, onde aprendi sobre as tecnologias utilizadas para construir um site do back ao front-end utilizando as melhores tecnologias do mercado, com mais de 30 projetos desenvolvidos, projetos esses onde trabalhei muito em equipe, pontuando uma boa comunicação, trabalhando diversas soft skills e aplicando todas a hard skills necessárias para o melhor resultado possível.
      Algumas delas descritas <Link to='/skills'>aqui</Link>.</p>
      <p>Caso queira conversar comigo estou a disposição minhas redes sociais estão la em cima!</p>
    </TextArea>
  )
}

export default Text
