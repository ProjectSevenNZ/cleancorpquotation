import React from 'react';
import { StackProps, Stack } from '@mui/material';

type RowProps = {
    children;
} & StackProps;

const Row = ({ children, ...props }: RowProps) => {
    return (
        <Stack direction="row" {...props}>
            {children}
        </Stack>
    );
};

export default Row;