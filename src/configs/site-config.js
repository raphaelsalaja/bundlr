import React from 'react'
import {FaGithub, FaTwitter} from 'react-icons/fa'

const siteConfig = {
	copyright: `Copyright © ${new Date().getFullYear()} raf_ All Rights Reserved.`,
	author: {
		name: 'raf_',
		accounts: [
			{
				url: 'https://github.com/raf-underscore',
				label: 'Github Account',
				type: 'gray',
				icon: <FaGithub />,
			},
			{
				url: 'https://twitter.com/raf_underscore',
				label: 'Twitter Account',
				type: 'twitter',
				icon: <FaTwitter />,
			},
		],
	},
}

export default siteConfig
