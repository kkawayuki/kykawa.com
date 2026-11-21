function About() {
    return (
		<section id="about" className="about">
			<div className="about-container">
				<h2>about</h2>
				<p>
					I'm Kent Kawashima, a Software Engineering student at UC
					Irvine graduating June 2027. Based in the bay area, I like working on fullstack projects and creating web interfaces for various types of apps alike.
				</p>
				<p>
					Beyond my own projects, I’m an Undergraduate Researcher in
					UCI’s{" "}
					<a
						className="inlineLink"
						target="_blank"
						href="https://spideruci.org/author/kent-kawashima/"
					>
						Spider Lab
					</a>
					, where I’m exploring how LLMs can be
					used to optimize PIT mutation testing in Java (Maven)
					repositories. I also work as a Reader for
					UCI’s 45J Java course, supporting 165 students through online
					forum q&a.
				</p>
				<p>
					Outside of code, I make
					digital illustrations, edit videos, and study Japanese. I'm currently looking for
					software engineering internships and newgrad jobs for summer
					2027.
				</p>
			</div>
		</section>
	);
}

export default About;
