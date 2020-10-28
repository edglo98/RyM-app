import React from 'react'
import PropTypes from 'prop-types'

function CharacterCard({ data }) {
    console.log(data)
    const { name, image } = data

    return (
        <div>
            <div>{ name }</div>
            <div style={{width: 300}}>
                <img src={ image } alt={ name } style={{width: "100%"}}/>
            </div>
        </div>
    )
}

CharacterCard.propTypes = {
    data: PropTypes.object.isRequired
}

export default CharacterCard

