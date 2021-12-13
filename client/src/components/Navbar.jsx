import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <Link to='/name'>Name</Link>
      <Link to='/postal'>Postal</Link>
      <Link to='/state'>State</Link>

    </div>
  )
}

export default Navbar