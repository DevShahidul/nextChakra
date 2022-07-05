import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'

const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const iconColor = {
        light: 'black',
        dark: 'white'
    }

    const navHoverText = {
        light: 'white',
        dark: 'black',
    }

    return (
        <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            color={iconColor[colorMode]}
            borderRadius='0px'
            backgroundColor={navHoverText[colorMode]} 
            _hover={{ backgroundColor: iconColor[colorMode], color: navHoverText[colorMode]  }} 
            fontSize="100%"
            fontWeight="normal"
            minWidth={[8]}
            h={[2, 8, 9]}
        />
    )
}

export default DarkModeSwitch