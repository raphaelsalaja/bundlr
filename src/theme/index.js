import {extendTheme} from '@chakra-ui/react'
import styles from './styles'
import Button from './components/Button'
import Center from './components/Center'
import Box from './components/Box'

const theme = {
	styles,
	colors: {
		primary: '#171923',
		secondary: '#1A202C',
		tertiary: '#212',
		main_text: '#fff',
		secondary_Text: '#818181',
	},
	components: {
		Button,
		Box,
		Center,
	},
	initialColorMode: 'light',
	useCustomProperties: true,
	useSystemColorMode: false,
}

export default extendTheme(theme)
