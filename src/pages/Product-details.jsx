import { Link, useParams } from "react-router-dom";

function ProductDetailsPage(){
    const params= useParams();

    return(
        <>
            <h1>Product Details</h1>
            <h3>{params.product_id }</h3>
            <p>
                <Link to='..' relative="path">Go back</Link>
            </p>

        </>
    );
}

export default ProductDetailsPage;