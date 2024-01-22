import React from "react";
import { Link } from "react-router-dom";

/** Shows information about dark chocolate
 *
 * Props:
 * - none
 *
 * State:
 * - none
 *
 * App -> Router ~> DarkChocolate
*/
function DarkChocolate(){
  return (
    <div>
      <h1>Dark Chocolate</h1>
      <p>This chocolate is relatively healthy. Maybe. </p>
      <Link to='/'>Go back</Link>
    </div>
  )
}


export default DarkChocolate;