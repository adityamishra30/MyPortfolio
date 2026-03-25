import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead — DevUp College Club</h4>
                <h5>Workshops & Tech Community</h5>
              </div>
              <h3>PRESENT</h3>
            </div>
            <p>
              Organized and led technical workshops and hackathons. Mentored students in full-stack development and DSA, and collaborated on real-world software projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Projects-Based Experience</h4>
                <h5>MERN Stack & AI Integration</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built multiple production-level MERN and ML applications. Experience integrating AI models into web apps. Strong in REST APIs, backend design, and deployment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Competitive Programming Coordinator</h4>
                <h5>DSA Mentorship</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Guided 20+ students in DSA and problem-solving sessions. Played a key role in improving the coding culture and boosting contest participation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
