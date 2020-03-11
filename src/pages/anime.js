import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import rslogo from "../images/rs-logo.svg"


const AnimePage = () => (

	<>
    <SEO title="Anime" />
      <div>

      <section className="hero--interior-page hero__background-gradient--anime">
				<h1>Anime Schedule</h1>
      		</section>

			<div className="content-wrapper">

        <h2 className="centered">Sunday</h2>

				<section className="main-section articles-container-grid">
						<article className="centered gray">
              <h3>Boruto: Naruto Next Generations</h3>
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97938-eqZi4WQk5wRU.jpg" alt="Boruto" />
						</article>

            <article className="centered gray">
              <h3>Ace of the Diamond: Second Season</h3>
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx18689-HrvWZjpWvxMr.jpg" alt="Daiya" />
						</article>
				</section>

        <hr className="hr--anime" />

        <h2 className="centered">Monday</h2>
        <section className="main-section articles-container-grid">
						<article className="centered gray">
              <h3>Keep Your Hands Off Eizouken!</h3>
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx109298-YvjfI88hX76T.png" alt="Eizouken" />
						</article>

            <article className="centered gray">
              <h3>Re:Zero − Starting Life in Another World</h3>
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21355-KaZA3hpWpn7N.jpg" alt="Re:Zero" />
						</article>
				</section>

        <hr className="hr--anime" />


        <h2 className="centered">Tuesday</h2>
        <section className="main-section articles-container-grid">
            <article className="centered gray">
              <h3>Ace of the Diamond: Second Season</h3>
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx18689-HrvWZjpWvxMr.jpg" alt="Daiya" />
						</article>

            <article className="centered gray">
              <h3>Re:Zero − Starting Life in Another World</h3>
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21355-KaZA3hpWpn7N.jpg" alt="Re:Zero" />
						</article>
				</section>

        <hr className="hr--anime" />

        <h2 className="centered">Wednesday</h2>
        <section className="main-section articles-container-grid">
            <article className="centered gray">
              <h3>Ace of the Diamond: Second Season</h3>
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx18689-HrvWZjpWvxMr.jpg" alt="Daiya" />
						</article>

            <article className="centered gray">
              <h3>Re:Zero − Starting Life in Another World</h3>
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21355-KaZA3hpWpn7N.jpg" alt="Re:Zero" />
						</article>
				</section>

        <hr className="hr--anime" />


        <h2 className="centered">Thursday</h2>
        <section className="main-section articles-container-grid">
						<article className="centered gray">
              <h3>Ace of the Diamond: Second Season</h3>
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx18689-HrvWZjpWvxMr.jpg" alt="Daiya" />
						</article>

            <article className="centered gray">
              <h3>The Case Files of Jeweler Richard</h3>
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx111951-vzX8hv9fl9pR.png" alt="Jeweler" />
						</article>
				</section>

        <hr className="hr--anime" />


        <h2 className="centered">Friday</h2>
        <section className="main-section articles-container-grid">
						<article className="centered gray">
              <h3>HAIKYU‼ TO THE TOP</h3>
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx106625-UR22wB2NuNVi.png" alt="Haikyuu" />
						</article>

            <article className="centered gray">
              <h3>Toilet-bound Hanako-kun</h3>
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108463-knWkFUR311ho.jpg" alt="Hanako" />
						</article>
				</section>

        <hr className="hr--anime" />

        <h2 className="centered">Saturday</h2>
        <section className="main-section articles-container-grid">
						<article className="centered gray">
              <h3>My Hero Academia Season 4</h3>
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx104276-DplpGzgCoRZX.jpg" alt="Academia" />
						</article>

            <article className="centered gray">
              <h3>Re:Zero − Starting Life in Another World</h3>
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21355-KaZA3hpWpn7N.jpg" alt="Re:Zero" />
						</article>
				</section>


        <hr className="hr--anime" />

				<section className="contact-grid content-section">
					<div>
						<p>I’m always looking to make friends and start new projects! Please consider hiring me for your next website!</p>
					</div>
					<div>
						<Link to="contact" className="contact-button contact-button--anime">Contact</Link>
					</div>
				</section>

			</div>

      </div>
        
      

	</>



)



export default AnimePage