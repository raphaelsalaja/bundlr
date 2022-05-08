import {ChakraProvider} from '@chakra-ui/react'
import Layout from './layouts/layout'
import theme from './theme'

function App() {
	return (
		<ChakraProvider theme={theme} resetCSS={true}>
			<Layout />
		</ChakraProvider>
	)
}

export default App
