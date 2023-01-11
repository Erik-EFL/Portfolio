import React from "react"
import { Link } from 'react-router-dom'

function link(link) {
  return (
    <Link to='/skills'>{link}</Link>
  )
}

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

export default {
  portuguese: {
    1: `Oi ${getPeriodOfDay()}! Como ja dito no nosso contato inicial eu sou o Erik, tenho ${handleCalculateAge('1995-04-11')} anos, sou guarulhense nascido e criado aqui no estado de São Paulo. `,
    2: 'Atualmente as coisas que mais gosto de fazer são ir à academia, estudar, programar, ouvir música e jogar de vez en quando.',
    3: ' Os meus maiores amores são minha família, sendo meus pais, minha irmã meu irmão postiço e meu gato Naruto',
    4: `Sempre fui uma pessoa cheia de sonhos, alguns ja realizados, como por exemplo a conquista do meu apartamento e algumas viagens, e outros que ainda vou realizar que vem desde os meus 12 anos e que vou contar um pouco aqui.`,
    5: `Essa época foi onde eu dei meu primeiro passo profissional graças às pessoas mais importantes da minha vida, meus pais. Eles me permitiram ter meu primeiro contato com algo que eu já gostava e me deram meu primeiro computador.`,
    6: `O meu primeiro contato veio uns anos antes com a descoberta do computador e da internet.`,
    7: `Eu havia visto o filme Matrix com meu primo e depois disso ele ligou a discagem do modem e quando escutei o famoso barulinho da discagem aquilo me fascinou e me deixou curioso sobre o funcionamento e foi a partir de aí que comecei a me interessar pelo assunto.`,
    8: `Alguns anos depois de receber o presente eu acabei fazendo um curso de WebDesigne e foi onde tive meu primeiro contato com programação, novamente graças aos meus pais onde aprendi HTML, CSS e na época também Flash... Saudades.`,
    9: `Após terminar o ensino médio eu diferente dos meus amigos ja sabia o que queria fazer da minha vida. Então veio meu primeiro desafio, conseguir pagar meus estudos, foi então que arrumei um emprego como aprendiz na produção de uma empresa que fabrica plásticos filme na função de embalador, um lugar que não era o que eu queria, mas que foi um passo necessário para chegar no segundo ponto de impacto da minha jornada, que foi o curso o de gestão em Tecnologia de informação.`,
    10: `Foi nesse ponto que descobri os vários caminhos que tem a tecnologia e como elas despertavam minha criatividade e a curiosidade.`,
    11: 'Após isso passei por outras escolas como a do querido Gustavo Guanabara onde aprendi sobre logica básica e algorítimo e depois a RocketSeat onde fiz alguns bootcamps e ainda faço até então.',
    12: 'A certeza sobre trabalhar na area veio ao trabalhar em uma empresa que respira tecnologia, na época ainda uma start up, mas que mostrou como esse mercado era aconchegante e valoroso.',
    13: `Após quase 6 anos de carreira na Clear Sale, resolvi tomar uma decisão difícil e sai, pois não trabalhava com o que queria. Então conheci a Trybe, uma escola de programação onde aprendi sobre as tecnologias utilizadas para construir um site do back ao front-end utilizando as melhores tecnologias do mercado, tecnologias essas que utilizei para a construção de mais de 30 projetos, onde trabalhei muito em equipe, pontuando uma boa comunicação, e trabalhando diversas soft skills além de aplicar todas a hard skills necessárias para o melhor resultado possível.`,
    14: `Algumas das habilidades estão descritas ${link('aqui')}`,
    15: `Caso queira conversar comigo estou a disposição minhas redes sociais estão la em cima!`,
  },
  english: {
    1: `Hi ${getPeriodOfDay()}! As already said in our initial contact I am Erik, I am ${handleCalculateAge('1995-04-11')} years old, I am a Guarulhos native born and raised here in the state of São Paulo.`,
    2: 'Currently the things I like to do the most are go to the gym, study, program, listen to music and play from time to time.',
    3: 'My biggest loves are my family, being my parents, my sister my stepbrother and my cat Naruto',
    4: `I have always been a person full of dreams, some already realized, such as the conquest of my apartment and some trips, and others that I will still realize that come since my 12 years and that I will tell a little here.`,
    5: `This time was where I took my first professional step thanks to the most important people in my life, my parents. They allowed me to have my first contact with something I already liked and gave me my first computer.`,
    6: `My first contact came a few years earlier with the discovery of the computer and the internet.`,
    7: `I had seen the Matrix movie with my cousin and then he turned on the modem dialing and when I heard the famous noise of the dialing it fascinated me and made me curious about the functioning and it was from there that I began to be interested in the subject.`,
    8: `A few years after receiving the gift I ended up doing a WebDesigne course and it was where I had my first contact with programming, again thanks to my parents where I learned HTML, CSS and at the time also Flash ... Miss.`,
    9: `After finishing high school I was different from my friends I already knew what I wanted to do with my life. So came my first challenge, to pay for my studies, it was then that I got a job as an apprentice in the production of a company that manufactures plastic film in the function of packer, a place that was not what I wanted, but that was a necessary step to reach the second point of impact of my journey, which was the course of management in Information Technology.`,
    10: `It was at this point that I discovered the various paths that technology has and how they awakened my creativity and curiosity.`,
    11: 'After that I went through other schools like the dear Gustavo Guanabara where I learned about basic logic and algorithm and then the RocketSeat where I did some boot camps and still do to this day.',
    12: 'The certainty about working in the area came when I worked in a company that breathes technology, at the time still a start up, but that showed how this market was cozy and valuable.',
    13: `After almost 6 years of career at Clear Sale, I decided to make a difficult decision and leave, because I didn't work with what I wanted. So I met Trybe, a programming school where I learned about the technologies used to build a site from back to front-end using the best technologies on the market, technologies that I used to build more than 30 projects, where I worked a lot in team, scoring good communication, and working several soft skills in addition to applying all the hard skills necessary for the best possible result.`,
    14: `Some of the skills are described ${link('here')}`,
    15: `If you want to talk to me I am available my social networks are up there!`,
  },
  spanish: {
    1: `Hola ${getPeriodOfDay()}! Como ya se dijo en nuestro primer contacto soy Erik, tengo ${handleCalculateAge('1995-04-11')} años, soy guarulhense nacido y criado aqui en el estado de São Paulo.`,
    2: 'Actualmente las cosas que más me gustan hacer son ir al gimnasio, estudiar, programar, escuchar música y jugar de vez en cuando.',
    3: 'Mis mayores amores son mi familia, siendo mis padres, mi hermana mi hermanastro y mi gato Naruto',
    4: `Siempre he sido una persona llena de sueños, algunos ya realizados, como la conquista de mi apartamento y algunas viajes, y otros que todavía realizaré que vienen desde mis 12 años y que les contare un poco aquí.`,
    5: `Ese tiempo fue donde tome mi primer paso profesional gracias a las personas más importantes de mi vida, mis padres. Me permitieron tener mi primer contacto con algo que ya me gustaba y me dieron mi primer computador.`,
    6: `Mi primer contacto vino unos años antes con el descubrimiento del computador e internet.`,
    7: `Había visto la película Matrix con mi primo y luego encendió el modem marcando y cuando escuché el famoso ruido del marcado me fascinó y me hizo curioso por el funcionamiento y fue de ahí que comencé a estar interesado en el tema.`,
    8: `Unos años después de recibir el regalo terminé haciendo un curso de WebDesigne y fue donde tuve mi primer contacto con la programación, nuevamente gracias a mis padres donde aprendí HTML, CSS y en ese momento también Flash... Extraño.`,
    9: `Después de terminar el colegio fui diferente a mis amigos ya sabía lo que quería hacer con mi vida. Así llegó mi primer reto, pagar mis estudios, fue entonces que conseguí un trabajo como aprendiz en la producción de una empresa que fabrica película plástica en la función de embolsador, un lugar que no era lo que quería, pero que era un paso necesario para llegar al segundo punto de impacto de mi viaje, que era el curso de gestión en Tecnología de la Información.`,
    10: `Fue en ese punto que descubrí los diversos caminos que tiene la tecnología y como me despertaron la creatividad y la curiosidad.`,
    11: 'Después de eso pasé por otras escuelas como el querido Gustavo Guanabara donde aprendí sobre lógica básica y algoritmo y luego la RocketSeat donde hice algunos boot camps y todavía lo hago hasta el día de hoy.',
    12: 'La certeza de trabajar en el área vino cuando trabajé en una empresa que respira tecnología, en ese momento aún una start up, pero que mostró como este mercado era acogedor y valioso.',
    13: `Después de casi 6 años de carrera en Clear Sale, decidí tomar una decisión difícil y dejar, porque no trabajaba con lo que quería. Así conocí a Trybe, una escuela de programación donde aprendí sobre las tecnologías usadas para construir un sitio desde back hasta front-end usando las mejores tecnologías del mercado, tecnologías que usé para construir más de 30 proyectos, donde trabajé mucho en equipo, marcando buena comunicación, y trabajando varias soft skills además de aplicar todas las hard skills necesarias para el mejor resultado posible.`,
    14: `Algunas de las habilidades son descritas ${link('aqui')}`,
    15: `Si quieres hablar conmigo estoy disponible mis redes sociales están arriba!`,
  },
}
