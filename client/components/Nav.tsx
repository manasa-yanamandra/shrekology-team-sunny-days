import { NavLink, useParams } from 'react-router-dom'
import StarSignsData from '../../data/star-signs'

function Nav() {
  const starSignKeys = Object.keys(StarSignsData)
  const { name } = useParams()
  const starSignValues = Object.values(StarSignsData)

  return (
    <div>
      <h2>Nav</h2>
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'activeNav' : 'nav-link')}
          >
            Home
          </NavLink>
        </li>
        {starSignKeys.map((starSign, index) => (
          <li key={starSign}>
            <NavLink
              to={`/star-signs/${starSign}`}
              className={({ isActive }) =>
                isActive || name === starSign ? 'activeNav' : 'nav-link'
              }
            >
              <div className="star-sign-item">
                <div className="star-sign-image">
                  <img
                    src={`/images/Star signs/${starSignValues[index].image}`}
                    alt="Shrek Astrology"
                    className="symbol"
                  />
                </div>
                <div className="star-sign-info">
                  <p className="star-sign-name">{starSign}</p>
                </div>
                <div>
                  <p className="star-sign-birthday">
                    {starSignValues[index].birthday}
                  </p>
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
