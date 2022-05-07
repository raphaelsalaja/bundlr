import {extendTheme, Flex} from '@chakra-ui/react'
import {VStack} from '@chakra-ui/react'
import {Section} from '../Section'
import {TabCard} from '../TabCard'

export const Bundlr = () => (
	<Section heading='Bundlr' description='v1.0' theme={extendTheme()}>
		<Flex bg='#1A202C' mx={8} mb={8} borderRadius={8} mt={0} w='fit-content'>
			<VStack spacing={4} p='8'>
				<TabCard name='youtube' image='../../assets/vscode.png' description='www.youtube.com' />
			</VStack>
		</Flex>
	</Section>
)
