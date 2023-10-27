// Write your code here

export default function LatestMatch({latest}) {
  return (
    <>
      <h1>LatestMatch</h1>
      <div>
        <p>{latest.competing_team}</p>
        <p>{latest.date}</p>
        <p>{latest.venue}</p>
        <p>{latest.result}</p>
        <img src={latest.competing_team_logo} />
      </div>
      <div>
        <p>First Innings</p>
        <p>{latest.first_innings}</p>
        <p>Second Innings</p>
        <p>{latest.second_innings}</p>
        <p>Man of the Match</p>
        <p>{latest.man_of_the_match}</p>
      </div>
    </>
  )
}
