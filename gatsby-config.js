/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: 'https://spightonsight.github.io',
    title: 'Spight on Sight | Home Studio',
    owner: 'Jim Spight',
    description: 'Spight on Sight is an indie studio focused on mixing, producing, and tracking. Spight on Sight aims to help artists discover their sound.',
    contactInfo: {
      businessPhone: '(999)999-9999',
      businessEmail: 'spightonsight@gmail.com',
    },
    location: {
      city: 'Greater Nashville Area',
      stateAbbreviation: 'TN',
      stateFullname: 'Tennessee',
      stateZipCode: '37042',
    },
    socials: {
      linkedin: 'https://www.linkedin.com/in/james-spight-49557b182/',
      instagram: 'https://www.instagram.com/spight_on_sight/',
      facebook: 'https://www.facebook.com/people/Spight-on-Sight-home-studio/100088257025249/',
    },
    musicPlatforms: {
      spotify: 'https://www.spotify.com',
      soundcloud: 'https://www.soundcloud.com',
      beatstars: 'https://www.beatstars.com/spight1001',
    },
    paymentMethod: {
      paypal: 'https://www.paypal.com',
    }
  },
  plugins: [
    '@chakra-ui/gatsby-plugin',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/icons/android-chrome-512x512.png',
      }
    }
  ],
}