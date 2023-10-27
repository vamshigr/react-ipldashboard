// Write your code here
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import TeamCard from '../../components/TeamCard'
import Loader from 'react-loader-spinner'

export default function Home() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch('https://apis.ccbp.in/ipl')
      .then(res => res.json())
      .then(res => setTeams(res.teams))
  }, [])

  const teamsArray = teams.map(team => (
    <li key={team.id}>
      <TeamCard team={team} />
    </li>
  ))

  return (
    <>
      {teamsArray.length > 0 ? (
        <ul>{teamsArray}</ul>
      ) : (
        <div data-testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        </div>
      )}
    </>
  )
}
