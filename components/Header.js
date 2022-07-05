import {
    Box,
    Button,
    Flex,
    Img,
    useColorMode
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import { useEffect, useRef, useState } from 'react';

import DarkModeSwitch from '../components/DarkModeSwitch';
import { LogoBlack, LogoWhite } from './icons';

const Header = () => {
    const { colorMode } = useColorMode()
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef();

    const bgColor = {
        light: 'white',
        dark: '#171717'
    }

    const color = {
        light: 'black',
        dark: 'white'
    }

    const navHoverColor = {
        light: 'white',
        dark: 'black',
    }

    const navBorderColor = {
        light: 'rgba(229,231,235, 1)',
        dark: 'rgba(255,255,255, 1)'
    }

    const StickyNav = styled(Flex)`
        position: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
        `
    useEffect(() => {
        const navHeight = navRef.current.clientHeight;
        // console.log(navRef.current, navHeight);
        const passHeader = () => window.scrollY > navHeight ? setIsScrolled(true) : setIsScrolled(false)
        window.addEventListener('scroll', passHeader)
        return () => {
            window.removeEventListener('scroll', passHeader)
        }
    }, []);

  return (
    <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        // maxWidth="800px"
        minWidth="356px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        borderBottomWidth='1px' 
        borderColor={navBorderColor[colorMode]}
        fontSize="10px"
        letterSpacing="-0.025em"
        textTransform="uppercase"
        fontWeight={500}
        ref={navRef}
        color={color[colorMode]}
        // px={[2, 6, 6]}
        // py={2}
        // mt={8}
        // mb={[0, 0, 8]}
        // mx="auto"
    >
        <Flex flex="1 1 0%" justifyContent="flex-start">
            <NextLink href="/about" passHref>
                <Button as="a" variant="ghost" borderRadius='0px' p={[1, 2, 3]} h={[2, 8, 9]} lineHeight='inherit' _hover={{ backgroundColor: color[colorMode], color: navHoverColor[colorMode]  }} borderRightWidth='1px' borderColor={navBorderColor[colorMode]} fontSize="100%">
                    About
                </Button>
            </NextLink>
            <NextLink href="/careers" passHref>
                <Button as="a" variant="ghost" borderRadius='0px' p={[1, 2, 3]} h={[2, 8, 9]} lineHeight='inherit' _hover={{ backgroundColor: color[colorMode], color: navHoverColor[colorMode]  }} borderRightWidth='1px' borderColor={navBorderColor[colorMode]} fontSize="100%">
                    Careers
                </Button>
            </NextLink>
            <NextLink href="/contact" passHref>
                <Button as="a" variant="ghost" borderRadius='0px' p={[1, 2, 3]} h={[2, 8, 9]} lineHeight='inherit' borderRightWidth='1px' borderColor={navBorderColor[colorMode]} _hover={{ backgroundColor: color[colorMode], color: navHoverColor[colorMode]  }} fontSize="100%">
                    Contact
                </Button>
            </NextLink>
            <NextLink href="/learn" passHref>
                <Button as="a" variant="ghost" borderRadius='0px' p={[1, 2, 3]} h={[2, 8, 9]} lineHeight='inherit' borderRightWidth='1px' borderColor={navBorderColor[colorMode]} _hover={{ backgroundColor: color[colorMode], color: navHoverColor[colorMode]  }} fontSize="100%">
                    Learn
                </Button>
            </NextLink>
        </Flex>
        <Flex flex="1 1 0%" justifyContent="center">
            <Flex h='36px' w={32} position="relative" transition="all 0.8s ease" top={isScrolled ? '0px' : '10px'} transform={isScrolled ? 'scale(0.5) translateZ(0px)' : 'none'}>
                <Box w="100%" position="absolute" px={[2, 3, 3]} pb="10px" backgroundColor={navHoverColor[colorMode]}>
                    <NextLink href="/">
                        {colorMode === 'light' ? <LogoBlack /> : <LogoWhite />}
                    </NextLink>
                </Box>
            </Flex>
        </Flex>
        <Flex flex="1 1 0%" justifyContent="flex-end">
            <NextLink href="/explore" passHref>
                <Button as="a" variant="ghost" borderRadius='0px' p={[1, 2, 3]} h={[2, 8, 9]} lineHeight='inherit' _hover={{ backgroundColor: color[colorMode], color: navHoverColor[colorMode]  }} borderLeftWidth='1px' borderColor={navBorderColor[colorMode]} fontSize="100%">
                    Explore
                </Button>
            </NextLink>
            <NextLink href="/create-movement" passHref>
                <Button as="a" variant="ghost" borderRadius='0px' p={[1, 2, 3]} h={[2, 8, 9]} lineHeight='inherit' _hover={{ backgroundColor: color[colorMode], color: navHoverColor[colorMode]  }} borderLeftWidth='1px' borderRightWidth='1px' borderColor={navBorderColor[colorMode]} fontSize="100%">
                    Create a Movement
                </Button>
            </NextLink>
            <DarkModeSwitch />
            <NextLink href="/connect-phantom" passHref>
                <Button as="a" leftIcon={<Img width="1.25rem" src='https://phantom.app/img/logo.png' />}  variant="ghost" borderRadius='0px' p={[1, 2, 3]} h={[2, 8, 9]} lineHeight='inherit' _hover={{ backgroundColor: color[colorMode], color: navHoverColor[colorMode]  }} borderLeftWidth='1px' borderColor={navBorderColor[colorMode]} fontSize="100%">
                    Connect Phantom
                </Button>
            </NextLink>
            <Button variant="ghost" borderRadius='0px' p={[2]} h={[2, 8, 9]} lineHeight='inherit' _hover={{ backgroundColor: color[colorMode], color: navHoverColor[colorMode]  }} borderLeftWidth='1px' borderColor={navBorderColor[colorMode]} fontSize="1.25rem" fontWeight="normal" minW={[6]}>
                +
            </Button>
        </Flex>
    </StickyNav>
  )
}
export default Header;