import { Autocomplete, Box, Collapse, Stack, TextField, Typography } from "@mui/material";
import Row from "../layout/row";
import { COLORS, SPACING } from "@/themes/settings";
import Custom from "@/styled/layout/custom";
import { REGION_OPTIONS } from "@/data/region/options";

const RegionInput = ({ value, setValue, name, errors, label = "Region", placeholder = "" }) => {
    return (
        <Box>
            <Stack>
                <Autocomplete
                    sx={{ 
                        width: '100%',
                        '.MuiInputBase-root': {
                            padding: '0 !important'
                        } 
                    }}
                    options={REGION_OPTIONS as any}
                    getOptionLabel={(option: any) => option}
                    onChange={(event, selected) => setValue(name, selected)}
                    defaultValue={value}
                    renderOption={(props, option: any) => (
                        <Box
                            component="li"
                            {...props}
                        >
                            <Custom
                                sx={{
                                    padding: `1rem 1rem`
                                }}
                            >
                                <Row spacing={SPACING.sm} alignItems={"center"}>
                                    <Typography variant="body2">
                                        {option}
                                    </Typography>
                                </Row>
                            </Custom>
                        </Box>
                    )}
                    renderInput={(params) => (
                        <Stack spacing={SPACING.xs}>
                            <Typography variant="body2">
                                {label}
                            </Typography>

                            <TextField
                                {...params}
                                placeholder={placeholder}
                                inputProps={{
                                    ...params.inputProps,
                                }}
                            />
                        </Stack>
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

export default RegionInput;