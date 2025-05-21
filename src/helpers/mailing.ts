import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSendAPIToken = process.env.MAILERSEND_API_TOKEN;

const quoteTemplateId = process.env.MAILERSEND_TEMPLATE_QUOTE;

const senderEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL

const mailerSend = new MailerSend({
    apiKey: mailerSendAPIToken,
});

const sendQuote = async ({
    email,
    name,
    title,
    size,
    people,
    region,
    estimate,
    services,
}) => {
    const sentFrom = new Sender(senderEmail, "Cleancorp");

    const recipients = [new Recipient(email, name)];
    const cc = [new Recipient('kody@projectseven.co.nz', "Kody")];

    const variables = [
        {
            email: email,
            substitutions: [
                {
                    var: 'title',
                    value: title,
                },
                {
                    var: 'size',
                    value: size,
                },
                {
                    var: 'people',
                    value: people,
                },
                {
                    var: 'region',
                    value: region,
                },
                {
                    var: 'estimate',
                    value: estimate,
                },
                {
                    var: 'services',
                    value: services,
                },
            ],
        }
    ];

    const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setBcc(cc)
        .setSubject("Here's your Cleancorp Instant Quote!")
        .setTemplateId(quoteTemplateId)
        .setVariables(variables);

    await mailerSend.email.send(emailParams);
};

export const mailingHelper = {
    sendQuote
};
