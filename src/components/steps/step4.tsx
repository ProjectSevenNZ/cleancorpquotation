import Custom from "@/styled/layout/custom";
import { SPACING } from "@/themes/settings";
import { Box, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ItemOption from "../item/option";
import { useQuote } from "@/contexts/quote";
import { useEffect, useState } from "react";
import Row from "../layout/row";

const Step4 = ({ onNext }) => {
    const theme = useTheme();
    const isMD = useMediaQuery(theme.breakpoints.up('md'));
    const isLG = useMediaQuery(theme.breakpoints.up('lg'));

    const { quote, setQuote } = useQuote();

    const [selected, setSelected] = useState(false);

    const onToggleSelection = (value) => {
        setSelected(false);

        setQuote({
            ...quote,
            people: value,
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
                        <>How many people are in your office?</>
                    )}

                    {quote.industry == 'Commercial' && (
                        <>How many people use your commercial space on average, daily?</>
                    )}

                    {quote.industry == 'Education' && (
                        <>How many pupils and staff attend your education facility?</>
                    )}

                    {quote.industry == 'Hospitality' && (
                        <>What’s the average daily foot traffic in your venue? <br /> (including both customers and staff)</>
                    )}

                    {quote.industry == 'Retail' && (
                        <>What’s the average daily foot traffic in your retail store? <br /> (including both customers and staff)</>
                    )}

                    {quote.industry == 'Health' && (
                        <>How many patients and staff visit your healthcare facility on a daily basis? </>
                    )}
                </Typography>

                <Box>
                    <Row direction={!isMD ? 'column' : 'row'} spacing={SPACING.sm} justifyContent={"center"} alignItems={"center"}>
                        {quote.industry == 'Offices' && (
                            <ItemOption
                                value={"1 - 20"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "1 - 20"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        1 - 20
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {quote.industry == 'Commercial' && (
                            <ItemOption
                                value={"1 - 20"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "1 - 20"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        1 - 20
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {quote.industry == 'Education' && (
                            <ItemOption
                                value={"1 - 50"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "1 - 50"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        1 - 50
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {quote.industry == 'Hospitality' && (
                            <ItemOption
                                value={"1 - 100"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "1 - 100"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        1 - 100
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {quote.industry == 'Retail' && (
                            <ItemOption
                                value={"1 - 100"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "1 - 100"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        1 - 100
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {quote.industry == 'Health' && (
                            <ItemOption
                                value={"1 - 100"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "1 - 100"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        1 - 100
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {/* Second */}

                        {quote.industry == 'Offices' && (
                            <ItemOption
                                value={"21 - 50"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "21 - 50"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        21 - 50
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {quote.industry == 'Commercial' && (
                            <ItemOption
                                value={"21 - 50"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "21 - 50"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        21 - 50
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {quote.industry == 'Education' && (
                            <ItemOption
                                value={"1 - 500"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "51 - 500"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        51 - 500
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {quote.industry == 'Hospitality' && (
                            <ItemOption
                                value={"100 - 250"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "100 - 250"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        100 - 250
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {quote.industry == 'Retail' && (
                            <ItemOption
                                value={"100 - 500"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "100 - 500"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        100 - 500
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {quote.industry == 'Health' && (
                            <ItemOption
                                value={"100 - 500"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "100 - 500"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        100 - 500
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {/* Third */}

                        {quote.industry == 'Offices' && (
                            <ItemOption
                                value={"50+"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "50+"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        50+
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {quote.industry == 'Commercial' && (
                            <ItemOption
                                value={"50+"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "50+"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        50+
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {quote.industry == 'Education' && (
                            <ItemOption
                                value={"500+"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "500+"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        500+
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {quote.industry == 'Hospitality' && (
                            <ItemOption
                                value={"250+"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "250+"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        250+
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {quote.industry == 'Retail' && (
                            <ItemOption
                                value={"500+"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "500+"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        500+
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}

                        {quote.industry == 'Health' && (
                            <ItemOption
                                value={"500+"}
                                onToggle={onToggleSelection}
                                selected={quote.people === "500+"}
                            >
                                <Stack spacing={SPACING.sm}>
                                    <Typography variant="h4" textAlign={"center"}>
                                        500+
                                    </Typography>
                                </Stack>
                            </ItemOption>
                        )}
                    </Row>
                </Box>
            </Stack>
        </Custom>
    );
};

export default Step4;