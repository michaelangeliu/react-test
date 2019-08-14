import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Yay Michael!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header>
        <h1>Michael Liu</h1>
      </header>
      <main>
        <section className="summary">
          <summary>Detail-oriented Software Developer with a 5+ years experience designing and implementing holistic solutions effectively and efficiently. Developed web applications for multi-national brands. Prototyped new features for an online CRM tool. Skilled in creating new documentation to improve long-term code maintainability, development process, and product stewardship.</summary>
        </section>
        <section className="work-experience">
          <h3>Work Experience</h3>
          <article className="experience">
            <p>
              <span className="organization">Sherpa CRM</span>
              <span className="location">Saint Louis, MO</span>
            </p>
            <p>
              <span className="title">Software Developer</span>
              <span className="time-period">Aug 2017 – Present</span>
            </p>
            <ul>
              <li>Implementing a customizable reporting engine from front-to-back.
                <ul>
                  <li>React/Redux to display the data in tables and visualizations.</li>
                  <li>Javascript to programmatically generate more consistent SQL statements.</li>
                  <li>MySQL/Redshift to query the database.</li>
                </ul>
              </li>
              <li>Collaborating with vendors to build a data warehouse ETL pipeline and Tableau embed.</li>
              <li>Redesigning data models to improve occupancy tracking within the application.</li>
              <li>Standardizing and documenting team coding styles and best practices.</li>
              <li>Defining terminology and identify workflow loopholes with the product team.</li>
              <li>Mentoring junior developers in code optimization and GIT versioning.</li>
            </ul>
          </article>
          <article className="experience">
            <p>
              <span className="organization">We Are Alexander</span>
              <span className="location">Saint Louis, MO</span>
            </p>
            <p>
              <span className="title">Full Stack Web Developer</span>
              <span className="time-period">Sep 2014 – Jul 2017</span>
            </p>
            <ul>
              <li>Developed 10 Ruby on Rails microsites for 6 national brands.</li>
              <li>Implemented VBI and content changes in Adobe Experience Manager for 5 national brands.</li>
              <li>Feature development for Ruby on Rails experiential event tracking application on Heroku.</li>
              <li>Set up Amazon Web Services – Elastic Beanstalk to handle 3 WordPress sites.</li>
              <li>Collaborated with 3rd party vendors to create and update content in 3 iOS applications.</li>
              <li>User Journey creation, Wire-framing, and UX design for corporate social responsibility site.</li>
            </ul>
            <p>
              <span className="title">Digital Intern</span>
              <span className="time-period">May 2014 – Sep 2014</span>
            </p>
            <ul>
              <li>Collaborated with multi-disciplinary team to pitch rebranding campaign based on new strategic direction for national account and created digital concept designs.</li>
              <li>Contributed to discussion about content-centered design best practices.</li>
              <li>Responded to clients’ requests regarding updates in timely and efficient manner.</li>
              <li>Improved user experience for branded digital applications and websites.</li>
              <li>Applied troubleshooting processes to fix existing code and content on brand web pages.</li>
            </ul>
          </article>
        </section>
        <section className="leadership-experience">
          <h3>Leadership Experience</h3>
          <article className="experience">
            <p>
              <span className="organization">Alpha Phi Omega - <em>Alpha Phi Chapter</em></span>
              <span className="time-period">Jan 2011 – May 2014</span>
            </p>
            <p>
              <span className="title">VP of Membership</span>
              <span className="time-period">Aug 2012 – Dec 2013</span>
            </p>
            <ul>
              <li>Planned and coordinated a membership program for 200+ member chapter.</li>
              <li>Managed a committee of 8 members to develop events to strengthen group dynamics.</li>
              <li>Built Google forms and spreadsheets to facilitate the brother-matching program.</li>
              <li>Rebuilt and updated a Google spreadsheet for recording and tracking requirements.</li>
            </ul>
          </article>
          <article className="experience">
            <p>
              <span className="organization">Washington University Pops Orchestra</span>
              <span className="time-period">Sep 2010 – May 2014</span>
            </p>
            <p>
              <span className="title">Treasurer</span>
              <span className="time-period">Aug 2011 – May 2013</span>
            </p>
            <ul>
              <li>Managed a budget of ~$2000 and all music and equipment purchases.</li>
              <li>Organized semester concerts and social events for the orchestra.</li>
              <li>Developed publicity to increase orchestra size and promote concert attendance.</li>
            </ul>
          </article>
        </section>
        <section>
          
        </section>
      </main>
      <footer>
        <p className="contact">
          <a className="email" href="mailto:michaelangeliu@gmail.com" target="_blank" rel="noopener noreferrer">michaelangeliu@gmail.com</a>
          &nbsp;|&nbsp;
          <a className="website" href="http://michaelangeliu.com" target="_blank" rel="noopener noreferrer">http://michaelangeliu.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
