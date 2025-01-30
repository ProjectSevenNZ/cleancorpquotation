import Custom from "@/styled/layout/custom";
import { ANIMATION, COLORS } from "@/themes/settings";
import { Card, useMediaQuery, useTheme } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const ItemOption = ({ children, value, onToggle, selected, small = false }) => {
    const theme = useTheme();
    const isMD = useMediaQuery(theme.breakpoints.up('md'));
    const isLG = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <Card
            onClick={() => onToggle(value)}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                aspectRatio: isMD ? small ? '16/8' : '16/12' : '16/4',
                width: isLG ? '17vw' : isMD ? '23vw' : '100%',
                position: 'relative',
                cursor: 'pointer',
                borderColor: selected ? COLORS.primary.main : '',
                transition: `all ${ANIMATION.duration.sm}`,
                '&:hover': {
                    borderColor: COLORS.dark.main,
                }
            }}
        >
            <Custom
                sx={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    height: isLG ? '40px' : '30px',
                    width: isLG ? '40px' : '30px',
                    borderRadius: '50%',
                    border: `1px solid ${COLORS.dark.main}`,
                    backgroundColor: selected ? COLORS.primary.main : 'transparent',
                    borderColor: selected ? COLORS.primary.main : COLORS.dark.main,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: `all ${ANIMATION.duration.sm}`
                }}
            >
                <CheckIcon sx={{ color: COLORS.light.main, fontSize: isLG ? '30px' : '20px',}} />
            </Custom>

            {children}
        </Card>
    );
};

export default ItemOption;