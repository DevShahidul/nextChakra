import { ColorModeScript } from "@chakra-ui/react"
import { GoogleFonts } from 'next-google-fonts'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends NextDocument {
    render() {
        function handleState() {
            window.splitbee.track("Button Click")
        }

        return (
            <Html lang="en">
                <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" />
                <Head>
                    {/* <title>Demo</title> */}
                    {/* <script async src="https://cdn.splitbee.io/sb.js"></script> */}
                </Head>
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}