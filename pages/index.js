import Header from '../components/Header';
import fetch from 'isomorphic-fetch';

const Index = (props) => {
  return (
    <div>
      <Header />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-8"> 
            <p className="text-muted">Your Feed</p>
            <div class="card" style={{marginBottom: "0.5rem"}}>
              <div class="card-body">
                <small class="text-muted">December 6th, 2018</small>
                <p style={{marginBottom: "0.2rem", fontWeight: 600}}>andreasthegiant</p>
                <p style={{marginBottom: "0.5rem"}}>I've seen questions of this type before, so I think I'll post a generic answer here and refer to it from other posts where appropriate. </p>
                <a href="#" class="card-link">Agree</a>
                <a href="#" class="card-link">Comment</a>
              </div>
            </div>
            <div class="card" style={{marginBottom: "0.5rem"}}>
              <div class="card-body">
                <small class="text-muted">December 6th, 2018</small>
                <p style={{marginBottom: "0.2rem", fontWeight: 600}}>andreasthegiant</p>
                <p style={{marginBottom: "0.5rem"}}>I've seen questions of this type before, so I think I'll post a generic answer here and refer to it from other posts where appropriate. Briefly, these are questions we've discussed extensively in class, and I am not going to do a re-run of the relevant class here on Piazza. It's 4am on the day of the exam, and I just don't think this kind of question is either reasonable or appropriate. If you have specific questions or something isn't clear, I'll be happy to answer, but I am NOT going to respond to questions of the type "can you just explain threads and processes again". Sorry.</p>
                <a href="#" class="card-link">Agree</a>
                <a href="#" class="card-link">Comment</a>
              </div>
            </div>
            <div class="card" style={{marginBottom: "0.5rem"}}>
              <div class="card-body">
                <small class="text-muted">December 6th, 2018</small>
                <p style={{marginBottom: "0.2rem", fontWeight: 600}}>andreasthegiant</p>
                <p style={{marginBottom: "0.5rem"}}> If you have specific questions or something isn't clear, I'll be happy to answer, but I am NOT going to respond to questions of the type "can you just explain threads and processes again". Sorry.</p>
                <a href="#" class="card-link">Agree</a>
                <a href="#" class="card-link">Comment</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <p className="text-muted">Food For Thought</p>
            <div class="card text-white bg-primary">
              <div class="card-body">
              <blockquote class="blockquote mb-0">
                {props.joke}
              </blockquote>
              </div>
            </div>
            <br />
            <p className="text-muted">Recommended Discussions</p>
            <div class="card" style={{marginBottom: "0.5rem"}}>
              <div class="card-body">
                <small class="text-muted">1 hour ago</small>
                <p style={{marginBottom: "0.5rem"}}>What do you wish people would realize?</p>
                <a href="#" class="card-link">Answer</a>
              </div>
            </div>
            <div class="card" style={{marginBottom: "0.5rem"}}>
              <div class="card-body">
                <small class="text-muted">4 hours ago</small>
                <p style={{marginBottom: "0.5rem"}}>What's your happy place?</p>
                <a href="#" class="card-link">Answer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Index.getInitialProps = async(query) => {
  const request = await fetch("https://icanhazdadjoke.com/", {headers: {'Accept': 'application/json'}});
  const response = await request.json();
  return { joke: response.joke };
}

export default Index;