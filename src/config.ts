interface LinksProps {
  app: string;
  socials: {
    twitter: string
    discord: string
    telegram: string
    email: string
  }
}
export const Links: LinksProps = {
  app: '',
  socials: {
    twitter: 'https://twitter.com/Fantasy__Games',
    discord: 'http://discord.gg/7Gb8Uv8gM6',
    telegram: 'https://t.me/Fantasy_Games_Chat ',
    email: "mailto:contact@fantasygames.me"
  }
}

export const navigation: { name: string; id: string }[] = [
  {
    name: 'About Us',
    id: 'about',
  },
  {
    name: 'Our Vision',
    id: 'vision',
  },
  {
    name: 'Product',
    id: 'product',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
]