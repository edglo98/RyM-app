import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { RanNumber } from '../../helpers/RanNumber'
import CharacterCard from '../../components/CharacterCard'
import Loading from '../../components/Loading'
import "./styles.css"

function HomePage() {
    const ranNumber = RanNumber(671)

    const [ number, setNumber] = useState( ranNumber )

    const handleChange = () => {
        setNumber( ranNumber )
    } 


    const {data, loading} = useFetch(`https://rickandmortyapi.com/api/character/${ number }`)

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            {
            loading?
                <Loading />
            :
                <CharacterCard
                    data={ data }
                />
            }
            <button className="hompage-ramdombutton_change" onClick={ handleChange }>
                Siguiente
            </button>
        </div>
    )
}

export default HomePage

