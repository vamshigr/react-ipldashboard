import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import MatchCard from '../../components/MatchCard'
import LatestMatch from '../../components/LatestMatch'

export default function TeamMatches() {
  const [match, setMatch] = useState({})
  const [recentMatches, setRecentMatches] = useState([])
  const {id} = useParams()

  useEffect(() => {
    fetch(`https://apis.ccbp.in/ipl/${id}`)
      .then(res => res.json())
      .then(res => {
        setRecentMatches(res.recent_matches)
        setMatch({
          teamBannerUrl: res.team_banner_url,
          latestMatchDetails: res.latest_match_details,
        })
      })
  }, [id])

  const matchesArray = recentMatches.map(item => (
    <li key={item.id}>
      <MatchCard item={item} />
    </li>
  ))

  return (
    <>
      {recentMatches.length > 0 && match.latestMatchDetails ? (
        <div>
          <img src={match.teamBannerUrl} alt="my" />
          <LatestMatch latest={match.latestMatchDetails} />
          <ul>{matchesArray}</ul>
        </div>
      ) : (
        <div data-testid="loader">
          <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
        </div>
      )}
    </>
  )

  // Rest of your component code
}
