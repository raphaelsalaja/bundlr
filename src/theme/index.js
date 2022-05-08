import {extendTheme} from '@chakra-ui/react'

const theme = {
	colors: {
		primary: '#000000',
		secondary: '#161618',
		tertiary: '#212124',
		primaryText: '#ffffff',
		secondaryText: '#818181',
	},

	initialColorMode: 'light',
	useCustomProperties: true,
	useSystemColorMode: false,
}

export default extendTheme(theme)

export const colors = {
	primary: '#000000',
	secondary: '#161618',
	tertiary: '#212124',
	primaryText: '#ffffff',
	secondaryText: '#818181',
}
