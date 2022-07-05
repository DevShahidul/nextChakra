import { ChevronDownIcon, ExternalLinkIcon, SmallAddIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Flex, Heading, Image, Stack, Text, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import { BsFlag } from 'react-icons/bs'

import Container from '../components/Container'

export default function Index() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  const color = {
      light: 'black',
      dark: 'white'
  }
  const HeaderImg = '/images/header_img.jpg';
  return (
    <Container>
      <Head>
        <title>Home - Demo</title>
      </Head>
      <Stack
        as="section"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth={{xl: '1536px'}}
        // px={2}
      >
        <Flex flexDir={['column', 'column', 'column', 'column', 'row']}>
          <Flex flexDir="column" flex={{xs: '1 1 100%', xl: '1 1 50%'}}>
            <Flex minH={{lg:'75vh'}} flex="1 1 0%" flexDir="column" justifyContent="center">
            <Heading as='h1' textAlign="center" fontWeight="inherit" fontSize={['2rem', '2rem', '2rem', '2.5rem', '4.5rem']} letterSpacing="-.025em" py='1.75rem'><Flex flexDir="column" color={color[colorMode]}>SERUM</Flex>
              <Flex color="rgba(161,159,157,1)">is bringing the speed and convenience of centralized exchanges to DeFi while remaining fully trustless and transparent.</Flex></Heading>
            </Flex>
            <Text px={{sm: '20px', xl: '5rem'}} textAlign={['center', 'center', 'center', 'center', 'left']} fontSize={{lg: '1.5rem'}}>Serum is a protocol for decentralized exchanges that brings unprecedented speed and low transaction costs to decentralized finance. It is built on Solana and is completely permissionless.</Text>
          </Flex>
          <Flex flex={{xs: '1 1 100%', xl: '1 1 47%'}} ml={[0, 0, 0, 0, "3%"]} pt={[8, 8, 8, 8, 0]}>
            <Box>
              <Image src={HeaderImg} />
            </Box>
          </Flex>
        </Flex>
      </Stack>
      <Stack 
        as="section"
        mt={32}
        justifyContent="center"
        flexDir='row'>
          <Flex maxWidth={{xl: '56rem'}} pt={2} borderTop='1px solid rgba(0, 0, 0, 0.3)' flex="1 1 100%" flexDir='column'>
            <Flex justifyContent="space-between" mb={10}>
              <Heading as='h2'>Proposals</Heading>
            </Flex>
            <Flex justifyContent="space-between" pb={3}>
              <Heading as='h4' fontSize={'1rem'} fontWeight='medium'>(6 proposals)</Heading>
              <Flex alignItems='center'>
                <Box mr={4}>
                  <Button disabled variant='outline' borderRadius='25px' leftIcon={<SmallAddIcon border='1px solid gray' borderRadius='50%' />}>New</Button>
                </Box>
                <Box>
                  <Button variant='outline' rightIcon={<ChevronDownIcon />}>Filter</Button>
                </Box>
              </Flex>
            </Flex>
            <Flex flexDir='column'>
              <NextLink href='/proposals' passHref>
                <Flex justifyContent="space-between" py={10} borderBottom="1px solid rgba(229,231,235,1)">
                  <Flex justifyContent="space-between">
                    <Box mr={3} pt={2}>
                      <BsFlag />
                    </Box>
                    <Heading as='h3' fontSize={'1.25rem'} lineHeight="1.75rem">Mango Markets Grant</Heading>
                  </Flex>
                  <Flex>
                    <Flex pb={2}>
                      <Heading as='h2' fontSize={'3.75rem'}>2.3M</Heading>
                      <Divider height='70%' alignSelf='center' width='2px' borderLeftWidth='2px' borderColor='currentColor' borderRadius='0px' mx={4} transform='rotate(15deg)' />
                      <Heading as='h2' fontSize={'3.75rem'}>0</Heading>
                    </Flex>
                    <Box pl={3}>
                      <ExternalLinkIcon />
                    </Box>
                  </Flex>
                </Flex>
              </NextLink>
              <NextLink href='/proposals' passHref>
                <Flex justifyContent="space-between" py={10}>
                  <Flex justifyContent="space-between">
                    <Box mr={3} pt={2}>
                      <BsFlag />
                    </Box>
                    <Heading as='h3' fontSize={'1.25rem'} lineHeight="1.75rem">Mango Markets Grant</Heading>
                  </Flex>
                  <Flex>
                    <Flex pb={2}>
                      <Heading as='h2' fontSize={'3.75rem'}>2.3M</Heading>
                      <Divider height='70%' alignSelf='center' width='2px' borderLeftWidth='2px' borderColor='currentColor' borderRadius='0px' mx={4} transform='rotate(15deg)' />
                      <Heading as='h2' fontSize={'3.75rem'}>0</Heading>
                    </Flex>
                    <Box pl={3}>
                      <ExternalLinkIcon />
                    </Box>
                  </Flex>
                </Flex>
              </NextLink>
            </Flex>
            <Flex mb={24} pt={2}>
              <Button variant='outline' borderRadius='0px' borderColor='black' fontSize='0.875rem' fontWeight='normal'>View all proposals</Button>
            </Flex>
          </Flex>
      </Stack>
    </Container>
  )
}
