// Write your code here
export default function MatchCard({item}) {
  return (
    <>
      <img src={item.competing_team_logo} />
      <p>{item.competing_team}</p>
      <p>{item.result}</p>
      <p>{item.match_status}</p>
    </>
  )
}
