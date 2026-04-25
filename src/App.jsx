import { useState } from 'react'
import { InputBox } from './components';
import { useCurrencyInfo } from './hooks/useCurrencyInfo'
import backgroundImage from './assets/pexels-olha-maltseva-2156976676-34926383.jpg'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    const amountValue = typeof amount === 'string' ? (amount === '' ? 0 : Number(amount)) : amount;
    const result = amountValue * currencyInfo[to];
    setConvertedAmount(Number(result.toFixed(4)));
  }


  return (
    <>
      <div
        className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      
      >
        <div
          className='w-full'
        >
          <div
          className='w-full max-w-md mx-auto border border-gray-200 rounded-lg p-6 backdrop-blur-sm bg-white/80'
        >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div
                className='w-full mb-4'
              >
                <InputBox 
                  label="From"
                  amount={amount}
                  onCurrencyChange={(currency) =>{
                    setFrom(currency);
                  }}
                  currencyOption={options}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />

              </div>
              <div
                className='relative w-full h-10 mb-4'
              >
                <button
                  type='button'
                  className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700 transition'
                  onClick={swap}
                >
                  swap

                </button>

              </div>
              <div
                className='w-full mb-6'
              >
                <InputBox 
                  label="To"
                  amount={convertedAmount}
                  onCurrencyChange={(currency) =>{
                    setTo(currency);
                  }}
                  currencyOption={options}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button
                className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition'
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>

            </form>


          </div>

        </div>

      </div>
    </>
  )
}

export default App
