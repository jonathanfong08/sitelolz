module.exports = {
  showStats: false, // Booleen | true / false
	website: {
		protocol: 'https://', // https:// or http://
		domain: 'something.com', // website link without protocol ex. bot-website.tejas1794.repl.co
		port: 3000,
    cookieSecret: 'ipprecise' // Cookie secret | charaters used store client data
	},
  bot: {
    name: 'IP-Precise', // Bot Name
    token: '', // Bot token if showing Stats
    logo: 'https://media.discordapp.net/attachments/952310789077868598/1065419782729519135/BotLogo.png', //Bot Logo used in embeds and favicon
    description: 'The most advanced IP intelligence FREE bot.', //description of your bot used in embed and website
    support: '', // support server url of your bot
    invite: 'https://discord.com/api/oauth2/authorize?client_id=1063317788900458538&permissions=8&scope=bot', // invite link of your bot
    botlist: '', // Voting website Ex. top.gg
    feature1: {
      main: 'Quick Reponse', // Feature 1 Heading
      description: 'All under 500 MS or less.' // Feature 1 Description
    },
    feature2: {
      main: 'Detailed', // Feature 2 Heading
      description: 'Provides every information about an IP address.' // Feature 1 Description
    },
    feature3: {
      main: 'FREE', // Feature 3 Heading
      description: 'All of this is free :)' // Feature 1 Description
    }
  },
  img: {
    img1: 'https://media.discordapp.net/attachments/1052398167099981906/1065420532079677561/image.png', // help cmd image of your bot ex. https://cdn.discordapp.com/attachments/868823136538333184/889852973713354823/Capture.PNG
    img2: 'https://media.discordapp.net/attachments/1052398167099981906/1065419977169043519/image.png?width=574&height=662' // most famous command image of your bot Ex. https://cdn.discordapp.com/attachments/868823136538333184/889853204697849926/Capture.PNG
  }
  
};
