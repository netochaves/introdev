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
            talkTitle
            talkDescription
            imageSrc
          }
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
