import Color from "color"

export const BREAKPOINTS = {
    xs: 0,
    sm: 768,
    md: 1024,
    lg: 1440,
    xl: 2560,
};

const colorDark = '#152234';
const colorLight = '#FFFFFF';
const colorGray = '#F7F7F7';
const colorLightGray = '#CCC';
const colorPrimary = '#40C2CF';
const colorSecondary = '#152234';
const colorContrast = '#00BEC5';
const colorSuccess = '#50C878';
const colorWarning = '#f7b211';
const colorError = '#FF3131';

export const COLORS = {
    dark: {
        main: colorDark,
        light: Color(colorDark).lighten(0.80).hex(),
        dark: Color(colorDark).darken(0.80).hex(),
        contrastText: colorLight
    },
    light: {
        main: colorLight,
        light: Color(colorLight).lighten(0.80).hex(),
        dark: Color(colorLight).darken(0.80).hex(),
        contrastText: colorDark
    },
    gray: {
        main: colorGray,
        light: '#FAFAFA',
        dark: Color(colorGray).darken(0.80).hex(),
        contrastText: colorDark
    },
    lightGray: {
        main: colorLightGray,
        light: '#F0F0F0',
        dark: Color(colorLightGray).darken(0.80).hex(),
        contrastText: colorDark
    },
    primary: {
        main: colorPrimary,
        light: Color(colorPrimary).lighten(0.80).hex(),
        dark: Color(colorPrimary).darken(0.80).hex(),
        contrastText: colorLight,
        rgb: '42, 51, 74'
    },
    secondary: {
        main: colorSecondary,
        light: Color(colorSecondary).lighten(0.80).hex(),
        dark: Color(colorSecondary).darken(0.80).hex(),
        contrastText: colorLight,
        rgb: '249, 243, 236'
    },
    contrast: {
        main: colorContrast,
        light: Color(colorContrast).lighten(0.80).hex(),
        dark: Color(colorContrast).darken(0.80).hex(),
        contrastText: colorLight
    },
    success: {
        main: colorSuccess,
        light: '#AFE1AF',
        dark: Color(colorSuccess).darken(0.80).hex(),
        contrastText: colorDark
    },
    warning: {
        main: colorWarning,
        light: Color(colorWarning).lighten(0.80).hex(),
        dark: Color(colorWarning).darken(0.80).hex(),
        contrastText: colorDark
    },
    error: {
        main: colorError,
        light: Color(colorError).lighten(0.80).hex(),
        dark: Color(colorError).darken(0.80).hex(),
        contrastText: colorLight
    }
};

export const SPACING = {
    xxs: 0.3,
    xs: 0.6,
    sm: 1.5,
    md: 2.5,
    lg: 4,
    xl: 8,
    xxl: 12
};

export const LAYOUTSPACING = {
    xxs: 1,
    xs: 2,
    sm: 5,
    md: 8,
    lg: 12,
    xl: 15,
    xxl: 20
};

export const TYPOGRAPHY = {
    titleFamily: ['DM Sans', 'sans-serif'].join(','),
    bodyFamily: ['DM Sans', 'sans-serif'].join(','),
    headingFamily: ['DM Sans', 'sans-serif'].join(','),
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    h1: '3.2rem',
    h2: '2.6rem',
    h3: '2.2rem',
    h4: '1.7rem',
    h5: '1.3rem',
    h6: '1rem',
    body1: '1.1rem',
    body2: '0.9rem',
    caption: '0.8rem',
    bodyOpacity: '1',
    lineHeight: '1.4rem'
};

export const LAYOUT = {
    header: {
        height: '75px',
        mobileHeight: '65px',
        heightValue: 75,
        logoWidth: '300px'
    },
    subHeader: {
        height: '75px',
        heightValue: 75,
        mobileHeight: '60px',
    },
};

export const ANIMATION = {
    duration: {
        xs: '.1s',
        sm: '.3s',
        md: '.5s',
        lg: '1s',
        xl: '2s'
    }
};

export const EFFECT = {
    shadow: {
        xs: '0 0 5px rgba(33,33,33,.4)',
        sm: '0px 0px 7px rgba(33,33,33,.2)',
    },
    border: {
        xs: `1px solid #F0F0F0`
    },
    opacity: {
        disabled: '0.5',
        action: '0.7'
    },
    borderRadius: {
        xs: '5px',
        sm: '10px'
    }
};

export const LAYERS = {
    xs: -1,
    sm: 0,
    md: 1,
    lg: 2,
    xl: 3,
    xxl: 4
};