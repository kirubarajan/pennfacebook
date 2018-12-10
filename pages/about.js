import Header from '../components/Header';

const About = () => (
  <div>
    <Header />
    <div class="jumbotron jumbotron-fluid" style={{backgroundColor: "white"}}>
      <div class="container">
        <h1 class="display-4" style={{fontWeight: 800}}>Penn Face: deconstructed.</h1>
        <p class="lead">
          Social media is often intimidating for students at a school like Penn, where
          competitive academic culture can perpetuate the phenomenom <strong>"Penn Face":</strong> a case of imposter syndrome
          where students hide from sharing their struggles.
          <br /> <br />

          <strong>PennFace Book</strong> was built to be <mark>anonymous</mark>, 
          a platform that encourages the genuine discussion of issues that affect students, 
          without worry of reprocussion. We use a machine learning algorithm that analyzes your
          anonymized statuses, comments and messages in order to track your progress towards a healthy mindset.
          You can either keep this progress to yourself, or share it with your network - hoping to put an end to Penn Face. 
        </p>
      </div>
    </div>
  </div>
);
    
export default About;