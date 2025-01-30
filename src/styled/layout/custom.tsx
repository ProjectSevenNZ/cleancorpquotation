import { Box, BoxProps, styled } from "@mui/material";

//Used when custom styling needed
const Custom = styled(Box)<BoxProps>(({ theme }) => ({
    position: 'relative'
}));

export default Custom;
