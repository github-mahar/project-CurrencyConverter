import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisbale = false,

    className = "",
}) {
    const amountInputId = useId();
  return (
    <div className={`bg-white rounded-lg p-4 text-sm flex gap-4 ${className}`}>
        <div className='w-1/2'>
            <label htmlFor={amountInputId} className='text-gray-500 text-xs mb-2 inline-block'>
                {label}
            </label>
            <input
                id={amountInputId}
                type="number"
                step="any"
                className='outline-none w-full bg-transparent text-lg font-semibold py-2 border-b border-gray-200 focus:border-blue-500'
                placeholder='0'
                disabled = {amountDisable}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(e.target.value === '' ? '' : Number(e.target.value))}
            />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-gray-500 text-xs mb-2 w-full'>Currency Type</p>
            <select
                className='rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none border border-gray-200 font-semibold text-gray-700'
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled = {currencyDisbale}
            >
                {currencyOption.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox