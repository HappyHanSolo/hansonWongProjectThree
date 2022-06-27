const DisplayRestaurants = (props) => {
    return(
            <section className="bobbaRestuarantResults">
                    <ul>
                        <li className="bobbaRestaurant">
                            <h3>{props.restuarantName}</h3>
                            <img src={props.restuarantPic} alt={`Showcasing ${props.restuarantName} location and product`}/>
                            <h4>{props.restuarantLocation}</h4>
                            <p>{props.price}</p>
                        </li>
                    </ul>
            </section>
    )
}

export default DisplayRestaurants