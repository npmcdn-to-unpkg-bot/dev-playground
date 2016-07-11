export class ExchangeCurrencyService {
    supportedCurrencies = ["USD", "EUR", "GBP"];
    
    private exchangeRates = {
      "EUR/GBP": 0.8007,
      "EUR/USD": 1.1397,
      "GBP/EUR": 1.2478,
      "GBP/USD": 1.4225,
      "USD/EUR": 0.8778,
      "USD/GBP": 0.7029
    }
    
    getExchangeCurrency(baseCurrency: string, targetCurrency: string) {
        if (baseCurrency === targetCurrency)
            return 1;
            
        return this.exchangeRates[baseCurrency + '/' + targetCurrency];
    }
}