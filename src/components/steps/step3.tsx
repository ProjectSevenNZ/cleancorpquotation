import Custom from "@/styled/layout/custom";
import { SPACING, TYPOGRAPHY } from "@/themes/settings";
import { Box, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ItemOption from "../item/option";
import { useQuote } from "@/contexts/quote";
import { useEffect, useState } from "react";
import Row from "../layout/row";

const Step3 = ({ onNext }) => {
    const theme = useTheme();
    const isMD = useMediaQuery(theme.breakpoints.up('md'));
    const isLG = useMediaQuery(theme.breakpoints.up('lg'));

    const { quote, setQuote } = useQuote();

    const [selected, setSelected] = useState(false);

    const onToggleSelection = (value) => {
        setSelected(false);

        setQuote({
            ...quote,
            frequency: value,
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
                        <>How often would you like your office cleaned?</>
                    )}

                    {quote.industry == 'Commercial' && (
                        <>How often would you like your commercial space cleaned?</>
                    )}

                    {quote.industry == 'Education' && (
                        <>How often would you like your education facilitiy to be cleaned?</>
                    )}

                    {quote.industry == 'Hospitality' && (
                        <>How often would you like your hospitality venue cleaned?</>
                    )}

                    {quote.industry == 'Retail' && (
                        <>How often would you like your retail space cleaned?</>
                    )}

                    {quote.industry == 'Health' && (
                        <>How often would you like your healthcare facility cleaned?</>
                    )}
                </Typography>

                <Box>
                    <Row direction={!isMD ? 'column' : 'row'} spacing={SPACING.sm} justifyContent={"center"} alignItems={"center"}>
                        <ItemOption
                            value={"Weekly"}
                            onToggle={onToggleSelection}
                            selected={quote.frequency === "Weekly"}
                        >
                            <Stack spacing={SPACING.sm}>
                                <Typography variant="h4" textAlign={"center"}>
                                    Once per Week
                                </Typography>
                            </Stack>
                        </ItemOption>

                        <ItemOption
                            value={"2-3 Days per Week"}
                            onToggle={onToggleSelection}
                            selected={quote.frequency === "2-3 Days per Week"}
                        >
                            <Stack spacing={SPACING.sm}>
                                <Typography variant="h4" textAlign={"center"}>
                                    2-3 Days per Week
                                </Typography>
                            </Stack>
                        </ItemOption>

                        <ItemOption
                            value={"Daily"}
                            onToggle={onToggleSelection}
                            selected={quote.frequency === "Daily"}
                        >
                            <Stack spacing={isMD ? SPACING.sm : 0}>
                                <Typography variant="h4" textAlign={"center"}>
                                    Daily
                                </Typography>

                                <Typography sx={{ opacity: 0.8, fontWeight: TYPOGRAPHY.light }} variant="h6" textAlign={"center"}>
                                    5 days per week
                                </Typography>
                            </Stack>
                        </ItemOption>

                        <ItemOption
                            value={"One Off"}
                            onToggle={onToggleSelection}
                            selected={quote.frequency === "One Off"}
                        >
                            <Stack spacing={SPACING.sm}>
                                <Typography variant="h4" textAlign={"center"}>
                                    One Off
                                </Typography>
                            </Stack>
                        </ItemOption>
                    </Row>

                    <Custom paddingTop={SPACING.lg} sx={{ cursor: 'pointer' }}>
                        <Typography onClick={onNext} variant="h5" textAlign={"center"} sx={{ textDecoration: 'underline' }}>
                            Not sure.
                        </Typography>
                    </Custom>
                </Box>
            </Stack>
        </Custom>
    );
};

export default Step3;