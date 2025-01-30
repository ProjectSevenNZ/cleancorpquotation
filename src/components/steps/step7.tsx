import Custom from "@/styled/layout/custom";
import FormQuote from "../form/quote";
import { Box, Collapse, Grid, Stack, Typography } from "@mui/material";
import { SPACING } from "@/themes/settings";
import { useState } from "react";

const Step7 = () => {
    const [completed, setCompleted] = useState(false);

    const onComplete = () => {
        setCompleted(true);
    };

    return (
        <Custom>
            <Stack spacing={SPACING.xl}>
                <Collapse in={!completed}>
                    <Custom>
                        <Grid container justifyContent={"center"}>
                            <Grid item xs={12} md={8} lg={7}>
                                <Typography variant="h3" textAlign={"center"}>
                                    Great, all done. Let us know where to send your&nbsp;instant&nbsp;quote.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Custom>
                </Collapse>

                <Box paddingBottom={SPACING.xl}>
                    <Grid container justifyContent={"center"}>
                        <Grid xs={12} md={6} lg={4}>
                            <Collapse in={!completed}>
                                <Custom>
                                    <FormQuote onComplete={onComplete} />
                                </Custom>
                            </Collapse>

                            <Collapse in={completed}>
                                <Custom>
                                    <Stack spacing={SPACING.sm}>
                                        <Typography variant="h3" textAlign={"center"}>
                                            Thank you
                                        </Typography>

                                        <Typography variant="body1" textAlign={"center"}>
                                            We have just sent you an email, please check your spam folder and we will be in touch.
                                        </Typography>
                                    </Stack>
                                </Custom>
                            </Collapse>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </Custom>
    );
};

export default Step7;