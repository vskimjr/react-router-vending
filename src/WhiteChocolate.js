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
 * App -> Router ~> WhiteChocolate
*/
function WhiteChocolate(){
  return (
    <div>
      <h1>White Chocolate</h1>
      <p>This chocolate is not like the others</p>
      <Link to='/'>Go back</Link>
    </div>
  )

}

export default WhiteChocolate;