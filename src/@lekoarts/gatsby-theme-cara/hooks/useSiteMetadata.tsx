import { graphql, useStaticQuery } from "gatsby"

type Props = {
  site: {
    siteMetadata: {
      [key: string]: string
    }
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteHeadline
          siteUrl
          siteDescription
          siteLanguage
          siteImage
          author
          speakersData {
            name
            imageSrc
            talkTitle
          }
          talksData {
            id
            title
            description
            time
            speaker
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
