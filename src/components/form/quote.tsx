import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import Form from "@/components/form/form";
import { useState } from "react";
import { Button, Stack } from "@mui/material";
import { SPACING } from "@/themes/settings";
import InputField from "../input/field";
import RegionInput from "../input/region";
import axios from 'axios';
import { useQuote } from "@/contexts/quote";
import LoadingAction from "../common/loadingAction";

const validationSchema = yup.object().shape({
    businessName: yup.string().required('Business Name is required'),
    email: yup.string().email('Email is not valid').required('Email is required'),
    name: yup.string().required('Name is required'),
    phone: yup.string().required('Phone Number is required'),
    region: yup.string().required('Region is required'),
});

const FormQuote = ({ onComplete }) => {
    const { handleSubmit, control, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const { quote } = useQuote();

    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        onSave(data);
    };

    const onSave = async (data) => {
        setLoading(true);

        const response = await axios.post('/api/quote', { customer: data, quote: quote });

        onComplete();

        setLoading(false);
    };

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
            loading={loading}
        >
            <Stack spacing={SPACING.md}>
                <InputField
                    control={control}
                    label={"Business Name"}
                    placeholder={""}
                    name={"businessName"}
                    errors={errors}
                />

                <InputField
                    control={control}
                    label={"Email"}
                    placeholder={""}
                    name={"email"}
                    errors={errors}
                />

                <InputField
                    control={control}
                    label={"Full Name"}
                    placeholder={""}
                    name={"name"}
                    errors={errors}
                />

                <InputField
                    control={control}
                    label={"Phone Number"}
                    placeholder={""}
                    name={"phone"}
                    errors={errors}
                />

                <RegionInput
                    value={''}
                    setValue={setValue}
                    name={"region"}
                    placeholder="Select"
                    errors={errors}
                />

                <Button sx={{ borderRadius: '10px', height: '60px' }} variant="contained" size="large" type="submit">
                    <LoadingAction loading={loading}>
                        Send me my instant quote
                    </LoadingAction>
                </Button>
            </Stack>
        </Form>
    );
};

export default FormQuote;