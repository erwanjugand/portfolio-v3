import { IconDefinition } from '@fortawesome/fontawesome-common-types'
import {
  faHouse as farHouse,
  faBoxFull as farBoxFull,
  faCircleCheck as farCircleCheck,
  faEnvelope as farEnvelope,
  faEnvelopeOpenText as farEnvelopeOpenText,
  faLightbulbOn as farLightbulbOn,
  faLightbulbSlash as farLightbulbSlash,
  faPenRuler as farPenRuler,
  faPhone as farPhone,
  faMapLocationDot as farMapLocationDot,
  faSparkles as farSparkles,
  faStar as farStar,
  faCircleXmark as farCircleXmark
} from '@fortawesome/pro-light-svg-icons'

import {
  faCaretDown as fasCaretDown,
  faStar as fasStar
} from '@fortawesome/pro-solid-svg-icons'
import {
  faGithub as fabGithub,
  faLinkedin as fabLinkedin
} from '@fortawesome/free-brands-svg-icons'
import { Icon, Icons } from 'models'

const formatIcon = (faIcon: IconDefinition): Icon => {
  return {
    path: faIcon.icon[4],
    width: faIcon.icon[0],
    height: faIcon.icon[1]
  }
}

export const icons: Icons = {
  custom: {
    afterEffects: {
      path: 'M0 0v40h40V0H0zm36.5 36.5h-33v-33h33v33zM11.6 24.1h5.3l1.7 4.7h3.2l-5.4-16.6h-3.9L7.1 28.8h3.1l1.4-4.7zm1.8-6.4c.3-1 .5-2.1.8-3.1h.1c.3 1.9 1.5 5.3 2.1 7.2h-4.3l1.3-4.1zM27.7 29c1.7 0 3.1-.3 4.2-.7l-.4-2.1c-2.2 1-6.9 1.1-7-2.5l8-.1c.4-3.1-.6-7.2-5.1-7.2-8 0-7.8 13.2.3 12.6zm-.4-10.5c2 0 2.5 1.9 2.5 3h-5.3c.1-1.3.9-3 2.8-3z',
      width: 40,
      height: 40
    },
    atom: {
      path: 'M34 15.1c-3.7-1.5-8.5-2.5-13.7-2.8-.8-.1-1.6-.1-2.4-.1 3.9-4.7 8-7.9 10.7-7.9.6 0 1 .1 1.3.4 1.2.8 1.5 3 .9 6-.1.4.2.8.6.9.4.1.8-.2.9-.6.8-3.8.2-6.4-1.5-7.5-.6-.4-1.4-.6-2.2-.6-3.4.1-8.2 3.8-12.6 9.5-1.9.1-3.7.2-5.4.5-.2-.9-.4-1.8-.5-2.6-.4-3.5.1-5.8 1.5-6.5.2-.1.5-.2.8-.2 1.1-.1 2.7.6 4.5 2.1.4.3.8.2 1.1-.1.3-.4.2-.8-.1-1.1-2.1-1.8-4-2.6-5.6-2.5-.6 0-1 0-1.4.3-2 1-2.8 3.9-2.2 8 .1.8.3 1.8.5 2.7-5.6 1.1-9 3.3-9.1 6-.1 2 1.4 3.8 4.4 5.3.4.2.8.1 1.1-.4.2-.4.1-.8-.4-1.1-2.4-1.3-3.7-2.6-3.7-3.9.1-1.8 3-3.7 7.9-4.6.4 1.7 1.1 3.4 1.8 5.1-4 7.4-5.7 15-2.2 17.2.6.4 1.3.6 2 .6 1.5 0 3.4-.8 5.6-2.3.4-.2.4-.7.2-1.1-.2-.4-.7-.4-1.1-.2-2.6 1.8-4.7 2.5-5.9 1.7-2-1.3-1.5-7 2-14.1.4.7.7 1.5 1.1 2.2 2.5 4.9 5.3 8.9 8.2 11.5 2.3 2.2 4.4 3.2 6.2 3.2.6 0 1.1-.1 1.6-.4 1.9-1 2.7-3.7 2.3-7.6-.4-3.7-1.8-8.2-3.9-12.6-.2-.4-.6-.6-1-.4s-.6.6-.4 1c4.5 9.3 4.8 16.9 2.2 18.2-2.6 1.3-9-3.9-13.9-13.6-.6-1.1-1.1-2.1-1.5-3.2.6-1 1.1-2 1.8-3 .6-1 1.3-2 2-2.9h.6c.9 0 1.9 0 2.9.1 5.1.3 9.7 1.2 13.2 2.7 3.2 1.3 5 3 4.9 4.5-.1 1.3-1.5 2.5-4 3.5-.4.1-.6.6-.4 1 .1.3.4.5.7.5.1 0 .2 0 .3-.1 3.2-1.2 4.9-2.9 5-4.9.3-2.1-1.8-4.2-5.7-5.8zm-20.6.7c-.4.7-.8 1.4-1.3 2-.5-1.3-.8-2.5-1.2-3.7 1.2-.2 2.5-.3 3.9-.4-.5.7-1 1.4-1.4 2.1zM20 18c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z',
      width: 40,
      height: 40
    },
    bash: {
      path: 'M20 0C9 0 0 8.9 0 20s9 20 20 20 20-9 20-20S31 0 20 0zm4.5 6.9c.7-1.3 2.4-1.7 3.7-1 1.3.7 1.7 2.4 1 3.7-.7 1.3-2.4 1.7-3.7 1-1.3-.7-1.7-2.4-1-3.7zM6.4 22.6c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7 2.7 1.2 2.7 2.7-1.2 2.7-2.7 2.7zm2.3.3c.8-.7 1.4-1.8 1.4-2.9s-.6-2.2-1.4-2.9c.7-2.8 2.5-5.1 4.8-6.8l2 3.2c-2 1.4-3.3 3.7-3.3 6.3s1.3 4.9 3.3 6.3l-2 3.3c-2.3-1.4-4-3.8-4.8-6.5zM28.1 34c-1.3.7-2.9.3-3.7-1-.7-1.3-.3-2.9 1-3.7 1.3-.7 2.9-.3 3.7 1 .7 1.4.3 3-1 3.7zm0-5.8c-1-.4-2.2-.4-3.2.3-1 .6-1.6 1.5-1.8 2.7-2.8.8-5.7.5-8.3-.8l1.8-3.3c2.3 1.1 4.9 1 7.2-.4 2.3-1.3 3.7-3.6 3.9-6.1l3.8.1c-.1 2.8-1.3 5.5-3.4 7.5zm-.3-8.9c-.2-2.5-1.6-4.7-3.9-6.1-2.3-1.3-4.9-1.3-7.2-.4l-1.8-3.3c2.5-1.3 5.4-1.5 8.3-.8.1 1.1.8 2 1.8 2.7 1 .6 2.2.6 3.2.3 2 2 3.2 4.7 3.5 7.5l-3.9.1z',
      width: 40,
      height: 40
    },
    easyphp: {
      path: 'M35.1 22.5V0H0v35.2h22.5V25H9.9v-2.5h25.2zM9.9 9.9h15v2.6h-15V9.9zM25 25h15v15H25V25z',
      width: 40,
      height: 40
    },
    filezilla: {
      path: 'M0 0v40h40V0H0zm34.2 28.3l.9 4.8c-4.7 2.7-7 2-9.5 1.3s-3.9-1.7-7.1 0l-1.7.8-3.4-3.9 13-11.5H12.6l-3 12.3h-5l6.3-27.5h19.4l-1 4.7H14.8l-1.4 5.6h22l-1.1 4.7-10.5 8.8c3.6.3 5.3 3.6 10.4-.1z',
      width: 40,
      height: 40
    },
    git: {
      path: 'M39.2 18L22 .8c-1.1-1.1-2.9-1.1-4 0l-3.7 3.7 4.6 4.6c.3-.1.6-.1 1-.1 1.7 0 3 1.3 3 3 0 .4-.1.7-.1 1l4.6 4.6c.3-.1.6-.1 1-.1 1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3c0-.4.1-.7.1-1l-4.3-4.3v11c1 .5 1.7 1.6 1.7 2.8 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-1.2.7-2.3 1.7-2.8V14.6c-1-.5-1.7-1.6-1.7-2.8 0-.4.1-.7.1-1l-4.6-4.6L.8 18c-1.1 1.1-1.1 2.9 0 4L18 39.2c1.1 1.1 2.9 1.1 4 0L39.2 22c1.1-1.1 1.1-2.9 0-4z',
      width: 40,
      height: 40
    },
    illustrator: {
      path: 'M36.5 3.5v32.9h-33V3.5h33M40 0H0v40h40V0zM14.6 24l-1.4 4.7h-3.1l5.3-16.6h3.9l5.4 16.6h-3.2L19.9 24h-5.3zm4.8-2.3l-1.3-4.1c-.4-1-.6-2.1-.8-3.1h-.1c-.3 1-.5 2.1-.8 3.1l-1.3 4.1h4.3zm9.4-8.4c0 .9-.6 1.6-1.8 1.6-1 0-1.7-.7-1.7-1.6 0-.9.7-1.6 1.7-1.6 1.2 0 1.8.7 1.8 1.6zm-3.3 15.4v-12h3v12h-3z',
      width: 40,
      height: 40
    },
    indesign: {
      path: 'M36.5 3.5v32.9h-33V3.5h33M40 0H0v40h40V0zM15 12.1v16.6h-3V12.1h3zm13.2-.9v14.2c0 1.3.1 2.5.1 3.4h-2.8l-.1-2h-.1c-.7 1.3-2.2 2.2-4 2.2-2.9 0-5.1-2.5-5.1-6.1 0-4 2.5-6.4 5.4-6.4 1.6 0 2.8.7 3.4 1.6h.1v-6.8l3.1-.1zm-3.1 10.5c0-.2 0-.6-.1-.8-.3-1.2-1.3-2.1-2.6-2.1-2 0-3 1.8-3 4s1.1 3.8 3 3.8c1.3 0 2.3-.8 2.6-2.1.1-.3.1-.6.1-.9v-1.9z',
      width: 40,
      height: 40
    },
    photoshop: {
      path: 'M36.5 3.5v32.9h-33V3.5h33M40 0H0v40h40V0zM10.6 12.3c1.1-.2 2.6-.4 4.7-.4 2.2 0 3.9.5 4.9 1.3s1.6 2.1 1.6 3.7-.5 2.9-1.4 3.8c-1.2 1.2-3.1 1.8-5.3 1.8-.6 0-1.1 0-1.5-.1v6.3h-3V12.3zm3 7.7c.4.1.8.1 1.5.1 2.3 0 3.7-1.1 3.7-3 0-1.8-1.3-2.8-3.4-2.8-.8 0-1.4.1-1.8.1V20zm8.8 6c.7.4 2 .8 3.1.8 1.3 0 1.9-.6 1.9-1.3 0-.8-.5-1.3-2-1.8-2.3-.8-3.3-2.1-3.3-3.5 0-2.1 1.8-3.8 4.5-3.8 1.3 0 2.5.4 3.2.7l-.6 2.1c-.5-.3-1.5-.7-2.5-.7S25 19 25 19.8s.6 1.1 2.1 1.7c2.2.8 3.2 1.9 3.2 3.7 0 2.2-1.7 3.7-4.9 3.7-1.5 0-2.8-.4-3.7-.8l.7-2.1z',
      width: 40,
      height: 40
    },
    phpStorm: {
      path: 'M0 0v40h40V0H0zm3.7 5h4.1c2.4 0 3.8 1.4 3.8 3.5 0 2.3-1.8 3.5-4 3.5H5.9v3H3.7V5zm15 30h-15v-2.5h15V35zm1.5-22.9c0 2-1.6 3.1-3.7 3.1-1.6 0-3.1-.6-4.2-1.6l1.3-1.6c.8.8 1.9 1.2 3 1.2.9 0 1.5-.4 1.5-.9 0-.6-.4-.8-2-1.3-2-.5-3.3-1.1-3.3-3.1 0-1.8 1.5-3 3.5-3 1.3 0 2.7.4 3.7 1.3l-1.1 1.7c-.8-.6-1.7-.9-2.6-1-.8 0-1.3.4-1.3.8 0 .6.4.8 2.2 1.3 1.8.6 3 1.3 3 3.1zM9.4 8.5c0-1-.7-1.6-1.8-1.6H5.9v3h1.8c1 .1 1.7-.5 1.7-1.4z',
      width: 40,
      height: 40
    },
    premierePro: {
      path: 'M36.5 3.5v32.9h-33V3.5h33M40 0H0v40h40V0zM11.2 12.2c1.1-.2 2.6-.4 4.7-.4 2.2 0 3.9.5 4.9 1.3s1.6 2.1 1.6 3.7-.5 2.9-1.4 3.8c-1.3 1.3-3.2 1.8-5.3 1.8-.6 0-1.1 0-1.5-.1v6.3h-3V12.2zm3.1 7.7c.4.1.8.1 1.5.1 2.3 0 3.7-1.1 3.7-3 0-1.8-1.3-2.8-3.4-2.8-.8 0-1.4.1-1.8.1v5.6zm9.1.6c0-1.6 0-2.8-.1-3.9h2.6l.1 2.3h.1c.6-1.7 2-2.5 3.3-2.5.3 0 .5 0 .7.1v2.9c-.2-.1-.5-.1-.9-.1-1.5 0-2.5.9-2.8 2.3-.1.3-.1.6-.1.9v6.2h-3c.1.1.1-8.2.1-8.2z',
      width: 40,
      height: 40
    },
    visualStudioCode: {
      path: 'M19.5 5.9L10.3 15l-5.5-4.2-2.3.8 5.6 5.6-5.6 5.6 2.3.8 5.5-4.2 9.2 9.1L25 26V8.2l-5.5-2.3zm0 6.4v9.5L13.2 17l6.3-4.7zM30 0v34.4L0 29.9 30 40l10-4.2V4.2L30 0z',
      width: 40,
      height: 40
    },
    easterEgg: {
      path: 'M508.5 135L259.4 15c-2.1-1-4.1-1-6.2 0L4.1 135C1 136 0 138.1 0 141.2v202c0 2.1 1 5.1 4.1 6.2L80 385.2c4.1 2.1 9.2-1 9.2-6.2v-4.1c0-5.1 5.1-8.2 9.2-6.2l16.4 7.2c2.1 1 4.1 3.1 4.1 6.2v46.1c0 2.1 1 5.1 4.1 6.2l35.9 16.4c4.1 2.1 9.2-1 9.2-6.2v-33.8c0-4.1 3.1-6.2 6.2-6.2 4.1 0 6.2 3.1 6.2 6.2V458c0 2.1 1 5.1 4.1 6.2l27.7 13.3c4.1 2.1 9.2-1 9.2-6.2v-42c0-4.1 3.1-6.2 6.2-6.2h2.1c4.1 0 6.2 3.1 6.2 6.2v56.4c0 3.1 2.1 5.1 4.1 6.2l13.3 5.1c2.1 1 3.1 1 5.1 0l13.3-5.1c2.1-1 4.1-3.1 4.1-6.2v-56.4c0-4.1 3.1-6.2 6.2-6.2h2.1c4.1 0 6.2 3.1 6.2 6.2v42c0 5.1 5.1 8.2 9.2 6.2l27.7-13.3c2.1-1 4.1-3.1 4.1-6.2v-47.2c0-4.1 3.1-6.2 6.2-6.2s6.2 3.1 6.2 6.2v33.8c0 5.1 5.1 8.2 9.2 6.2l35.9-16.4c2.1-1 4.1-3.1 4.1-6.2v-46.1c0-3.1 1-5.1 4.1-6.2l16.4-7.2c4.1-2.1 9.2 1 9.2 6.2v4.1c0 5.1 5.1 8.2 9.2 6.2l75.9-35.9c2.1-1 4.1-3.1 4.1-6.2v-202c.7-3-.3-5.1-3.4-6.1zm-368 6.2l18.5-14.4c3.1-2.1 7.2 0 7.2 3.1v27.7c0 4.1-4.1 6.2-7.2 3.1l-18.5-14.4c-2.1 1-2.1-3.1 0-5.1zm-80-8.2c0-4.1 4.1-6.2 7.2-3.1l18.5 13.3c2.1 2.1 2.1 5.1 0 7.2l-18.5 14.4c-3.1 2.1-7.2 0-7.2-3.1V133zM44.1 252.9c0 4.1-4.1 6.2-7.2 3.1l-18.5-14.4c-2.1-2.1-2.1-5.1 0-7.2L36.9 220c3.1-2.1 7.2 0 7.2 3.1v29.8zm43 84.1l-16.4 13.3c-3.1 2.1-7.2 0-7.2-3.1v-25.6c0-4.1 4.1-6.2 7.2-3.1l16.4 13.3c3.1.1 3.1 3.1 0 5.2zm79 10.3c0 4.1-4.1 6.2-7.2 4.1L139.4 338c-2.1-2.1-2.1-5.1 0-7.2l19.5-13.3c3.1-2.1 7.2 0 7.2 4.1v25.7zm9.2-103.6c-3.1 46.1-32.8 81-66.6 78.9s-58.4-41-55.4-87.1c3.1-46.1 32.8-81 66.6-78.9s58.5 41 55.4 87.1zm33.9 2l-18.5 14.4c-3.1 2.1-7.2 0-7.2-3.1v-27.7c0-4.1 4.1-6.2 7.2-3.1l18.5 14.4c3 0 3 3.1 0 5.1zM272.7 376c-4.1 0-9.2-3.1-16.4-3.1-7.2 0-12.3 3.1-16.4 3.1s-13.3-1-13.3-11.3 20.5-21.5 29.7-22.6c9.2 0 29.7 12.3 29.7 22.6 1.1 10.2-8.1 11.3-13.3 11.3zm57.4-120c0 4.1-4.1 6.2-7.2 3.1l-18.5-13.3c-2.1-2.1-2.1-5.1 0-7.2l18.5-14.4c3.1-2.1 7.2 0 7.2 3.1V256zm97.4-112.8l18.5-14.4c3.1-2.1 7.2 0 7.2 3.1v27.7c0 4.1-4.1 6.2-7.2 3.1l-18.5-14.4c-2 0-2-3 0-5.1zm-78.9-12.3c0-4.1 4.1-6.2 7.2-3.1l18.5 14.4c2.1 2.1 2.1 5.1 0 7.2l-18.5 14.4c-3.1 2.1-7.2 0-7.2-3.1v-29.8zM374.2 337l-19.5 13.3c-3.1 2.1-7.2 0-7.2-4.1v-27.7c0-4.1 4.1-6.2 7.2-4.1l19.5 13.3c3.1 4.2 3.1 7.2 0 9.3zm75.9 9.2c0 4.1-4.1 6.2-7.2 3.1L426.5 336c-2.1-2.1-2.1-5.1 0-7.2l16.4-13.3c3.1-2.1 7.2 0 7.2 3.1v27.6zM405 322.6c-33.8 2.1-63.6-32.8-66.6-78.9s21.5-85.1 55.4-87.1c33.8-2.1 63.6 32.8 66.6 78.9 3 45.1-21.6 85.1-55.4 87.1zm90.2-79.9L476.8 256c-3.1 2.1-7.2 0-7.2-3.1v-27.7c0-4.1 4.1-6.2 7.2-3.1l18.5 14.4c2 1 2 4.1-.1 6.2z',
      width: 512,
      height: 512
    }
  },

  brand: {
    github: formatIcon(fabGithub),
    linkedin: formatIcon(fabLinkedin)
  },

  light: {
    boxFull: formatIcon(farBoxFull),
    circleCheck: formatIcon(farCircleCheck),
    envelope: formatIcon(farEnvelope),
    envelopeOpenText: formatIcon(farEnvelopeOpenText),
    house: formatIcon(farHouse),
    lightbulbOn: formatIcon(farLightbulbOn),
    lightbulbSlash: formatIcon(farLightbulbSlash),
    penRuler: formatIcon(farPenRuler),
    phone: formatIcon(farPhone),
    mapLocationDot: formatIcon(farMapLocationDot),
    sparkles: formatIcon(farSparkles),
    star: formatIcon(farStar),
    circleXmark: formatIcon(farCircleXmark)
  },

  solid: {
    caretDown: formatIcon(fasCaretDown),
    star: formatIcon(fasStar)
  }
}
