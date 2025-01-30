const Offices = {
    Size: {
        A: 'Small',
        B: 'Medium',
        C: 'Large'
    },
    Frequency: {
        A: 'Weekly',
        B: '2-3 Days per Week',
        C: 'Daily',
        D: 'One Off'
    },
    People: {
        A: '1 - 20',
        B: '21 - 50',
        C: '50+'
    }
};

const Commercial = {
    Size: {
        A: 'Small',
        B: 'Medium',
        C: 'Large'
    },
    Frequency: {
        A: 'Weekly',
        B: '2-3 Days per Week',
        C: 'Daily',
        D: 'One Off'
    },
    People: {
        A: '1 - 20',
        B: '21 - 50',
        C: '50+'
    }
};

const Education = {
    Size: {
        A: 'Small',
        B: 'Medium',
        C: 'Large'
    },
    Frequency: {
        A: 'Weekly',
        B: '2-3 Days per Week',
        C: 'Daily',
        D: 'One Off'
    },
    People: {
        A: '1 - 50',
        B: '51 - 500',
        C: '500+'
    }
};

const Hospitality = {
    Size: {
        A: 'Small',
        B: 'Medium',
        C: 'Large'
    },
    Frequency: {
        A: 'Weekly',
        B: '2-3 Days per Week',
        C: 'Daily',
        D: 'One Off'
    },
    People: {
        A: '1 - 100',
        B: '100 - 250',
        C: '250+'
    }
};

const Retail = {
    Size: {
        A: 'Small',
        B: 'Medium',
        C: 'Large'
    },
    Frequency: {
        A: 'Weekly',
        B: '2-3 Days per Week',
        C: 'Daily',
        D: 'One Off'
    },
    People: {
        A: '1 - 100',
        B: '100 - 500',
        C: '500+'
    }
};

const Health = {
    Size: {
        A: 'Small',
        B: 'Medium',
        C: 'Large'
    },
    Frequency: {
        A: 'Weekly',
        B: '2-3 Days per Week',
        C: 'Daily',
        D: 'One Off'
    },
    People: {
        A: '1 - 100',
        B: '100 - 500',
        C: '500+'
    }
};

const estimate = (quote) => {
    if (quote.industry === 'Offices') {
        if (quote.size == Offices.Size.A && quote.frequency == Offices.Frequency.A && quote.people == Offices.People.A) {
            return '$80 - $110';
        }

        if (quote.size == Offices.Size.A && quote.frequency == Offices.Frequency.B && quote.people == Offices.People.A) {
            return '$150 - $350';
        }

        if (quote.size == Offices.Size.A && quote.frequency == Offices.Frequency.C && quote.people == Offices.People.A) {
            return '$220 - $350';
        }

        if (quote.size == Offices.Size.A && quote.frequency == Offices.Frequency.D && quote.people == Offices.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Offices.Size.A && !quote.frequency && quote.people == Offices.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Offices.Size.A && quote.frequency == Offices.Frequency.A && quote.people == Offices.People.B) {
            return '$80 - $110';
        }

        if (quote.size == Offices.Size.A && quote.frequency == Offices.Frequency.B && quote.people == Offices.People.B) {
            return '$215 - $315';
        }

        if (quote.size == Offices.Size.A && quote.frequency == Offices.Frequency.C && quote.people == Offices.People.B) {
            return '$225 - $525';
        }

        if (quote.size == Offices.Size.A && quote.frequency == Offices.Frequency.D && quote.people == Offices.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Offices.Size.A && !quote.frequency && quote.people == Offices.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Offices.Size.A && quote.frequency == Offices.Frequency.A && quote.people == Offices.People.C) {
            return '$150 - $350';
        }

        if (quote.size == Offices.Size.A && quote.frequency == Offices.Frequency.B && quote.people == Offices.People.C) {
            return '$200 - $350';
        }

        if (quote.size == Offices.Size.A && quote.frequency == Offices.Frequency.C && quote.people == Offices.People.C) {
            return '$300 - $550';
        }

        if (quote.size == Offices.Size.A && quote.frequency == Offices.Frequency.D && quote.people == Offices.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Offices.Size.A && !quote.frequency && quote.people == Offices.People.C) {
            return 'More information';
        }

        //

        if (quote.size == Offices.Size.B && quote.frequency == Offices.Frequency.A && quote.people == Offices.People.A) {
            return '$100 - $210';
        }

        if (quote.size == Offices.Size.B && quote.frequency == Offices.Frequency.B && quote.people == Offices.People.A) {
            return '$150 - $420';
        }

        if (quote.size == Offices.Size.B && quote.frequency == Offices.Frequency.C && quote.people == Offices.People.A) {
            return '$250 - $600';
        }

        if (quote.size == Offices.Size.B && quote.frequency == Offices.Frequency.D && quote.people == Offices.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Offices.Size.B && !quote.frequency && quote.people == Offices.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Offices.Size.B && quote.frequency == Offices.Frequency.A && quote.people == Offices.People.B) {
            return '$120 - $250';
        }

        if (quote.size == Offices.Size.B && quote.frequency == Offices.Frequency.B && quote.people == Offices.People.B) {
            return '$220 - $450';
        }

        if (quote.size == Offices.Size.B && quote.frequency == Offices.Frequency.C && quote.people == Offices.People.B) {
            return '$300 - $700';
        }

        if (quote.size == Offices.Size.B && quote.frequency == Offices.Frequency.D && quote.people == Offices.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Offices.Size.B && !quote.frequency && quote.people == Offices.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Offices.Size.B && quote.frequency == Offices.Frequency.A && quote.people == Offices.People.C) {
            return '$120 - $350';
        }

        if (quote.size == Offices.Size.B && quote.frequency == Offices.Frequency.B && quote.people == Offices.People.C) {
            return '$220 - $550';
        }

        if (quote.size == Offices.Size.B && quote.frequency == Offices.Frequency.C && quote.people == Offices.People.C) {
            return '$300 - $900';
        }

        if (quote.size == Offices.Size.B && quote.frequency == Offices.Frequency.D && quote.people == Offices.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Offices.Size.B && !quote.frequency && quote.people == Offices.People.C) {
            return 'More information';
        }

        //

        if (quote.size == Offices.Size.C && quote.frequency == Offices.Frequency.A && quote.people == Offices.People.A) {
            return '$150 - $350';
        }

        if (quote.size == Offices.Size.C && quote.frequency == Offices.Frequency.B && quote.people == Offices.People.A) {
            return '$275 - $600';
        }

        if (quote.size == Offices.Size.C && quote.frequency == Offices.Frequency.C && quote.people == Offices.People.A) {
            return '$500 - $1500';
        }

        if (quote.size == Offices.Size.C && quote.frequency == Offices.Frequency.D && quote.people == Offices.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Offices.Size.C && !quote.frequency && quote.people == Offices.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Offices.Size.C && quote.frequency == Offices.Frequency.A && quote.people == Offices.People.B) {
            return '$170 - $350';
        }

        if (quote.size == Offices.Size.C && quote.frequency == Offices.Frequency.B && quote.people == Offices.People.B) {
            return '$275 - $600';
        }

        if (quote.size == Offices.Size.C && quote.frequency == Offices.Frequency.C && quote.people == Offices.People.B) {
            return '$500 - $1500';
        }

        if (quote.size == Offices.Size.C && quote.frequency == Offices.Frequency.D && quote.people == Offices.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Offices.Size.C && !quote.frequency && quote.people == Offices.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Offices.Size.C && quote.frequency == Offices.Frequency.A && quote.people == Offices.People.C) {
            return 'More information';
        }

        if (quote.size == Offices.Size.C && quote.frequency == Offices.Frequency.B && quote.people == Offices.People.C) {
            return 'More information';
        }

        if (quote.size == Offices.Size.C && quote.frequency == Offices.Frequency.C && quote.people == Offices.People.C) {
            return 'More information';
        }

        if (quote.size == Offices.Size.C && quote.frequency == Offices.Frequency.D && quote.people == Offices.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Offices.Size.C && !quote.frequency && quote.people == Offices.People.B) {
            return 'More information';
        }
    };

    if (quote.industry === 'Commercial') {
        if (quote.size == Commercial.Size.A && quote.frequency == Commercial.Frequency.A && quote.people == Commercial.People.A) {
            return '$80 - $110';
        }

        if (quote.size == Commercial.Size.A && quote.frequency == Commercial.Frequency.B && quote.people == Commercial.People.A) {
            return '$150 - $350';
        }

        if (quote.size == Commercial.Size.A && quote.frequency == Commercial.Frequency.C && quote.people == Commercial.People.A) {
            return '$220 - $350';
        }

        if (quote.size == Commercial.Size.A && quote.frequency == Commercial.Frequency.D && quote.people == Commercial.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Commercial.Size.A && !quote.frequency && quote.people == Commercial.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Commercial.Size.A && quote.frequency == Commercial.Frequency.A && quote.people == Commercial.People.B) {
            return '$110 - $200';
        }

        if (quote.size == Commercial.Size.A && quote.frequency == Commercial.Frequency.B && quote.people == Commercial.People.B) {
            return '$200 - $350';
        }

        if (quote.size == Commercial.Size.A && quote.frequency == Commercial.Frequency.C && quote.people == Commercial.People.B) {
            return '$220 - $550';
        }

        if (quote.size == Commercial.Size.A && quote.frequency == Commercial.Frequency.D && quote.people == Commercial.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Commercial.Size.A && !quote.frequency && quote.people == Commercial.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Commercial.Size.A && quote.frequency == Commercial.Frequency.A && quote.people == Commercial.People.C) {
            return '$150 - $350';
        }

        if (quote.size == Commercial.Size.A && quote.frequency == Commercial.Frequency.B && quote.people == Commercial.People.C) {
            return '$200 - $400';
        }

        if (quote.size == Commercial.Size.A && quote.frequency == Commercial.Frequency.C && quote.people == Commercial.People.C) {
            return '$350 - $700';
        }

        if (quote.size == Commercial.Size.A && quote.frequency == Commercial.Frequency.D && quote.people == Commercial.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Commercial.Size.A && !quote.frequency && quote.people == Commercial.People.C) {
            return 'More information';
        }

        //

        if (quote.size == Commercial.Size.B && quote.frequency == Commercial.Frequency.A && quote.people == Commercial.People.A) {
            return '$100 - $210';
        }

        if (quote.size == Commercial.Size.B && quote.frequency == Commercial.Frequency.B && quote.people == Commercial.People.A) {
            return '$150 - $500';
        }

        if (quote.size == Commercial.Size.B && quote.frequency == Commercial.Frequency.C && quote.people == Commercial.People.A) {
            return '$250 - $700';
        }

        if (quote.size == Commercial.Size.B && quote.frequency == Commercial.Frequency.D && quote.people == Commercial.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Commercial.Size.B && !quote.frequency && quote.people == Commercial.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Commercial.Size.B && quote.frequency == Commercial.Frequency.A && quote.people == Commercial.People.B) {
            return '$120 - $250';
        }

        if (quote.size == Commercial.Size.B && quote.frequency == Commercial.Frequency.B && quote.people == Commercial.People.B) {
            return '$220 - $500';
        }

        if (quote.size == Commercial.Size.B && quote.frequency == Commercial.Frequency.C && quote.people == Commercial.People.B) {
            return '$300 - $800';
        }

        if (quote.size == Commercial.Size.B && quote.frequency == Commercial.Frequency.D && quote.people == Commercial.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Commercial.Size.B && !quote.frequency && quote.people == Commercial.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Commercial.Size.B && quote.frequency == Commercial.Frequency.A && quote.people == Commercial.People.C) {
            return '$150 - $500';
        }

        if (quote.size == Commercial.Size.B && quote.frequency == Commercial.Frequency.B && quote.people == Commercial.People.C) {
            return '$200 - $700';
        }

        if (quote.size == Commercial.Size.B && quote.frequency == Commercial.Frequency.C && quote.people == Commercial.People.C) {
            return '$375 - $1200';
        }

        if (quote.size == Commercial.Size.B && quote.frequency == Commercial.Frequency.D && quote.people == Commercial.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Commercial.Size.B && !quote.frequency && quote.people == Commercial.People.C) {
            return 'More information';
        }

        //

        if (quote.size == Commercial.Size.C && quote.frequency == Commercial.Frequency.A && quote.people == Commercial.People.A) {
            return '$150 - $500';
        }

        if (quote.size == Commercial.Size.C && quote.frequency == Commercial.Frequency.B && quote.people == Commercial.People.A) {
            return '$275 - $750';
        }

        if (quote.size == Commercial.Size.C && quote.frequency == Commercial.Frequency.C && quote.people == Commercial.People.A) {
            return '$500 - $1500';
        }

        if (quote.size == Commercial.Size.C && quote.frequency == Commercial.Frequency.D && quote.people == Commercial.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Commercial.Size.C && !quote.frequency && quote.people == Commercial.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Commercial.Size.C && quote.frequency == Commercial.Frequency.A && quote.people == Commercial.People.B) {
            return '$150 - $550';
        }

        if (quote.size == Commercial.Size.C && quote.frequency == Commercial.Frequency.B && quote.people == Commercial.People.B) {
            return '$275 - $850';
        }

        if (quote.size == Commercial.Size.C && quote.frequency == Commercial.Frequency.C && quote.people == Commercial.People.B) {
            return '$500 - $1700';
        }

        if (quote.size == Commercial.Size.C && quote.frequency == Commercial.Frequency.D && quote.people == Commercial.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Commercial.Size.C && !quote.frequency && quote.people == Commercial.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Commercial.Size.C && quote.frequency == Commercial.Frequency.A && quote.people == Commercial.People.C) {
            return 'More information';
        }

        if (quote.size == Commercial.Size.C && quote.frequency == Commercial.Frequency.B && quote.people == Commercial.People.C) {
            return 'More information';
        }

        if (quote.size == Commercial.Size.C && quote.frequency == Commercial.Frequency.C && quote.people == Commercial.People.C) {
            return 'More information';
        }

        if (quote.size == Commercial.Size.C && quote.frequency == Commercial.Frequency.D && quote.people == Commercial.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Commercial.Size.C && !quote.frequency && quote.people == Commercial.People.B) {
            return 'More information';
        }
    };

    if (quote.industry === 'Education') {
        if (quote.size == Education.Size.A && quote.frequency == Education.Frequency.A && quote.people == Education.People.A) {
            return '$80 - $150';
        }

        if (quote.size == Education.Size.A && quote.frequency == Education.Frequency.B && quote.people == Education.People.A) {
            return '$115 - $450';
        }

        if (quote.size == Education.Size.A && quote.frequency == Education.Frequency.C && quote.people == Education.People.A) {
            return '$250 - $800';
        }

        if (quote.size == Education.Size.A && quote.frequency == Education.Frequency.D && quote.people == Education.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Education.Size.A && !quote.frequency && quote.people == Education.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Education.Size.A && quote.frequency == Education.Frequency.A && quote.people == Education.People.B) {
            return '$100 - $180';
        }

        if (quote.size == Education.Size.A && quote.frequency == Education.Frequency.B && quote.people == Education.People.B) {
            return '$115 - $450';
        }

        if (quote.size == Education.Size.A && quote.frequency == Education.Frequency.C && quote.people == Education.People.B) {
            return '$250 - $800';
        }

        if (quote.size == Education.Size.A && quote.frequency == Education.Frequency.D && quote.people == Education.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Education.Size.A && !quote.frequency && quote.people == Education.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Education.Size.A && quote.frequency == Education.Frequency.A && quote.people == Education.People.C) {
            return '$100 - $180';
        }

        if (quote.size == Education.Size.A && quote.frequency == Education.Frequency.B && quote.people == Education.People.C) {
            return '$115 - $450';
        }

        if (quote.size == Education.Size.A && quote.frequency == Education.Frequency.C && quote.people == Education.People.C) {
            return '$250 - $1000';
        }

        if (quote.size == Education.Size.A && quote.frequency == Education.Frequency.D && quote.people == Education.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Education.Size.A && !quote.frequency && quote.people == Education.People.C) {
            return 'More information';
        }

        //

        if (quote.size == Education.Size.B && quote.frequency == Education.Frequency.A && quote.people == Education.People.A) {
            return 'More information';
        }

        if (quote.size == Education.Size.B && quote.frequency == Education.Frequency.B && quote.people == Education.People.A) {
            return 'More information';
        }

        if (quote.size == Education.Size.B && quote.frequency == Education.Frequency.C && quote.people == Education.People.A) {
            return '$450 - $700';
        }

        if (quote.size == Education.Size.B && quote.frequency == Education.Frequency.D && quote.people == Education.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Education.Size.B && !quote.frequency && quote.people == Education.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Education.Size.B && quote.frequency == Education.Frequency.A && quote.people == Education.People.B) {
            return 'More information';
        }

        if (quote.size == Education.Size.B && quote.frequency == Education.Frequency.B && quote.people == Education.People.B) {
            return 'More information';
        }

        if (quote.size == Education.Size.B && quote.frequency == Education.Frequency.C && quote.people == Education.People.B) {
            return '$690 - $1500';
        }

        if (quote.size == Education.Size.B && quote.frequency == Education.Frequency.D && quote.people == Education.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Education.Size.B && !quote.frequency && quote.people == Education.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Education.Size.B && quote.frequency == Education.Frequency.A && quote.people == Education.People.C) {
            return 'More information';
        }

        if (quote.size == Education.Size.B && quote.frequency == Education.Frequency.B && quote.people == Education.People.C) {
            return 'More information';
        }

        if (quote.size == Education.Size.B && quote.frequency == Education.Frequency.C && quote.people == Education.People.C) {
            return '$1500 - $2500';
        }

        if (quote.size == Education.Size.B && quote.frequency == Education.Frequency.D && quote.people == Education.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Education.Size.B && !quote.frequency && quote.people == Education.People.C) {
            return 'More information';
        }

        //

        if (quote.size == Education.Size.C && quote.frequency == Education.Frequency.A && quote.people == Education.People.A) {
            return 'More information';
        }

        if (quote.size == Education.Size.C && quote.frequency == Education.Frequency.B && quote.people == Education.People.A) {
            return 'More information';
        }

        if (quote.size == Education.Size.C && quote.frequency == Education.Frequency.C && quote.people == Education.People.A) {
            return '$450 - $800';
        }

        if (quote.size == Education.Size.C && quote.frequency == Education.Frequency.D && quote.people == Education.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Education.Size.C && !quote.frequency && quote.people == Education.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Education.Size.C && quote.frequency == Education.Frequency.A && quote.people == Education.People.B) {
            return 'More information';
        }

        if (quote.size == Education.Size.C && quote.frequency == Education.Frequency.B && quote.people == Education.People.B) {
            return 'More information';
        }

        if (quote.size == Education.Size.C && quote.frequency == Education.Frequency.C && quote.people == Education.People.B) {
            return '$750 - $2000';
        }

        if (quote.size == Education.Size.C && quote.frequency == Education.Frequency.D && quote.people == Education.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Education.Size.C && !quote.frequency && quote.people == Education.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Education.Size.C && quote.frequency == Education.Frequency.A && quote.people == Education.People.C) {
            return 'More information';
        }

        if (quote.size == Education.Size.C && quote.frequency == Education.Frequency.B && quote.people == Education.People.C) {
            return 'More information';
        }

        if (quote.size == Education.Size.C && quote.frequency == Education.Frequency.C && quote.people == Education.People.C) {
            return '$2000 - $10000';
        }

        if (quote.size == Education.Size.C && quote.frequency == Education.Frequency.D && quote.people == Education.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Education.Size.C && !quote.frequency && quote.people == Education.People.B) {
            return 'More information';
        }
    };

    if (quote.industry === 'Hospitality') {
        if (quote.size == Hospitality.Size.A && quote.frequency == Hospitality.Frequency.A && quote.people == Hospitality.People.A) {
            return '$80 - $110';
        }

        if (quote.size == Hospitality.Size.A && quote.frequency == Hospitality.Frequency.B && quote.people == Hospitality.People.A) {
            return '$150 - $350';
        }

        if (quote.size == Hospitality.Size.A && quote.frequency == Hospitality.Frequency.C && quote.people == Hospitality.People.A) {
            return '$220 - $350';
        }

        if (quote.size == Hospitality.Size.A && quote.frequency == Hospitality.Frequency.D && quote.people == Hospitality.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Hospitality.Size.A && !quote.frequency && quote.people == Hospitality.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Hospitality.Size.A && quote.frequency == Hospitality.Frequency.A && quote.people == Hospitality.People.B) {
            return '$110 - $200';
        }

        if (quote.size == Hospitality.Size.A && quote.frequency == Hospitality.Frequency.B && quote.people == Hospitality.People.B) {
            return '$200 - $350';
        }

        if (quote.size == Hospitality.Size.A && quote.frequency == Hospitality.Frequency.C && quote.people == Hospitality.People.B) {
            return '$220 - $350';
        }

        if (quote.size == Hospitality.Size.A && quote.frequency == Hospitality.Frequency.D && quote.people == Hospitality.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Hospitality.Size.A && !quote.frequency && quote.people == Hospitality.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Hospitality.Size.A && quote.frequency == Hospitality.Frequency.A && quote.people == Hospitality.People.C) {
            return '$150 - $350';
        }

        if (quote.size == Hospitality.Size.A && quote.frequency == Hospitality.Frequency.B && quote.people == Hospitality.People.C) {
            return '$200 - $400';
        }

        if (quote.size == Hospitality.Size.A && quote.frequency == Hospitality.Frequency.C && quote.people == Hospitality.People.C) {
            return '$350 - $700';
        }

        if (quote.size == Hospitality.Size.A && quote.frequency == Hospitality.Frequency.D && quote.people == Hospitality.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Hospitality.Size.A && !quote.frequency && quote.people == Hospitality.People.C) {
            return 'More information';
        }

        //

        if (quote.size == Hospitality.Size.B && quote.frequency == Hospitality.Frequency.A && quote.people == Hospitality.People.A) {
            return '$100 - $210';
        }

        if (quote.size == Hospitality.Size.B && quote.frequency == Hospitality.Frequency.B && quote.people == Hospitality.People.A) {
            return '$150 - $500';
        }

        if (quote.size == Hospitality.Size.B && quote.frequency == Hospitality.Frequency.C && quote.people == Hospitality.People.A) {
            return '$250 - $700';
        }

        if (quote.size == Hospitality.Size.B && quote.frequency == Hospitality.Frequency.D && quote.people == Hospitality.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Hospitality.Size.B && !quote.frequency && quote.people == Hospitality.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Hospitality.Size.B && quote.frequency == Hospitality.Frequency.A && quote.people == Hospitality.People.B) {
            return '$120 - $250';
        }

        if (quote.size == Hospitality.Size.B && quote.frequency == Hospitality.Frequency.B && quote.people == Hospitality.People.B) {
            return '$220 - $500';
        }

        if (quote.size == Hospitality.Size.B && quote.frequency == Hospitality.Frequency.C && quote.people == Hospitality.People.B) {
            return '$300 - $800';
        }

        if (quote.size == Hospitality.Size.B && quote.frequency == Hospitality.Frequency.D && quote.people == Hospitality.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Hospitality.Size.B && !quote.frequency && quote.people == Hospitality.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Hospitality.Size.B && quote.frequency == Hospitality.Frequency.A && quote.people == Hospitality.People.C) {
            return '$150 - $500';
        }

        if (quote.size == Hospitality.Size.B && quote.frequency == Hospitality.Frequency.B && quote.people == Hospitality.People.C) {
            return '$200 - $700';
        }

        if (quote.size == Hospitality.Size.B && quote.frequency == Hospitality.Frequency.C && quote.people == Hospitality.People.C) {
            return '$375 - $1200';
        }

        if (quote.size == Hospitality.Size.B && quote.frequency == Hospitality.Frequency.D && quote.people == Hospitality.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Hospitality.Size.B && !quote.frequency && quote.people == Hospitality.People.C) {
            return 'More information';
        }

        //

        if (quote.size == Hospitality.Size.C && quote.frequency == Hospitality.Frequency.A && quote.people == Hospitality.People.A) {
            return '$150 - $500';
        }

        if (quote.size == Hospitality.Size.C && quote.frequency == Hospitality.Frequency.B && quote.people == Hospitality.People.A) {
            return '$275 - $750';
        }

        if (quote.size == Hospitality.Size.C && quote.frequency == Hospitality.Frequency.C && quote.people == Hospitality.People.A) {
            return '$800 - $1500';
        }

        if (quote.size == Hospitality.Size.C && quote.frequency == Hospitality.Frequency.D && quote.people == Hospitality.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Hospitality.Size.C && !quote.frequency && quote.people == Hospitality.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Hospitality.Size.C && quote.frequency == Hospitality.Frequency.A && quote.people == Hospitality.People.B) {
            return '$150 - $550';
        }

        if (quote.size == Hospitality.Size.C && quote.frequency == Hospitality.Frequency.B && quote.people == Hospitality.People.B) {
            return '$275 - $850';
        }

        if (quote.size == Hospitality.Size.C && quote.frequency == Hospitality.Frequency.C && quote.people == Hospitality.People.B) {
            return '$500 - $1700';
        }

        if (quote.size == Hospitality.Size.C && quote.frequency == Hospitality.Frequency.D && quote.people == Hospitality.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Hospitality.Size.C && !quote.frequency && quote.people == Hospitality.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Hospitality.Size.C && quote.frequency == Hospitality.Frequency.A && quote.people == Hospitality.People.C) {
            return 'More information';
        }

        if (quote.size == Hospitality.Size.C && quote.frequency == Hospitality.Frequency.B && quote.people == Hospitality.People.C) {
            return 'More information';
        }

        if (quote.size == Hospitality.Size.C && quote.frequency == Hospitality.Frequency.C && quote.people == Hospitality.People.C) {
            return 'More information';
        }

        if (quote.size == Hospitality.Size.C && quote.frequency == Hospitality.Frequency.D && quote.people == Hospitality.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Hospitality.Size.C && !quote.frequency && quote.people == Hospitality.People.B) {
            return 'More information';
        }
    };

    if (quote.industry === 'Retail') {
        if (quote.size == Retail.Size.A && quote.frequency == Retail.Frequency.A && quote.people == Retail.People.A) {
            return '$80 - $110';
        }

        if (quote.size == Retail.Size.A && quote.frequency == Retail.Frequency.B && quote.people == Retail.People.A) {
            return '$150 - $350';
        }

        if (quote.size == Retail.Size.A && quote.frequency == Retail.Frequency.C && quote.people == Retail.People.A) {
            return '$220 - $350';
        }

        if (quote.size == Retail.Size.A && quote.frequency == Retail.Frequency.D && quote.people == Retail.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Retail.Size.A && !quote.frequency && quote.people == Retail.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Retail.Size.A && quote.frequency == Retail.Frequency.A && quote.people == Retail.People.B) {
            return '$110 - $200';
        }

        if (quote.size == Retail.Size.A && quote.frequency == Retail.Frequency.B && quote.people == Retail.People.B) {
            return '$200 - $350';
        }

        if (quote.size == Retail.Size.A && quote.frequency == Retail.Frequency.C && quote.people == Retail.People.B) {
            return '$220 - $550';
        }

        if (quote.size == Retail.Size.A && quote.frequency == Retail.Frequency.D && quote.people == Retail.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Retail.Size.A && !quote.frequency && quote.people == Retail.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Retail.Size.A && quote.frequency == Retail.Frequency.A && quote.people == Retail.People.C) {
            return '$150 - $350';
        }

        if (quote.size == Retail.Size.A && quote.frequency == Retail.Frequency.B && quote.people == Retail.People.C) {
            return '$200 - $400';
        }

        if (quote.size == Retail.Size.A && quote.frequency == Retail.Frequency.C && quote.people == Retail.People.C) {
            return '$350 - $700';
        }

        if (quote.size == Retail.Size.A && quote.frequency == Retail.Frequency.D && quote.people == Retail.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Retail.Size.A && !quote.frequency && quote.people == Retail.People.C) {
            return 'More information';
        }

        //

        if (quote.size == Retail.Size.B && quote.frequency == Retail.Frequency.A && quote.people == Retail.People.A) {
            return '$100 - $210';
        }

        if (quote.size == Retail.Size.B && quote.frequency == Retail.Frequency.B && quote.people == Retail.People.A) {
            return '$150 - $500';
        }

        if (quote.size == Retail.Size.B && quote.frequency == Retail.Frequency.C && quote.people == Retail.People.A) {
            return '$250 - $700';
        }

        if (quote.size == Retail.Size.B && quote.frequency == Retail.Frequency.D && quote.people == Retail.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Retail.Size.B && !quote.frequency && quote.people == Retail.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Retail.Size.B && quote.frequency == Retail.Frequency.A && quote.people == Retail.People.B) {
            return '$120 - $250';
        }

        if (quote.size == Retail.Size.B && quote.frequency == Retail.Frequency.B && quote.people == Retail.People.B) {
            return '$220 - $500';
        }

        if (quote.size == Retail.Size.B && quote.frequency == Retail.Frequency.C && quote.people == Retail.People.B) {
            return '$300 - $800';
        }

        if (quote.size == Retail.Size.B && quote.frequency == Retail.Frequency.D && quote.people == Retail.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Retail.Size.B && !quote.frequency && quote.people == Retail.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Retail.Size.B && quote.frequency == Retail.Frequency.A && quote.people == Retail.People.C) {
            return '$150 - $500';
        }

        if (quote.size == Retail.Size.B && quote.frequency == Retail.Frequency.B && quote.people == Retail.People.C) {
            return '$200 - $700';
        }

        if (quote.size == Retail.Size.B && quote.frequency == Retail.Frequency.C && quote.people == Retail.People.C) {
            return '$375 - $1200';
        }

        if (quote.size == Retail.Size.B && quote.frequency == Retail.Frequency.D && quote.people == Retail.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Retail.Size.B && !quote.frequency && quote.people == Retail.People.C) {
            return 'More information';
        }

        //

        if (quote.size == Retail.Size.C && quote.frequency == Retail.Frequency.A && quote.people == Retail.People.A) {
            return '$150 - $500';
        }

        if (quote.size == Retail.Size.C && quote.frequency == Retail.Frequency.B && quote.people == Retail.People.A) {
            return '$275 - $750';
        }

        if (quote.size == Retail.Size.C && quote.frequency == Retail.Frequency.C && quote.people == Retail.People.A) {
            return '$800 - $1500';
        }

        if (quote.size == Retail.Size.C && quote.frequency == Retail.Frequency.D && quote.people == Retail.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Retail.Size.C && !quote.frequency && quote.people == Retail.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Retail.Size.C && quote.frequency == Retail.Frequency.A && quote.people == Retail.People.B) {
            return '$150 - $550';
        }

        if (quote.size == Retail.Size.C && quote.frequency == Retail.Frequency.B && quote.people == Retail.People.B) {
            return '$275 - $850';
        }

        if (quote.size == Retail.Size.C && quote.frequency == Retail.Frequency.C && quote.people == Retail.People.B) {
            return '$500 - $1700';
        }

        if (quote.size == Retail.Size.C && quote.frequency == Retail.Frequency.D && quote.people == Retail.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Retail.Size.C && !quote.frequency && quote.people == Retail.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Retail.Size.C && quote.frequency == Retail.Frequency.A && quote.people == Retail.People.C) {
            return 'More information';
        }

        if (quote.size == Retail.Size.C && quote.frequency == Retail.Frequency.B && quote.people == Retail.People.C) {
            return 'More information';
        }

        if (quote.size == Retail.Size.C && quote.frequency == Retail.Frequency.C && quote.people == Retail.People.C) {
            return 'More information';
        }

        if (quote.size == Retail.Size.C && quote.frequency == Retail.Frequency.D && quote.people == Retail.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Retail.Size.C && !quote.frequency && quote.people == Retail.People.B) {
            return 'More information';
        }
    };

    if (quote.industry === 'Health') {
        if (quote.size == Health.Size.A && quote.frequency == Health.Frequency.A && quote.people == Health.People.A) {
            return '$100 - $200';
        }

        if (quote.size == Health.Size.A && quote.frequency == Health.Frequency.B && quote.people == Health.People.A) {
            return '$150 - $350';
        }

        if (quote.size == Health.Size.A && quote.frequency == Health.Frequency.C && quote.people == Health.People.A) {
            return '$250 - $400';
        }

        if (quote.size == Health.Size.A && quote.frequency == Health.Frequency.D && quote.people == Health.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Health.Size.A && !quote.frequency && quote.people == Health.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Health.Size.A && quote.frequency == Health.Frequency.A && quote.people == Health.People.B) {
            return '$110 - $220';
        }

        if (quote.size == Health.Size.A && quote.frequency == Health.Frequency.B && quote.people == Health.People.B) {
            return '$200 - $400';
        }

        if (quote.size == Health.Size.A && quote.frequency == Health.Frequency.C && quote.people == Health.People.B) {
            return '$250 - $550';
        }

        if (quote.size == Health.Size.A && quote.frequency == Health.Frequency.D && quote.people == Health.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Health.Size.A && !quote.frequency && quote.people == Health.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Health.Size.A && quote.frequency == Health.Frequency.A && quote.people == Health.People.C) {
            return '$150 - $350';
        }

        if (quote.size == Health.Size.A && quote.frequency == Health.Frequency.B && quote.people == Health.People.C) {
            return '$250 - $500';
        }

        if (quote.size == Health.Size.A && quote.frequency == Health.Frequency.C && quote.people == Health.People.C) {
            return '$400 - $800';
        }

        if (quote.size == Health.Size.A && quote.frequency == Health.Frequency.D && quote.people == Health.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Health.Size.A && !quote.frequency && quote.people == Health.People.C) {
            return 'More information';
        }

        //

        if (quote.size == Health.Size.B && quote.frequency == Health.Frequency.A && quote.people == Health.People.A) {
            return '$110 - $220';
        }

        if (quote.size == Health.Size.B && quote.frequency == Health.Frequency.B && quote.people == Health.People.A) {
            return '$200 - $400';
        }

        if (quote.size == Health.Size.B && quote.frequency == Health.Frequency.C && quote.people == Health.People.A) {
            return '$250 - $550';
        }

        if (quote.size == Health.Size.B && quote.frequency == Health.Frequency.D && quote.people == Health.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Health.Size.B && !quote.frequency && quote.people == Health.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Health.Size.B && quote.frequency == Health.Frequency.A && quote.people == Health.People.B) {
            return '$150 - $350';
        }

        if (quote.size == Health.Size.B && quote.frequency == Health.Frequency.B && quote.people == Health.People.B) {
            return '$250 - $500';
        }

        if (quote.size == Health.Size.B && quote.frequency == Health.Frequency.C && quote.people == Health.People.B) {
            return '$400 - $800';
        }

        if (quote.size == Health.Size.B && quote.frequency == Health.Frequency.D && quote.people == Health.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Health.Size.B && !quote.frequency && quote.people == Health.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Health.Size.B && quote.frequency == Health.Frequency.A && quote.people == Health.People.C) {
            return '$200 - $600';
        }

        if (quote.size == Health.Size.B && quote.frequency == Health.Frequency.B && quote.people == Health.People.C) {
            return '$250 - $800';
        }

        if (quote.size == Health.Size.B && quote.frequency == Health.Frequency.C && quote.people == Health.People.C) {
            return '$450 - $1500';
        }

        if (quote.size == Health.Size.B && quote.frequency == Health.Frequency.D && quote.people == Health.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Health.Size.B && !quote.frequency && quote.people == Health.People.C) {
            return 'More information';
        }

        //

        if (quote.size == Health.Size.C && quote.frequency == Health.Frequency.A && quote.people == Health.People.A) {
            return '$150 - $500';
        }

        if (quote.size == Health.Size.C && quote.frequency == Health.Frequency.B && quote.people == Health.People.A) {
            return '$275 - $750';
        }

        if (quote.size == Health.Size.C && quote.frequency == Health.Frequency.C && quote.people == Health.People.A) {
            return '$500 - $1500';
        }

        if (quote.size == Health.Size.C && quote.frequency == Health.Frequency.D && quote.people == Health.People.A) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Health.Size.C && !quote.frequency && quote.people == Health.People.A) {
            return 'More information';
        }

        //

        if (quote.size == Health.Size.C && quote.frequency == Health.Frequency.A && quote.people == Health.People.B) {
            return 'More information';
        }

        if (quote.size == Health.Size.C && quote.frequency == Health.Frequency.B && quote.people == Health.People.B) {
            return 'More information';
        }

        if (quote.size == Health.Size.C && quote.frequency == Health.Frequency.C && quote.people == Health.People.B) {
            return 'More information';
        }

        if (quote.size == Health.Size.C && quote.frequency == Health.Frequency.D && quote.people == Health.People.B) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Health.Size.C && !quote.frequency && quote.people == Health.People.B) {
            return 'More information';
        }

        //

        if (quote.size == Health.Size.C && quote.frequency == Health.Frequency.A && quote.people == Health.People.C) {
            return 'More information';
        }

        if (quote.size == Health.Size.C && quote.frequency == Health.Frequency.B && quote.people == Health.People.C) {
            return 'More information';
        }

        if (quote.size == Health.Size.C && quote.frequency == Health.Frequency.C && quote.people == Health.People.C) {
            return 'More information';
        }

        if (quote.size == Health.Size.C && quote.frequency == Health.Frequency.D && quote.people == Health.People.C) {
            return 'Starting from $350+GST';
        }

        if (quote.size == Health.Size.C && !quote.frequency && quote.people == Health.People.B) {
            return 'More information';
        }
    };

    return 'More information';
};

export const quoteHelper = {
    estimate
};