import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
}

const breakpoints = createBreakpoints({
    xs: "575px",
    sm: "767px",
    md: "991px",
    lg: "1024px",
    xl: "1200px",
})

const overrides = {
    ...chakraTheme,
    fonts,
    breakpoints,
    fontWeights: {
        normal: 400,
        medium: 600,
        bold: 700
    },
    fontSize: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
    }
}

const customTheme = extendTheme(overrides);

export default customTheme;