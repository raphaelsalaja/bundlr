import {extendTheme, Flex, VStack, Link} from '@chakra-ui/react'
import {Section} from '../Section'

export const Bundlr = () => (
	<Section heading='Bundlr' description='v1.0' theme={extendTheme()}>
		<Flex bg='#1A202C' mx={8} mb={8} borderRadius={8} mt={0}>
			<VStack p={4}>
				<Link href='https://chakra-ui.com' isExternal>
					Chakra Design system
				</Link>
			</VStack>
		</Flex>
	</Section>
)
