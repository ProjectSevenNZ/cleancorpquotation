import Custom from "@/styled/layout/custom";
import { SPACING } from "@/themes/settings";
import { CircularProgress, Stack, Typography } from "@mui/material";

const Step6 = () => {
    return (
        <Stack spacing={SPACING.xl} justifyContent={"center"}>
            <Typography variant="h4" textAlign={"center"}>
                We are gathering your information and creating a quote for you
            </Typography>

            <Custom textAlign="center">
                <CircularProgress size={90} />
            </Custom>
        </Stack>
    );
};

export default Step6;