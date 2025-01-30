import { GlobalStyles, useTheme } from "@mui/material";
import { TYPOGRAPHY } from "./settings";

const CustomGlobalStyles = () => {
    const theme = useTheme();

    return (
        <GlobalStyles
            styles={{
                'body, html': {
                    width: '100%',
                    maxWidth: '100%',
                    minWidth: '100%',
                    touchAction: 'auto',
                    opacity: 1
                },
                '*' : {
                    textUnderlineOffset: '3px',
                },
                html: {
                    scrollBehavior: 'smooth',
                    WebkitTapHighlightColor: 'transparent',
                    fontSize: '15px',
                    [theme.breakpoints.up('sm')]: {
                        fontSize: '16px',
                    },
                    [theme.breakpoints.up('md')]: {
                        fontSize: '18px',
                    }
                },
                body: {
                    overflow: 'hidden overlay',
                },
                a: {
                    color: 'inherit',
                    textDecoration: 'none',
                    fontWeight: TYPOGRAPHY.bold
                },
                b: {
                    fontWeight: 600
                },
                '*::-webkit-scrollbar': {
                    width: '7px',
                    height: '7px'
                },
                '*::-webkit-scrollbar-track': {
                    backgroundColor: theme.palette.light.light,
                },
                '*::-webkit-scrollbar-thumb': {
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: '10px'
                },
                '.MuiBox-root': {
                    lineHeight: 0
                }
            }}
        />
    );
};

export default CustomGlobalStyles;

