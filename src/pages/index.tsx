import Row from "@/components/layout/row";
import Step1 from "@/components/steps/step1";
import Step2 from "@/components/steps/step2";
import Step3 from "@/components/steps/step3";
import Step4 from "@/components/steps/step4";
import Step5 from "@/components/steps/step5";
import Step6 from "@/components/steps/step6";
import Step7 from "@/components/steps/step7";
import { useQuote } from "@/contexts/quote";
import IconLogo from "@/icons/logo";
import Layout from "@/layouts/layout";
import Custom from "@/styled/layout/custom";
import { ANIMATION, COLORS, SPACING } from "@/themes/settings";
import { Button, Collapse, Container, Fade, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

const HomePage = () => {
    const theme = useTheme();
    const isMD = useMediaQuery(theme.breakpoints.up('md'));

    const [loaded, setLoaded] = useState(false);

    const { quote } = useQuote();

    const [step, setStep] = useState(1);

    const [progress, setProgress] = useState(0);

    const [error, setError] = useState(false);

    const onNext = () => {
        setError(false);

        if (step === 1) {
            if (!quote.industry) {
                setError(true);
                return;
            }
        }

        if (step === 2) {
            if (!quote.size) {
                setError(true);
                return;
            }
        }

        if (step === 4) {
            if (!quote.people) {
                setError(true);
                return;
            }
        }

        setStep(step + 1);
    };

    const onBack = () => {
        setStep(step - 1);
    };

    useEffect(() => {
        setProgress((100 / 7) * step);

        if (step === 6) {
            setTimeout(() => {
                onNext();
            }, 3000);
        }
    }, [step]);

    useEffect(() => {
        setError(false);
    }, [quote]);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <Layout>
            {loaded && (
                <Fade in={loaded}>
                    <Custom
                        sx={{
                            minHeight: isMD ? '700px' : '',
                        }}
                    >
                        <Custom
                            sx={{
                                position: 'relative',
                                minHeight: '100vh',
                                display: isMD ? 'flex' : '',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingTop: '30px',
                            }}
                        >
                            <Custom
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    backgroundColor: '#EDF4F5'
                                }}
                            >
                                <Custom
                                    sx={{
                                        backgroundColor: COLORS.primary.main,
                                        height: '10px',
                                        transition: `all ${ANIMATION.duration.sm} ease-in-out`,
                                        width: `${progress}%`,
                                    }}
                                >

                                </Custom>
                            </Custom>

                            <Custom
                                sx={{
                                    position: isMD ? 'absolute' : 'relative',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    padding: isMD ? '3rem 3rem' : '1rem 1rem',
                                    transform: isMD ? '' : 'scale(0.7)',
                                    textAlign: isMD ? '' : 'center'
                                }}
                            >
                                <Custom>
                                    <IconLogo />
                                </Custom>
                            </Custom>

                            <Custom
                                sx={{
                                    width: '100%'
                                }}
                            >
                                <Container>
                                    <Grid container justifyContent={"center"}>
                                        <Grid item xs={12} md={12} xl={12}>
                                            {step === 1 && (
                                                <Fade in={true}>
                                                    <Custom>
                                                        <Step1 onNext={onNext} />
                                                    </Custom>
                                                </Fade>
                                            )}

                                            {step === 2 && (
                                                <Fade in={true}>
                                                    <Custom>
                                                        <Step2 onNext={onNext} />
                                                    </Custom>
                                                </Fade>
                                            )}

                                            {step === 3 && (
                                                <Fade in={true}>
                                                    <Custom>
                                                        <Step3 onNext={onNext} />
                                                    </Custom>
                                                </Fade>
                                            )}

                                            {step === 4 && (
                                                <Fade in={true}>
                                                    <Custom>
                                                        <Step4 onNext={onNext} />
                                                    </Custom>
                                                </Fade>
                                            )}

                                            {step === 5 && (
                                                <Fade in={true}>
                                                    <Custom>
                                                        <Step5 onNext={onNext} />
                                                    </Custom>
                                                </Fade>
                                            )}

                                            {step === 6 && (
                                                <Fade in={true}>
                                                    <Custom>
                                                        <Step6 />
                                                    </Custom>
                                                </Fade>
                                            )}

                                            {step === 7 && (
                                                <Fade in={true}>
                                                    <Custom>
                                                        <Step7 />
                                                    </Custom>
                                                </Fade>
                                            )}

                                            <Collapse in={error}>
                                                <Custom paddingTop={SPACING.lg}>
                                                    <Typography variant="body2" color="error" textAlign={"center"}>
                                                        <b>Select one to continue</b>
                                                    </Typography>
                                                </Custom>
                                            </Collapse>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Custom>

                            {step < 7 && (
                                <Custom
                                    sx={{
                                        position: isMD ? 'absolute' : 'relative',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        padding: isMD ? '2rem 3rem' : '2rem 1rem'
                                    }}
                                >
                                    <Fade in={step <= 5}>
                                        <Custom>
                                            <Row justifyContent={'space-between'} alignItems={"center"}>
                                                <Custom>
                                                    <Fade in={step > 1}>
                                                        <Button onClick={onBack} variant="outlined" color="secondary">Back</Button>
                                                    </Fade>
                                                </Custom>

                                                <Custom>
                                                    <Button onClick={onNext} variant="contained" color="secondary">Next</Button>
                                                </Custom>
                                            </Row>
                                        </Custom>
                                    </Fade>
                                </Custom>
                            )}
                        </Custom>
                    </Custom>
                </Fade>
            )}
        </Layout>
    );
};

export default HomePage;