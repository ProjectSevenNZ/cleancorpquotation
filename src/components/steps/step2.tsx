import Custom from "@/styled/layout/custom";
import { SPACING, TYPOGRAPHY } from "@/themes/settings";
import { Box, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ItemOption from "../item/option";
import { useQuote } from "@/contexts/quote";
import { useEffect, useState } from "react";
import Row from "../layout/row";

const Step2 = ({ onNext }) => {
    const theme = useTheme();
    const isMD = useMediaQuery(theme.breakpoints.up('md'));
    const isLG = useMediaQuery(theme.breakpoints.up('lg'));

    const { quote, setQuote } = useQuote();

    const [selected, setSelected] = useState(false);

    const onToggleSelection = (value) => {
        setSelected(false);

        setQuote({
            ...quote,
            size: value,
        });

        setSelected(true);
    };

    useEffect(() => {
        if (selected) {
            setTimeout(() => {
                onNext();
            }, 100);
        }
    }, [selected])

    return (
        <Custom>
            <Stack spacing={SPACING.xl}>
                <Typography variant="h3" textAlign={"center"}>
                    {quote.industry == 'Offices' && (
                        <>What’s the size of your office space?</>
                    )}

                    {quote.industry == 'Commercial' && (
                        <>What’s the size of your commercial space?</>
                    )}

                    {quote.industry == 'Education' && (
                        <>What’s the size of your education facility?</>
                    )}

                    {quote.industry == 'Hospitality' && (
                        <>What’s the size of your hospitality space?</>
                    )}

                    {quote.industry == 'Retail' && (
                        <>What’s the size of your retail space?</>
                    )}

                    {quote.industry == 'Health' && (
                        <>What’s the size of your healthcare facility?</>
                    )}
                </Typography>

                <Box>
                    <Row direction={!isMD ? 'column' : 'row'} spacing={SPACING.sm} justifyContent={"center"} alignItems={"center"}>
                        <ItemOption
                            value={"Small"}
                            onToggle={onToggleSelection}
                            selected={quote.size === "Small"}
                        >
                            <Stack spacing={isMD ? SPACING.sm : 0}>
                                <Typography variant="h4" textAlign={"center"}>
                                    Small
                                </Typography>

                                <Typography sx={{ opacity: 0.8, fontWeight: TYPOGRAPHY.light }} variant="h6" textAlign={"center"}>
                                    {quote.industry == 'Offices' && (
                                        <>250m²</>
                                    )}

                                    {quote.industry == 'Commercial' && (
                                        <>250m²</>
                                    )}

                                    {quote.industry == 'Education' && (
                                        <>Early Learning Centre</>
                                    )}

                                    {quote.industry == 'Hospitality' && (
                                        <>Cafe</>
                                    )}

                                    {quote.industry == 'Retail' && (
                                        <>250m²</>
                                    )}

                                    {quote.industry == 'Health' && (
                                        <>250m²</>
                                    )}
                                </Typography>
                            </Stack>
                        </ItemOption>

                        <ItemOption
                            value={"Medium"}
                            onToggle={onToggleSelection}
                            selected={quote.size === "Medium"}
                        >
                            <Stack spacing={isMD ? SPACING.sm : 0}>
                                <Typography variant="h4" textAlign={"center"}>
                                    Medium
                                </Typography>

                                <Typography sx={{ opacity: 0.8, fontWeight: TYPOGRAPHY.light }} variant="h6" textAlign={"center"}>
                                    {quote.industry == 'Offices' && (
                                        <>500m²</>
                                    )}

                                    {quote.industry == 'Commercial' && (
                                        <>1000m²</>
                                    )}

                                    {quote.industry == 'Education' && (
                                        <>Primary / Intermediate School</>
                                    )}

                                    {quote.industry == 'Hospitality' && (
                                        <>Restaurant</>
                                    )}

                                    {quote.industry == 'Retail' && (
                                        <>1000m²</>
                                    )}

                                    {quote.industry == 'Health' && (
                                        <>1000m²</>
                                    )}
                                </Typography>
                            </Stack>
                        </ItemOption>

                        <ItemOption
                            value={"Large"}
                            onToggle={onToggleSelection}
                            selected={quote.size === "Large"}
                        >
                            <Stack spacing={isMD ? SPACING.sm : 0}>
                                <Typography variant="h4" textAlign={"center"}>
                                    Large
                                </Typography>

                                <Typography sx={{ opacity: 0.8, fontWeight: TYPOGRAPHY.light }} variant="h6" textAlign={"center"}>
                                    {quote.industry == 'Offices' && (
                                        <>1000m²</>
                                    )}

                                    {quote.industry == 'Commercial' && (
                                        <>3000m²</>
                                    )}

                                    {quote.industry == 'Education' && (
                                        <>High School Tertiary</>
                                    )}

                                    {quote.industry == 'Hospitality' && (
                                        <>Events Venue</>
                                    )}

                                    {quote.industry == 'Retail' && (
                                        <>5000+ m²</>
                                    )}

                                    {quote.industry == 'Health' && (
                                        <>3000+ m²</>
                                    )}
                                </Typography>
                            </Stack>
                        </ItemOption>
                    </Row>
                </Box>
            </Stack>
        </Custom>
    );
};

export default Step2;