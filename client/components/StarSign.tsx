import StarSignData from '../../data/star-signs'

import { useParams } from 'react-router-dom'
function StarSign() {
  let { name } = useParams()
  name = name || 'Star Sign not found'
  const starSign = StarSignData[name]
  console.log(starSign)

  // id: number
  // image: string
  // latinName: string
  // element: string
  // birthday: string
  // birthstone: string
  // strengths: string[]
  // weaknesses: string[]
  // horoscope: string

  return (
    <div className="description-horo">
      <h2>{name}</h2>
      <p>Please select a star sign from the nav list</p>
      <img src={`/images/Star signs/${starSign.image}`} alt={`${name}`} />

      <p>{starSign.element}</p>
      <p>{starSign.birthday}</p>
      <p>{starSign.birthstone}</p>
      <p>{starSign.strengths}</p>
      <p>{starSign.weaknesses}</p>
      <p>{starSign.horoscope}</p>
    </div>
  )
}

export default StarSign
