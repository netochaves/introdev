require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitleAlt: `IntroDev`,
    speakersData: [
      {
        name: 'Samuel Flores',
        talkTitle: 'Introdução à Regex',
        talkDescription: '',
        imageSrc: 'samuel-flores.jpg'
      },
      {
        name: 'Rodrigo Ulisses',
        talkTitle: 'Precificando projetos',
        talkDescription: '',
        imageSrc: 'rodrigo-ulisses.jpeg'
      },
      {
        name: 'Neto Chaves',
        talkTitle: 'Open source: O que é esse mundo e como entrar nele',
        talkDescription: '',
        imageSrc: 'neto-chaves.jpeg'
      },
      {
        name: 'Rafael Belo',
        talkTitle: 'Builders - O must-have de todo dev front-end',
        talkDescription: '',
        imageSrc: 'rafael-belo.png'
      }
    ]
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `Cara`,
        description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
