import { useEffect, useState } from "react";

export function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        
        if (!currency) return;

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch rates for ${currency}: ${res.status}`);
                }
                return res.json();
            })
            .then((res) => setData(res[currency]))
            console.log(data);
    }, [currency]);

    return data;
}
export default useCurrencyInfo;