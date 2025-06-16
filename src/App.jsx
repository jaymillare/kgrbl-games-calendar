import './App.css';

function App() {
	return (
		<div className='container'>
			<div className='header'>
				<h1>⛩️ KGR Basketball League</h1>
				<p>Season 5 Quarterfinals Schedule</p>
			</div>

			{/* <!-- Week 18 --> */}
			<div className='week-section'>
				<div className='week-header'>
					<span>Week 18 - Play-ins & Playoffs</span>
					<span className='week-date'>June 21, 2025</span>
				</div>
				<div className='games-grid'>
					<div className='game-card'>
						<div className='game-time'>4:00 PM</div>
						<div className='game-details'>
							<div className='team-matchup'>
								Kicks Rig-Out <span className='vs'>VS</span> KGR Dragons
							</div>
							<div className='game-type'>Play-Ins</div>
						</div>
						<div className='game-status status-scheduled'>Play-in</div>
					</div>

					<div className='game-card'>
						<div className='game-time'>5:00 PM</div>
						<div className='game-details'>
							<div className='team-matchup'>
								888 Bilyaran <span className='vs'>VS</span> Rice Realtors
							</div>
							<div className='game-type'>Playoffs</div>
						</div>
						<div className='game-status status-playoff'>Playoffs</div>
					</div>

					<div className='game-card'>
						<div className='game-time'>6:30 PM</div>
						<div className='game-details'>
							<div className='team-matchup'>
								ACES Commercial <span className='vs'>VS</span> Snipers
							</div>
							<div className='game-type'>Playoffs</div>
						</div>
						<div className='game-status status-playoff'>Playoffs</div>
					</div>

					<div className='game-card'>
						<div className='game-time'>7:30 PM</div>
						<div className='game-details'>
							<div className='team-matchup'>
								El Patron x Usana <span className='vs'>VS</span> Versatile
							</div>
							<div className='game-type'>Playoffs</div>
						</div>
						<div className='game-status status-playoff'>Playoffs</div>
					</div>
				</div>
			</div>

			{/* <!-- Week 19 - Quarterfinals --> */}
			<div className='week-section'>
				<div className='week-header'>
					<span>Week 19 - Quarterfinals</span>
					<span className='week-date'>June 28, 2025</span>
				</div>
				<div className='games-grid'>
					<div className='game-card'>
						<div className='game-time'>4:00 PM</div>
						<div className='game-details'>
							<div className='team-matchup'>
								A3 Phoenix Stone <span className='vs'>VS</span> 8th Seed
							</div>
							<div className='game-type'>Quarterfinals</div>
						</div>
						<div className='game-status status-playoff'>Playoffs</div>
					</div>

					<div className='game-card'>
						<div className='game-time'>5:00 PM</div>
						<div className='game-details'>
							<div className='team-matchup'>
								888 Bilyaran <span className='vs'>VS</span> Rice Realtors
							</div>
							<div className='game-type'>Quarterfinals (Game 2)</div>
						</div>
						<div className='game-status status-playoff'>Playoffs</div>
					</div>

					<div className='game-card'>
						<div className='game-time'>6:30 PM</div>
						<div className='game-details'>
							<div className='team-matchup'>
								ACES Commercial<span className='vs'>VS</span> Snipers
							</div>
							<div className='game-type'>Quarterfinals (Game 2)</div>
						</div>
						<div className='game-status status-playoff'>Playoffs</div>
					</div>

					<div className='game-card'>
						<div className='game-time'>7:30 PM</div>
						<div className='game-details'>
							<div className='team-matchup'>
								El Patron x Usana <span className='vs'>VS</span> Versatile
							</div>
							<div className='game-type'>Quarterfinals (Game 2)</div>
						</div>
						<div className='game-status status-playoff'>Playoffs</div>
					</div>
				</div>
			</div>

			{/* <!-- Week 20 - Quarterfinals Game 3 --> */}
			<div className='week-section'>
				<div className='week-header'>
					<span>Week 20 - Quarterfinals (If Needed)</span>
					<span className='week-date'>July 5, 2025</span>
				</div>
				<div className='games-grid'>
					<div className='game-card'>
						<div className='game-time'>5:00 PM</div>
						<div className='game-details'>
							<div className='team-matchup'>
								A3 Phoenix Stone <span className='vs'>VS</span> 8th Seed
							</div>
							<div className='game-type'>Quarterfinals (Game 2)</div>
						</div>
						<div className='game-status status-playoff'>If Needed</div>
					</div>

					<div className='game-card'>
						<div className='game-time'>6:30 PM</div>
						<div className='game-details'>
							<div className='team-matchup'>
								QTR Finals Winner <span className='vs'>VS</span> QTR Finals
								Winner
							</div>
							<div className='game-type'>Quarterfinals (3/6)</div>
						</div>
						<div className='game-status status-playoff'>Conditional</div>
					</div>
				</div>
			</div>

			{/* <!-- Week 21 - Semifinals --> */}
			<div className='week-section'>
				<div className='week-header'>
					<span>Week 21 - Semifinals</span>
					<span className='week-date'>July 12, 2025</span>
				</div>
				<div className='games-grid'>
					<div className='empty-week'>
						Games to be scheduled based on quarterfinal results
					</div>
				</div>
			</div>

			{/* <!-- Week 22 - Finals --> */}
			<div className='week-section'>
				<div className='week-header'>
					<span>Week 22 - Finals</span>
					<span className='week-date'>July 19, 2025</span>
				</div>
				<div className='games-grid'>
					<div className='game-card'>
						<div className='game-time'>5:00 PM</div>
						<div className='game-details'>
							<div className='team-matchup'>
								Semifinal Winner <span className='vs'>VS</span> Semifinal Winner
							</div>
							<div className='game-type'>Championship Game</div>
						</div>
						<div className='game-status status-finals'>Finals</div>
					</div>

					<div className='game-card'>
						<div className='game-time'>6:30 PM</div>
						<div className='game-details'>
							<div className='team-matchup'>
								Game 2 (If Needed) <span className='vs'>VS</span> TBD
							</div>
							<div className='game-type'>Championship Series</div>
						</div>
						<div className='game-status status-finals'>If Needed</div>
					</div>
				</div>
			</div>

			<div className='legend'>
				<h3>Schedule Legend</h3>
				<div className='legend-items'>
					<div className='legend-item'>
						<div className='legend-color legend-color-green'></div>
						<span>Play-ins</span>
					</div>
					<div className='legend-item'>
						<div className='legend-color legend-color-orange'></div>
						<span>Playoffs</span>
					</div>
					<div className='legend-item'>
						<div className='legend-color legend-color-purple'></div>
						<span>Semifinals</span>
					</div>
					<div className='legend-item'>
						<div className='legend-color legend-color-red'></div>
						<span>Finals</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
