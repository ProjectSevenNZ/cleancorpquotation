import { ANIMATION, COLORS } from "@/themes/settings";
import { Box, BoxProps, styled } from "@mui/material";

export const PageContainer = styled(Box)<BoxProps>(({ theme }) => ({
    backgroundColor: COLORS.gray.main,
    minHeight: '100vh',
    opacity: 1,
    transition: `all ${ANIMATION.duration.sm}`,
    '&.disabled': {
        opacity: 0,
        pointerEvents: 'none',
        transform: 'translateZ(0)'
    },
}));