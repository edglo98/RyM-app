import React from 'react'
import PropTypes from 'prop-types'
import "./styles.css"

function CharacterCard({ data }) {
    console.log(data)
    const { name, image } = data

    return (
        <>
            <div style={{width: 300}}>
                <img src={ image } alt={ name } style={{width: "100%"}} className="charcater-card__img"/>
            </div>
            <h1 className="charcater-card__name">{ name }</h1>
        </>
    )
}

CharacterCard.propTypes = {
    data: PropTypes.object.isRequired
}

export default CharacterCard

