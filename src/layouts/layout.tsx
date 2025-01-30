import { useEffect, useState } from "react";
import getMainTheme from "@/themes/main";
import { CssBaseline, ThemeProvider } from "@mui/material";
import CustomGlobalStyles from "@/themes/global";
import { PageContainer } from "@/styled/layout/page";

const Layout = ({ children }) => {
    const [theme] = useState(getMainTheme());

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, [])

    return (
        <>
            {theme && (
                <ThemeProvider theme={theme}>
                    <CssBaseline />

                    <CustomGlobalStyles />

                    {loaded && (
                        <PageContainer>
                            {children}
                        </PageContainer>
                    )}
                </ThemeProvider>
            )}
        </>
    );
};

export default Layout;