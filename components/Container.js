import {
    Flex, useColorMode
} from '@chakra-ui/react';


import Header from './Header';

const Container = ({ children }) => {
    const { colorMode } = useColorMode()

    const bgColor = {
        light: 'white',
        dark: '#171717'
    }

    const color = {
        light: 'black',
        dark: 'white'
    }
// console.log(colorMode);
    return (
        <>
            <Header />
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0, 4, 4]}
                mt={[4, 6, 6]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Container