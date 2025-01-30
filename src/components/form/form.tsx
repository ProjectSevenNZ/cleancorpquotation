import { Box } from "@mui/material";

const Form = ({
    children,
    onSubmit,
    loading = false,
    disabled = false,
    completed = false,
    autoComplete = 'off'
}) => {
    return (
        <Box
            component="form"
            noValidate
            autoComplete={autoComplete}
            autoCorrect={autoComplete}
            onSubmit={onSubmit}
            sx={{
                position: 'relative',
                pointerEvents: loading || disabled ? 'none' : ''
            }}
        >
            {children}
        </Box>
    );
};

export default Form;