import {ChakraProvider, Flex} from '@chakra-ui/react'
import {Bundlr} from './components/Bundlr'
import theme from './theme'

function App() {
	return (
		<div
			style={{
				// set the image to the image in the assets folder
				backgroundImage: `url(${require('./assets/background.png')})`,
			}}
		>
			<ChakraProvider theme={theme}>
				<Flex direction='column' align='center' justify='center' height='100vh'>
					<Bundlr />
				</Flex>
			</ChakraProvider>
		</div>
	)
}

export default App
