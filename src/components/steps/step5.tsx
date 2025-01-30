import Custom from "@/styled/layout/custom";
import { SPACING } from "@/themes/settings";
import { Box, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ItemOption from "../item/option";
import { useQuote } from "@/contexts/quote";
import Row from "../layout/row";

const Step5 = ({ onNext }) => {
    const theme = useTheme();
    const isMD = useMediaQuery(theme.breakpoints.up('md'));
    const isLG = useMediaQuery(theme.breakpoints.up('lg'));

    const { quote, setQuote } = useQuote();

    const onToggleSelection = (value) => {
        if (!quote.services) {
            quote.services = [];
        }

        const selectedServices = quote.services.includes(value)
            ? quote.services.filter(service => service !== value)
            : [...quote.services, value];

        setQuote({
            ...quote,
            services: selectedServices,
        });
    };

    return (
        <Custom>
            <Stack spacing={SPACING.xl}>
                <Typography variant="h3" textAlign={"center"}>
                    What cleaning services do you require?
                </Typography>

                <Box>
                    <Stack spacing={SPACING.sm}>
                        <Row direction={!isMD ? 'column' : 'row'} spacing={SPACING.sm} justifyContent={"center"} alignItems={"center"}>
                            <ItemOption
                                value={"Furniture"}
                                onToggle={onToggleSelection}
                                selected={quote.services?.includes("Furniture")}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Furniture
                                </Typography>
                            </ItemOption>

                            <ItemOption
                                value={"Floors"}
                                onToggle={onToggleSelection}
                                selected={quote.services?.includes("Floors")}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Floors
                                </Typography>
                            </ItemOption>

                            <ItemOption
                                value={"Windows"}
                                onToggle={onToggleSelection}
                                selected={quote.services?.includes("Windows")}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Windows
                                </Typography>
                            </ItemOption>
                        </Row>

                        <Row direction={!isMD ? 'column' : 'row'} spacing={SPACING.sm} justifyContent={"center"} alignItems={"center"}>
                            <ItemOption
                                value={"Kitchen"}
                                onToggle={onToggleSelection}
                                selected={quote.services?.includes("Kitchen")}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Kitchen
                                </Typography>
                            </ItemOption>

                            <ItemOption
                                value={"Bathrooms"}
                                onToggle={onToggleSelection}
                                selected={quote.services?.includes("Bathrooms")}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Bathrooms
                                </Typography>
                            </ItemOption>

                            <ItemOption
                                value={"Rubbish"}
                                onToggle={onToggleSelection}
                                selected={quote.services?.includes("Rubbish")}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Rubbish
                                </Typography>
                            </ItemOption>
                        </Row>
                    </Stack>


                    <Custom paddingTop={SPACING.lg} sx={{ cursor: 'pointer' }}>
                        <Typography onClick={onNext} variant="h5" textAlign={"center"} sx={{ textDecoration: 'underline' }}>
                            Not sure.
                        </Typography>
                    </Custom>

                    {/* <Grid container spacing={SPACING.md}>
                        <Grid item xs={12} md={4}>
                            <ItemOption
                                value={"Furniture"}
                                onToggle={onToggleSelection}
                                selected={quote.services?.includes("Furniture")}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Furniture
                                </Typography>
                            </ItemOption>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <ItemOption
                                value={"Floors"}
                                onToggle={onToggleSelection}
                                selected={quote.services?.includes("Floors")}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Floors
                                </Typography>
                            </ItemOption>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <ItemOption
                                value={"Windows"}
                                onToggle={onToggleSelection}
                                selected={quote.services?.includes("Windows")}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Windows
                                </Typography>
                            </ItemOption>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <ItemOption
                                value={"Kitchen"}
                                onToggle={onToggleSelection}
                                selected={quote.services?.includes("Kitchen")}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Kitchen
                                </Typography>
                            </ItemOption>
                        </Grid>


                        <Grid item xs={12} md={4}>
                            <ItemOption
                                value={"Bathrooms"}
                                onToggle={onToggleSelection}
                                selected={quote.services?.includes("Bathrooms")}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Bathrooms
                                </Typography>
                            </ItemOption>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <ItemOption
                                value={"Rubbish"}
                                onToggle={onToggleSelection}
                                selected={quote.services?.includes("Rubbish")}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Rubbish
                                </Typography>
                            </ItemOption>
                        </Grid>

                        <Grid item xs={12}>
                            <Custom paddingTop={SPACING.lg} sx={{ cursor: 'pointer' }}>
                                <Typography onClick={onNext} variant="h5" textAlign={"center"} sx={{ textDecoration: 'underline' }}>
                                    Not sure.
                                </Typography>
                            </Custom>
                        </Grid>
                    </Grid> */}
                </Box>
            </Stack>
        </Custom>
    );
};

export default Step5;