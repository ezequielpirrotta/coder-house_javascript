import loans from '../assets/loan_interest.json' assert {type: 'json'};

export class LoanCalculator {

    interests = [];
    constructor ()
    {
        for(let type in loans)
        {
            this.interests[type] = loans[type];    
        }
        
    }
    calculateLoan(amount, cuotes, type)
    {
        let result = 
        {
            total: 0,
            total_x_cuotes: 0,
            type: type
        };
        for(let loan_type in this.interests)
        {
            if(type === loan_type)
            {
                for(let i = 0; i < this.interests[loan_type].length; i++)
                {
                    if(i == cuotes - 1)
                    {
                        result.total = amount + (amount * this.interests[loan_type][i]); 
                        result.total = parseFloat(parseFloat(result.total).toFixed(2));

                    }
                }
            }
        }
        result.total_x_cuotes = parseFloat(result.total/cuotes).toFixed(2);
        return result;
    }
}