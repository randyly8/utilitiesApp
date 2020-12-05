import React, {useState} from 'react';
import math from 'mathjs/lib/browser/math'

function Calculator() {
    const [quotient, setQuotient] = useState('0')

    const evaluate = () => {
        try {
            setQuotient(math.evaluate(quotient))
        } catch {console.log('not a valid expression')}
        
    }

    return (
        <div>
            <input type='text' value={quotient} />
            <button onClick={() => setQuotient(prev => prev + '1')}>1</button>
            <button onClick={() => setQuotient(prev => prev + '2')}>2</button>
            <button onClick={() => setQuotient(prev => prev + '3')}>3</button>
            <button onClick={() => setQuotient(prev => prev + '4')}>4</button>
            <button onClick={() => setQuotient(prev => prev + '5')}>5</button>
            <button onClick={() => setQuotient(prev => prev + '6')}>6</button>
            <button onClick={() => setQuotient(prev => prev + '7')}>7</button>
            <button onClick={() => setQuotient(prev => prev + '8')}>8</button>
            <button onClick={() => setQuotient(prev => prev + '9')}>9</button>
            <button onClick={() => setQuotient(prev => prev + '0')}>0</button>
            <button onClick={() => setQuotient(prev => prev + '.')}>.</button>
            <button onClick={() => setQuotient(prev => prev + '+')}>+</button>
            <button onClick={() => setQuotient(prev => prev + '-')}>-</button>
            <button onClick={() => setQuotient(prev => prev + '*')}>x</button>
            <button onClick={() => setQuotient(prev => prev + '/')}>/</button>
            <button onClick={() => setQuotient(prev => prev + '(')}>(</button>
            <button onClick={() => setQuotient(prev => prev + ')')}>)</button>
            {/* <button onClick={() => setQuotient(prev => prev + '%')}>%</button> */}
            <button onClick={() => setQuotient('0')}>Clear</button>
            <button onClick={evaluate}>=</button>
        </div>
    );
}

export default Calculator;