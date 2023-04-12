import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n-1) * n
}

function parImparFunc(num){
    const n = parseInt(num)
    if (n % 2 === 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}

const UseEffect = (props) => {
    const [number,setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])

    /* exercicio 2 */

    const [numeroPI, setNumeroPI] = useState(1)
    const [parOuImpar, setparOuImpar] = useState('Impar')

    useEffect(function(){
        setparOuImpar(parImparFunc(numeroPI))
    }, [numeroPI])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div>
                <SectionTitle title={"Exercicio 01"}/>
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Nao existe' : fatorial}</span>
                </div>
                <input type='number' className='input' 
                    value={number} 
                    onChange={e => setNumber(e.target.value)}/>
            </div>
            <div>
                <SectionTitle title={"Exercicio 02"}/>
                <div>
                    <span className="text">Par ou Impar: </span>
                    <span className="text red">{parOuImpar}</span>
                </div>
                <input type='number' className='input' 
                    value={numeroPI} 
                    onChange={e => setNumeroPI(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseEffect
