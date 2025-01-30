import Custom from "@/styled/layout/custom";
import { SPACING } from "@/themes/settings";
import { Box, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ItemOption from "../item/option";
import { useQuote } from "@/contexts/quote";
import { useEffect, useState } from "react";
import Row from "../layout/row";

const Step1 = ({ onNext }) => {
    const theme = useTheme();
    const isMD = useMediaQuery(theme.breakpoints.up('md'));
    const isLG = useMediaQuery(theme.breakpoints.up('lg'));

    const { quote, setQuote } = useQuote();

    const [selected, setSelected] = useState(false);

    const onToggleSelection = (value) => {
        setSelected(false);

        setQuote({
            ...quote,
            industry: value,
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
                    Let’s start by understanding your industry.
                </Typography>

                <Box>
                    <Stack spacing={SPACING.sm}>
                        <Row direction={!isMD ? 'column' : 'row'} spacing={SPACING.sm} justifyContent={"center"} alignItems={"center"}>
                            <ItemOption
                                value={"Offices"}
                                onToggle={onToggleSelection}
                                selected={quote.industry === "Offices"}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Offices
                                </Typography>
                            </ItemOption>

                            <ItemOption
                                value={"Commercial"}
                                onToggle={onToggleSelection}
                                selected={quote.industry === "Commercial"}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Commercial
                                </Typography>
                            </ItemOption>

                            <ItemOption
                                value={"Education"}
                                onToggle={onToggleSelection}
                                selected={quote.industry === "Education"}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Education
                                </Typography>
                            </ItemOption>
                        </Row>

                        <Row direction={!isMD ? 'column' : 'row'} spacing={SPACING.sm} justifyContent={"center"} alignItems={"center"}>
                            <ItemOption
                                value={"Hospitality"}
                                onToggle={onToggleSelection}
                                selected={quote.industry === "Hospitality"}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Hospitality
                                </Typography>
                            </ItemOption>

                            <ItemOption
                                value={"Retail"}
                                onToggle={onToggleSelection}
                                selected={quote.industry === "Retail"}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Retail
                                </Typography>
                            </ItemOption>

                            <ItemOption
                                value={"Health"}
                                onToggle={onToggleSelection}
                                selected={quote.industry === "Health"}
                            >
                                <Typography variant="h4" textAlign={"center"}>
                                    Health
                                </Typography>
                            </ItemOption>
                        </Row>
                    </Stack>
                </Box>
            </Stack>
        </Custom>
    );
};

export default Step1;