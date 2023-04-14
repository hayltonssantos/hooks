import React, { useState, useRef, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const [value1,setValue1] = useState('') /* o use state retorna um array q é o valor e uma função para tornar o componente funcional ex: input */
    const count = useRef(0) /* é usado o valor da referencia pra saber quantas vezes esse obj foi renderizado */
    
    /* exercicio 02 */
    const [value2,setValue2] = useState('') /* o use state retorna um array q é o valor e uma função para tornar o componente funcional ex: input */
    
    
    
    /* count.current = count.current + 1 */
    useEffect(function(){
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])

    useEffect(function(){
        count.current++
        myInput1.current.focus()
    }, [value2])

    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    /* desafio */
    const merge = function(s1,s2){
        return [...s1].map(function(e,i){
            return `${e}-` 
        }).join("")
    }
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title={'Exercicio 01'}/>
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{value1} [</span> 
                    <span className="text red">{count.current}</span>
                    <span className='text'>]</span>
                </div>
                
                <input type="text" className="input"
                    ref={myInput1} 
                    value={value1} onChange={e => setValue1(e.target.value)}
                    />
            </div>
            <SectionTitle title='Exercicio 2'/>
            <div className="center">
                <input type='text' className='input'
                    ref={myInput2}  
                    value={value2} 
                    onChange={e => setValue2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
