import Custom from "@/styled/layout/custom";
import { ANIMATION, COLORS } from "@/themes/settings";
import { CircularProgress } from "@mui/material";

const LoadingAction = ({ children, loading, color = COLORS.light.main, size = 25, thickness = 5 }) => {
    return (
        <Custom>
            <Custom
                sx={{
                    transition: `opacity ${ANIMATION.duration.md}`,
                    opacity: !loading ? 1 : 0,
                }}
                component={'span'}
            >
                {children}
            </Custom>

            <Custom
                sx={{
                    transition: `opacity ${ANIMATION.duration.md}`,
                    opacity: loading ? 1 : 0,
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <CircularProgress size={size} thickness={thickness} sx={{ color: color }} />
            </Custom>
        </Custom>
    );
};

export default LoadingAction;