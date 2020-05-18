import logoHeader from '../img/logo-header.png'
import iconContract from '../img/icone-contrato.png'
import iconNinja from '../img/icone-ninja.png'
import pictureMain from '../img/main.png'
import tipOne from '../img/home-dica-escolha-undraw.svg'
import tipTwo from '../img/home-dica-duvida-undraw.svg'
import tipThree from '../img/home-dica-pesquisa-undraw.svg'
import instagram from '../img/social-instagram.png'
import facebook from '../img/social-facebook.png'
import linkedin from '../img/social-linkedin.png'
import email from '../img/social-email.png'

import hiwPictureMain from '../img/logo-banner.png'

export const title = 'Future Ninjas'

export const headerLogo = {
  src: logoHeader,
  alt: title,
  ref: 'HOME_PAGE'
}

export const navItems = [
  {
    title: 'Como funciona?',
    ref: 'HOW_IT_WORKS_PAGE'
  },
  {
    title: 'Criar novo serviço',
    ref: 'CREATE_NEW_JOB_PAGE'
  },
  {
    title: 'Procurar serviços',
    ref: 'SEARCH_FOR_JOBS_PAGE'
  }
]

export const mainHeadingOne = 'Eles estão escondidos...'
export const mainHeadingTwo = 'Mas agora você sabe onde achar!'
export const mainParagraph = 'O talento certo, no momento certo.'

export const mainButtons = [
  {
    title: 'Contrate um ninja',
    ref: 'CREATE_NEW_JOB_PAGE',
    src: iconContract
  },
  {
    title: 'Seja um ninja',
    ref: 'SEARCH_FOR_JOBS_PAGE',
    src: iconNinja
  }
]

export const mainPicture = {
  src: pictureMain,
  alt: 'Future Ninjas: o talento certo, no momento certo'
}

export const tipsSectionTitle = 'Dicas para contratar'

export const cardTips = [
  {
    src: tipOne,
    title: 'O que é importante?',
    paragraph: 'Na hora de procurar, tenha em mente quais elementos são mais importantes para o seu serviço, assim você conseguirá focar a sua busca pelo profissional perfeito!'
  },
  {
    src: tipTwo,
    title: 'Esclareça as dúvidas!',
    paragraph: 'Não saia da negociação com dúvidas. Peça para o profissional esclarecê-las e registrar os detalhes que não estão bem claros.'
  },
  {
    src: tipThree,
    title: 'Pesquise!',
    paragraph: 'Antes de contratar um profissional, faça um levantamento para verificar as melhores condições e quais profissionais se adequam à sua demanda.'
  }
]

export const socialMedias = [
  {
    src: facebook,
    title: 'Facebook',
    ref: 'https://www.facebook.com/Labenu-388131481831991/'
  },
  {
    src: linkedin,
    title: 'LinkedIn',
    ref: 'https://www.linkedin.com/company/labenu/'
  },
  {
    src: instagram,
    title: 'Instagram',
    ref: 'https://www.instagram.com/_labenu/'
  },
  {
    src: email,
    title: 'oi@labenu.com.br',
    ref: 'mailto:oi@labenu.com.br'
  }
]

export const hiwMainPicture = {
  src: hiwPictureMain,
  alt: 'Future Ninjas: o talento certo, no momento certo'
}

export const dadosaaa = 'Sabemos o quanto é difícil achar um profissional de confiança para desenvolver serviços que não temos muito domínio. Assim nasce a Future Ninjas com a proposta de facilitar o encontro da tarefa e a resolução: você e um profissional ninja. Você não precisa se preocupar com nada: basta inscrever o seu serviço e um dos nossos ninjas entrará em contato em até 24hrs. O agendamento e pagamento será feito tudo dentro da nossa plataforma garantindo mais segurança para ambas as partes. E sempre ao final do serviço não se esqueça de avaliar seu ninja.'


export const formData = [
  {
    key: 'title',
    type: 'text',
    title: 'Título',
    initialState: '',
    autofocus: true
  },
  {
    key: 'description',
    type: 'textarea',
    title: 'Descrição',
    initialState: '',
    placeholder: 'Detalhe suas necessidades e elementos importantes para o serviço'
  },
  {
    key: 'value',
    type: 'number',
    initialState: '',
    min: '0',
    title: 'Remuneração'
  },
  {
    key: 'paymentMethods',
    type: 'checkbox',
    title: 'Métodos de Pagamento',
    initialState: '',
    options: [
      {
        key: 'creditCard',
        title: 'Cartão de Crédito'
      },
      {
        key: 'debitCard',
        title: 'Cartão de Débito'
      },
      {
        key: 'bitcoin',
        title: 'Bitcoin'
      },
      {
        key: 'shuriken',
        title: 'Shuriken (Crédito Ninja)'
      }
    ]
  },
  {
    key: 'date',
    type: 'date',
    title: 'Prazo Limite'
  },
  {
    type: 'button',
    title: 'Criar serviço'
  }
]

let form = {}

for (let i = 0; i < formData.length; i++) {
  switch (formData[i].type) {
    case 'text':
    case 'number':
    default:
      form[formData[i].key] = formData[i].initialState
      break
    case 'checkbox':
      for (let j = 0; j < formData[i].options.length; j++) {
        form[formData[i].key] = {
          ...form[formData[i].key], [formData[i].options[j].key]: false
        }
      }
  }
}

export const initialState = form

// export const initialState = formData.reduce(
//   (obj, item) => Object.assign(obj, { [item.key]: item.initialState }), {}
// )
// Faz a mesma coisa, mas usa métodos que ainda não conheço bem
// Edit: fazia a mesma coisa quando não tinha paymentMethods, que era um objeto com um array de objetos em uma propriedade
// Obs: Treinar JS é legal, mas tá me dando um nó na cabeça
// Agora você vê a diferença de usar for e map