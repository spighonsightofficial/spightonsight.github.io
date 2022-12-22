import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata{
          title
          owner
          description
          contactInfo {
            businessEmail
            businessPhone
          }
          socials {
            facebook
            instagram
            linkedin
          }
          musicPlatforms {
            spotify
            soundcloud
            beatstars
          }
          paymentMethod {
            paypal
          }
          location {
            city
            stateAbbreviation
            stateFullname
            stateZipCode
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
}
