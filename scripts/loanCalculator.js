//import loans from "../assets/loans.json"
export class LoanCalculator {

    interests = [];
    constructor ()
    {
        /*let response = fetch("../assets/loans.json")
            .then(response => response.json())

        let response = ('./data.json');
        
        /*let loans = JSON.parse(response)*/
        let loans = {
            "car":[ 0, 0.05, 0.10, 0.15, 0.20, 0.25 ],
            "personal":[ 0, 0.025, 0.05, 0.10, 0.15, 0.20 ]
        };
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
                for(let i = 1; i < this.interests[loan_type].length; i++)
                {
                    if(i == cuotes)
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