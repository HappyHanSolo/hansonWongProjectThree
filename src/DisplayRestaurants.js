const DisplayRestaurants = (props) => {
    return(
        <div>
            <section className="bobbaRestuarantResults">
                <section className="gallery">
                    <div className="photoContainer">
                        <img src={props.restuarantPic} alt={`Showcasing ${props.restuarantName} location and product`}/>
                        <h2>{props.restuarantName}</h2>
                        <h3>{props.restuarantLocation}</h3>
                        <p>{props.price}</p>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default DisplayRestaurants