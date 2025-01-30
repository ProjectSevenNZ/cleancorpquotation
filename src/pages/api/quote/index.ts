import { mailingHelper } from "@/helpers/mailing";
import { getEditorClient } from "../../../../sanity/lib/client";
import { quoteHelper } from "@/helpers/quote";

const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export default async (req, res) => {
    try {
        switch (req.method) {
            case 'POST': {
                const client = getEditorClient(token);

                const customer = req.body.customer;
                const quote = req.body.quote;

                let quoteData = {
                    _type: 'quote',
                    ...customer,
                    ...quote
                };

                quoteData.services = quote.services && quote.services.length > 0 ? quote.services?.join(', ') : 'No services selected';

                quoteData.estimate = quoteHelper.estimate(quote);

                const response = await client.create(quoteData);

                let frequency = quote.frequency;

                if(quote.frequency == "Weekly") {
                    frequency = "Once per week";
                }

                if(quote.frequency == "Daily") {
                    frequency = "5 days per week";
                }

                let title = `Thanks ${customer.name.split(' ')[0]}, here's your quote for ${customer.businessName}.`;
                let estimate = `<b>${quoteData.estimate}</b> <br> <span style='font-size: 13px'>${frequency}</span>`;

                if(quoteData.estimate == "More information") {
                    estimate = "Looks like we need more information";
                    title = `Thanks ${customer.name.split(' ')[0]}, one of the team will be in touch.`;
                };

                await mailingHelper.sendQuote({
                    email: customer.email,
                    name: customer.name,
                    title: title,
                    size: `${quote.size} space`,
                    people: quote.people ? quote.people : 'No people specified',
                    region: customer.region,
                    estimate: estimate,
                    services: quoteData.services,
                });

                res.status(200);
                res.send();

                break;
            }
        }
    }
    catch (error) {
        console.log(error);

        res.status(error.response?.status || 500);
        res.send(error.message);
    }
};