import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

import crunchyroll from "../images/crunchyroll.svg"
import funimation from "../images/funimation.svg"
import netflix from "../images/netflix.svg"


const AnimePage = () => (

	<>
    <SEO title="Anime" />
      <div>

     

      <section className="hero--interior-page">
				<h1 className="hero__gradient-underline background-gradient--anime">Anime Schedule</h1>
      		</section>

			<div className="anime-days">
          <div className="single-anime-day">
          <h2 class="anime-day-title">Sunday</h2>
              <div className="shows-grid">
                <div className="show-container">
                  <img src="https://img1.ak.crunchyroll.com/i/spire1/ffe5a84ffeafce5f20693f7e9b6ff0151579221442_full.jpg" alt="Boruto Show Poster" />
                  <h3>Boruto: Naruto Next Generations</h3>
                  <img className="show-source" src={crunchyroll} alt="Crunchyroll" />
                </div>
                <div className="show-container">
                  <img src="https://img1.ak.crunchyroll.com/i/spire4/0147a7268ae1c79b111c8fd62fbe8fbe1433796778_full.jpg" alt="Daiya Show Poster" />
                  <h3>Ace of the Diamond Act II</h3>
                  <img className="show-source" src={crunchyroll} alt="Crunchyroll" />
                </div>
              </div>
          </div>

          <div className="single-anime-day">
          <h2 class="anime-day-title">Monday</h2>
              <div className="shows-grid">
                <div className="show-container">
                  <img src="https://img1.ak.crunchyroll.com/i/spire3/113723dbe198372b4cbede38898083991554421405_full.jpg" alt="Fruits Basket Show Poster" />
                  <h3>Fruits Basket Season 2</h3>
                  <img className="show-source" src={crunchyroll} alt="Crunchyroll" />
                </div>
                <div className="show-container">
                  <img src="https://img1.ak.crunchyroll.com/i/spire3/ec5a8f70373f31fdafcc3cf5328018621570198379_full.jpg" alt="Woodpecker Show Poster" />
                  <h3>Woodpecker Detective's Office</h3>
                  <img className="show-source" src={crunchyroll} alt="Crunchyroll" />
                </div>
              </div>
          </div>

          <div className="single-anime-day">
          <h2 class="anime-day-title">Tuesday</h2>
              <div className="shows-grid">
              <div className="show-container">
                  <img src="https://img1.ak.crunchyroll.com/i/spire4/0147a7268ae1c79b111c8fd62fbe8fbe1433796778_full.jpg" alt="Daiya Show Poster" />
                  <h3>Ace of the Diamond Act II</h3>
                  <img className="show-source" src={crunchyroll} alt="Crunchyroll" />
                </div>
                <div className="show-container">
                  <img src="https://m.media-amazon.com/images/M/MV5BZmUzMThjOTItZGY4ZS00ODcwLTliNTMtYjVkM2JmY2QxNmRhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg" alt="Violet Show Poster" />
                  <h3>Violet Evergarden</h3>
                  <img className="show-source" src={netflix} alt="Netflix" />
                </div>
              </div>
          </div>

          <div className="single-anime-day">
          <h2 class="anime-day-title">Wednesday</h2>
          <div className="shows-grid">
              <div className="show-container">
                  <img src="https://img1.ak.crunchyroll.com/i/spire4/0147a7268ae1c79b111c8fd62fbe8fbe1433796778_full.jpg" alt="Daiya Show Poster" />
                  <h3>Ace of the Diamond Act II</h3>
                  <img className="show-source" src={crunchyroll} alt="Crunchyroll" />
                </div>
                <div className="show-container">
                  <img src="https://m.media-amazon.com/images/M/MV5BZmUzMThjOTItZGY4ZS00ODcwLTliNTMtYjVkM2JmY2QxNmRhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg" alt="Violet Show Poster" />
                  <h3>Violet Evergarden</h3>
                  <img className="show-source" src={netflix} alt="Netflix" />
                </div>
              </div>
          </div>

          <div className="single-anime-day">
          <h2 class="anime-day-title">Thursday</h2>
              <div className="shows-grid">
              <div className="show-container">
                  <img src="https://res.cloudinary.com/sfp/image/upload/q_60/cste/bf63d51c-a25a-47da-a5d6-91e33d46f0fc.jpg" alt="Kakushigoto Show Poster" />
                  <h3>Kakushigoto</h3>
                  <img className="show-source" src={funimation} alt="Funimation" />
                </div>
                <div className="show-container">
                  <img src="https://res.cloudinary.com/sfp/image/upload/q_60/cste/6f27f824-cb1c-42b3-92ee-c40a53665b89.jpg" alt="Millionaire Show Poster" />
                  <h3>The Millionaire Detective - Balance: UNLIMITED</h3>
                  <img className="show-source" src={funimation} alt="Funimation" />
                </div>
                
              </div>
          </div>

          <div className="single-anime-day">
          <h2 class="anime-day-title">Friday</h2>
              <div className="shows-grid">
                
                <div className="show-container">
                  <img src="https://pbs.twimg.com/media/ESEOkWIUwAA21iw?format=jpg&name=4096x4096" alt="Food Wars Show Poster" />
                  <h3>Food Wars: The Fifth Plate</h3>
                  <img className="show-source" src={crunchyroll} alt="Crunchyroll" />
                </div>
                <div className="show-container">
                  <img src="https://m.media-amazon.com/images/M/MV5BZmUzMThjOTItZGY4ZS00ODcwLTliNTMtYjVkM2JmY2QxNmRhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg" alt="Violet Show Poster" />
                  <h3>Violet Evergarden</h3>
                  <img className="show-source" src={netflix} alt="Netflix" />
                </div>
              </div>
          </div>

          <div className="single-anime-day">
          <h2 class="anime-day-title">Saturday</h2>
              <div className="shows-grid">
              <div className="show-container">
                  <img src="https://img1.ak.crunchyroll.com/i/spire2/39ab3edc4b030998d5122c2b6db9d12e1585964438_full.jpg" alt="SING Show Poster" />
                  <h3>SING "YESTERDAY" FOR ME</h3>
                  <img className="show-source" src={crunchyroll} alt="Crunchyroll" />
                </div>
                <div className="show-container">
                  <img src="https://res.cloudinary.com/sfp/image/upload/q_60/cste/82a26997-8c3b-4379-8b2b-09a0803f9bc1.jpg" alt="Kaguya-sama Show Poster" />
                  <h3>Kaguya-Sama: Love is War?</h3>
                  <img className="show-source" src={funimation} alt="Funimation" />
                </div>
              </div>
          </div>
      </div>

      <section className="contact-grid">
					<div>
						<p>I'm always looking to make friends and start new projects! Please consider hiring me for your next website!</p>
					</div>
					<div>
						<Link to="contact" className="button background-gradient--contact">Contact</Link>
					</div>
				</section>

			</div>
        
      

	</>



)



export default AnimePage