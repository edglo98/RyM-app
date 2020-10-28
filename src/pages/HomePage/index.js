import React, { useMemo } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { RanNumber } from '../../helpers/RanNumber'
import CharacterCard from '../../components/CharacterCard'
import Loading from '../../components/Loading'

function HomePage() {

    const number = useMemo(
        () => RanNumber(671)
    ,[])
    
    const {data, loading} = useFetch(`https://rickandmortyapi.com/api/character/${ number }`)

    return (
        <div style={{width: "100%", height: "75vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            {
            loading?
                <Loading />
            :
                <CharacterCard
                    data={ data }
                />
            }

        </div>
    )
}

export default HomePage

