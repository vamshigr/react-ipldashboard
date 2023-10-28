// Write your code here
import {Link} from 'react-router-dom'
export default function TeamCard({team}) {
  return (
    <>
    <Link to={`/team-matches/${team.id}`}>
      <img src={team.team_image_url} />
      <p>{team.name}</p>
  </Link>
    </>
  )
}
