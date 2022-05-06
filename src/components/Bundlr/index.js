import {extendTheme, Flex} from '@chakra-ui/react'
import {VStack} from '@chakra-ui/react'
import {Section} from '../Section'
import {Tab} from '../Tabs'
export const Bundlr = () => (
	<Section heading='Bundlr' description='v1.0' theme={extendTheme()}>
		<Flex bg='#1A202C' mx={8} mb={8} borderRadius={8} mt={0} w='fit-content'>
			<VStack spacing={4} p='8'>
				<Tab />
				<Tab />
				<Tab />
				<Tab />
			</VStack>
		</Flex>
	</Section>
)
