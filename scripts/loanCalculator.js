class LoanCalculator {

    constructor ()
    {
        this.interests = {
            car: (0, 0.05, 0.10, 0.15, 0.20, 0.25),
            personal: (0, 0.05, 0.10, 0.15, 0.20, 0.25)
        };
    }

    calculateLoan(amount, cuotes)
    {
        let result = 
        {
            total: 0,
            total_x_cuotes: 0
        }
        for(let i = 1; i <= 6; i++)
        {
            if(i == cuotes)
            {  
                result.total = amount + (amount * this.interests[i]);
            }
        }
        result.total_x_cuotes = result.total/cuotes;
        return result;
    }
}