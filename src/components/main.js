import {extendTheme, Flex} from '@chakra-ui/react'
import {VStack} from '@chakra-ui/react'
import {Section} from './section'
import {TabCard} from './tabCard'
import {colors} from '../theme'
import {appInfo} from '../data/data'

function MainApp() {
	return (
		<Section heading={appInfo.name} description={appInfo.version} theme={extendTheme()}>
			<Flex bg={colors.tertiary} mx={8} mb={8} borderRadius={8} mt={0} w='fit-content'>
				<VStack spacing={4} p='8'>
					<TabCard
						name='Visual Studio Code - Code Editing. Redefined'
						image='assets/images/vscode.png'
						link='https://code.visualstudio.com'
						description='https://code.visualstudio.com'
					/>
					<TabCard
						name='Aliquam vel mattis turpis. Nulla sed lectus orci. Phasellus et ligula ipsum. Mauris a aliquam lectus. Fusce purus erat, aliquet ut egestas nec, auctor et leo. Nulla ut congue urna. Etiam nibh lorem, aliquam vitae dictum sit amet, gravida ac risus. Curabitur efficitur tincidunt ligula, scelerisque vehicula lorem vehicula a. In hac habitasse platea dictumst. Vivamus mattis, ipsum non rhoncus posuere, diam dolor rutrum mi, at suscipit felis dui at ligula. Nullam nec turpis lorem.'
						image='assets/images/skills/javascript.png'
						link='JavaScript.com'
						description='https://www.javascript.com'
					/>
					<TabCard
						name='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at enim finibus nulla dignissim consectetur quis sit amet augue. Quisque vel finibus enim. Cras fermentum erat ac ullamcorper tempus. Sed in nisi urna. Vivamus aliquam at mi eget scelerisque. Sed sollicitudin tempor sodales. Praesent eu mollis ligula, sed hendrerit arcu. Phasellus vitae interdum ipsum. Praesent tristique turpis est, nec faucibus risus placerat eu. Nam a arcu vulputate, interdum est et, vulputate turpis. Ut eros dolor, fringilla vitae enim sed, scelerisque feugiat est. Quisque vel suscipit ipsum, vel tempor nisi. Mauris vestibulum nec dolor vel fringilla. Integer porttitor facilisis arcu suscipit luctus. Cras sit amet consequat purus, ut tincidunt leo.'
						image='assets/images/skills/ruby.png'
						link='https://chakra-ui.com'
						description='https://chakra-ui.com'
					/>
				</VStack>
			</Flex>
		</Section>
	)
}

export default MainApp
