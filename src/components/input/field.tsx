import { COLORS, SPACING } from "@/themes/settings";
import { Box, Collapse, Stack, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import Row from "../layout/row";

const InputField = ({ control, label, placeholder = "", name, type = "text", errors, required = false, initialValue = '', tip = null }) => {
    return (
        <Box>
            <Stack spacing={SPACING.xs}>
                <Row alignItems={"center"} spacing={SPACING.xs}>
                    <Typography variant="body2">
                        {label}
                    </Typography>
                </Row>

                <Controller control={control}
                    name={name}
                    defaultValue={initialValue}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            error={!!errors[name]}
                            placeholder={placeholder}
                            required={required}
                            fullWidth
                            type={type}
                        />
                    )}
                />
            </Stack>

            <Collapse in={errors[name]?.message}>
                <Typography variant="caption" sx={{ color: COLORS.error.main }}>
                    {errors[name]?.message}
                </Typography>
            </Collapse>
        </Box>
    );
};

export default InputField;