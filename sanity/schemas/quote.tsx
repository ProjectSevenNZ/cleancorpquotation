import { defineField, defineType } from 'sanity';
import moment from "moment";

export default defineType({
    name: 'quote',
    title: 'Quotes',
    type: 'document',
    fields: [
        defineField({
            name: 'businessName',
            title: 'Business Name',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'email',
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'region',
            title: 'Region',
            type: 'string',
        }),
        defineField({
            name: 'industry',
            title: 'Industry',
            type: 'string',
        }),
        defineField({
            name: 'size',
            title: 'Size',
            type: 'string',
        }),
        defineField({
            name: 'frequency',
            title: 'Frequency',
            type: 'string',
        }),
        defineField({
            name: 'people',
            title: 'People',
            type: 'string',
        }),
        defineField({
            name: 'services',
            title: 'Services',
            type: 'string',
        }),
        defineField({
            name: 'estimate',
            title: 'Estimate',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'email',
            date: '_createdAt',
        },
        prepare(selection) {
            const { date } = selection
            return { ...selection, subtitle: `Created at ${moment(date).format('D MMM YYYY')}`}
        },
    },
});