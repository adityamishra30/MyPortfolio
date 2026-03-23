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
                <h4>Started Programming Journey</h4>
                <h5>High School</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Built strong foundations in problem-solving and logic. Began learning
              C/C++ and exploring core programming concepts before entering university.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE (AI/ML)</h4>
                <h5>Agra, Uttar Pradesh</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started Bachelor of Technology in Computer Science, specializing in
              AI & Machine Learning. Focused on mastering Data Structures and Algorithms.
              Currently solved 500+ problems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aspiring Full Stack Developer</h4>
                <h5>Projects & Skill Building</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building scalable real-world web applications. Leveraging the MERN
              stack, Spring Boot, and cutting-edge tech like YOLOv8 frameworks to
              develop impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
