import { createTheme } from "@mui/material";
import { LAYERS, BREAKPOINTS, COLORS, EFFECT, TYPOGRAPHY, SPACING } from "./settings";

const getMainTheme = () => {
    const defaultTheme = createTheme({
        palette: COLORS,
        // breakpoints: {
        //     values: {
        //         // xs: BREAKPOINTS.xs,
        //         // sm: BREAKPOINTS.sm,
        //         // md: BREAKPOINTS.md,
        //         // lg: BREAKPOINTS.lg,
        //         // xl: BREAKPOINTS.xl,
        //     },
        // },
        typography: {
            fontFamily: TYPOGRAPHY.bodyFamily,
            h1: {
                fontSize: TYPOGRAPHY.h1,
                fontWeight: TYPOGRAPHY.medium,
                fontFamily: TYPOGRAPHY.headingFamily,
                color: COLORS.dark.main
            },
            h2: {
                fontSize: TYPOGRAPHY.h2,
                fontWeight: TYPOGRAPHY.medium,
                fontFamily: TYPOGRAPHY.headingFamily,
                color: COLORS.dark.main
            },
            h3: {
                fontSize: TYPOGRAPHY.h3,
                fontWeight: TYPOGRAPHY.medium,
                fontFamily: TYPOGRAPHY.headingFamily,
                color: COLORS.dark.main
            },
            h4: {
                fontSize: TYPOGRAPHY.h4,
                fontWeight: TYPOGRAPHY.medium,
                fontFamily: TYPOGRAPHY.headingFamily,
                color: COLORS.dark.main
            },
            h5: {
                fontSize: TYPOGRAPHY.h5,
                fontWeight: TYPOGRAPHY.medium,
                fontFamily: TYPOGRAPHY.headingFamily,
                color: COLORS.dark.main
            },
            h6: {
                fontSize: TYPOGRAPHY.h6,
                fontWeight: TYPOGRAPHY.medium,
                fontFamily: TYPOGRAPHY.headingFamily,
                color: COLORS.dark.main
            },
            subtitle1: {
                fontSize: TYPOGRAPHY.body1,
                fontWeight: TYPOGRAPHY.medium,
                fontFamily: TYPOGRAPHY.bodyFamily,
                color: COLORS.dark.main
            },
            subtitle2: {
                fontSize: TYPOGRAPHY.body2,
                fontWeight: TYPOGRAPHY.medium,
                fontFamily: TYPOGRAPHY.bodyFamily,
                color: COLORS.dark.main
            },
            body1: {
                fontSize: TYPOGRAPHY.body1,
                fontWeight: TYPOGRAPHY.light,
                opacity: TYPOGRAPHY.bodyOpacity,
                fontFamily: TYPOGRAPHY.bodyFamily,
                lineHeight: TYPOGRAPHY.lineHeight,
                color: COLORS.dark.main
            },
            body2: {
                fontSize: TYPOGRAPHY.body2,
                fontWeight: TYPOGRAPHY.light,
                opacity: TYPOGRAPHY.bodyOpacity,
                fontFamily: TYPOGRAPHY.bodyFamily,
                lineHeight: TYPOGRAPHY.lineHeight,
                color: COLORS.dark.main
            },
            overline: {
                fontSize: TYPOGRAPHY.body2,
                fontWeight: TYPOGRAPHY.light,
                opacity: TYPOGRAPHY.bodyOpacity,
                fontFamily: TYPOGRAPHY.bodyFamily,
            },
            caption: {
                fontSize: TYPOGRAPHY.caption,
                opacity: TYPOGRAPHY.bodyOpacity,
                fontFamily: TYPOGRAPHY.bodyFamily,
                lineHeight: TYPOGRAPHY.lineHeight,
                color: COLORS.primary.main
            },
        }
    });

    defaultTheme.components.MuiContainer = {
        styleOverrides: {
            root: {
                paddingLeft: `1rem !important`,
                paddingRight: `1rem !important`,
            }
        }
    }

    defaultTheme.components.MuiBackdrop = {
        styleOverrides: {
            root: {
                backgroundColor: `rgba(${COLORS.primary.rgb}, 0.5)`,
                // transform: 'translateZ(0)',
                // backdropFilter: 'blur(9px)',
            }
        }
    }

    defaultTheme.components.MuiDialog = {
        styleOverrides: {
            root: {
                marginRight: 0,
                marginLeft: 0,
                paddingLeft: 0,
                paddingRight: 0,
                // backdropFilter: 'blur(3px)',
                transform: 'translateZ(0)'
            },
            scrollPaper: {
                alignItems: 'flex-start !important',
                overflowY: 'scroll'
            },
            container: {
                alignItems: 'flex-start !important'
            },
            paper: {
                boxShadow: 'none',
                verticalAlign: 'top',
                backgroundColor: 'transparent',
                overflowY: 'auto',
            }
        }
    };

    defaultTheme.components.MuiPopover = {
        styleOverrides: {
            paper: {
                marginTop: defaultTheme.spacing(SPACING.sm),
                boxShadow: EFFECT.shadow.sm,
                backgroundColor: 'transparent',
                borderRadius: defaultTheme.spacing(SPACING.md)
            }
        }
    };

    defaultTheme.components.MuiCssBaseline = {
        styleOverrides: {

        }
    };

    defaultTheme.components.MuiButton = {
        styleOverrides: {
            root: {
                opacity: 1,
                boxShadow: 'none',
                borderRadius: '30px',
                fontFamily: TYPOGRAPHY.bodyFamily,
                fontWeight: TYPOGRAPHY.medium,
                textTransform: 'none',
                height: '45px',
                lineHeight: '0 !important',
                paddingLeft: '30px',
                paddingRight: '30px'
            }
        }
    };

    defaultTheme.components.MuiCard = {
        styleOverrides: {
            root: {
                boxShadow: 'none',
                border: EFFECT.border.xs,
                borderRadius: '10px'
            }
        }
    };

    defaultTheme.components.MuiTextField = {
        defaultProps: {
            InputLabelProps: { shrink: true }
        },
        styleOverrides: {
            root: {
                'input': {
                    padding: `${defaultTheme.spacing(SPACING.sm)} !important`,
                },
                'input, textarea': {
                    fontSize: TYPOGRAPHY.body2,
                    borderRadius: EFFECT.borderRadius.sm,
                    backgroundColor: COLORS.gray.light,
                },
                '& fieldset': {
                    borderRadius: EFFECT.borderRadius.sm,
                },
            },
        }
    };

    defaultTheme.components.MuiAutocomplete = {
        styleOverrides: {
            root: {
                'input, textarea': {
                    fontSize: TYPOGRAPHY.body2
                },
                '.MuiAutocomplete-endAdornment': {
                    // display: 'none !important'
                },
                '& fieldset': {
                },
                '.MuiInputBase-root': {
                    paddingRight: '0 !important'
                }
            },
            paper: {
                backgroundColor: `${COLORS.light.main} !important`,
                zIndex: LAYERS.md,
                opacity: `1 !important`
            }
        }
    };

    defaultTheme.components.MuiSelect = {
        styleOverrides: {
            root: {
                'input': {
                    padding: `${defaultTheme.spacing(SPACING.sm)} !important`,
                },
                'input, textarea, .MuiSelect-select': {
                    fontSize: TYPOGRAPHY.body2,
                    borderRadius: EFFECT.borderRadius.sm,
                    backgroundColor: COLORS.gray.light,
                },
                '& fieldset': {
                    borderRadius: EFFECT.borderRadius.sm,
                    border: 'none'
                },
            }
        }
    };

    defaultTheme.components.MuiInputBase = {
        styleOverrides: {
            root: {
                paddingLeft: '0 !important'
            },
        }
    };

    defaultTheme.components.MuiList = {
        styleOverrides: {
            root: {
                backgroundColor: `${COLORS.light.main} !important`,
                fontSize: '14px',
                padding: 0
            }
        }
    }

    return defaultTheme;
};

export default getMainTheme;