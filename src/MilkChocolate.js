import React from "react";
import { Link } from "react-router-dom";

/** Shows information about milk chocolate
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> Router ~> MilkChocolate
*/
function MilkChocolate(){
  return (
    <div>
      <h1>Milk Chocolate</h1>
      <p>Not for the lactose intolerant </p>
      <Link to='/'>Go back</Link>
    </div>
  )

}

export default MilkChocolate;