import React from 'react'
import {Link} from 'react-router-dom'

function Categories(props) {
    const categories = [
        "Countries",
        "Animals",
        "Things"
    ]

    return (
        <div style={containerStyle}>
            {categories.map((category, idx) => {
                return <Link key={idx} style={childStyle} to={`/categories/${category}`}>{category}</Link> 
            })}
        </div>
    )
}

const containerStyle = {
    display: "flex",
    flexFlow: "row wrap"
}

const childStyle = {
    flex: "1 1 50%"
}

export default Categories
