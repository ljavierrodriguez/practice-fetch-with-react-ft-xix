import React from 'react'

const CardInfo = ({ name, image, origin, species }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{origin?.name} {origin?.info?.type}</p>
                        <p className="card-text"><small className="text-muted">{species}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardInfo