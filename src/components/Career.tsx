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
                <h4>Lead</h4>
                <h5>DevUp College Club</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Led 5+ workshops and hackathons with 150+ participants. Mentored 30+ students in full-stack development and increased engagement by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Coordinator</h4>
                <h5>Competitive Programming</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Organized 10+ coding contests, improved student performance by 25%, and increased participation by 40%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Achievements</h4>
                <h5>Milestones & Hackathons</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Solved 500+ DSA problems. LeetCode Rating: 1615. CodeChef Rating: 1430. Smart India Hackathon Finalist. Innotech Hackathon Finalist (Top 4).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
