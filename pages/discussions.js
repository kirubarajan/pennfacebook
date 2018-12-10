import Header from '../components/Header';
import fetch from 'isomorphic-fetch';

const Discussions = (props) => {
  return (
    <div>
      <Header />
      <br /> <br />
      <div className="container"> 
        <div className="row">
          <div className="col-md-8">
            <h1 style={{fontWeight: 800}}>Discussions</h1>
            <p className="text-muted">Some outlets for you to express your thoughts:</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
           <div class="card" style={{marginBottom: "0.5rem"}}>
              <div class="card-body">
                <small class="text-muted">4 hours ago</small>
                <p style={{marginBottom: "0.5rem"}}>What's your happy place?</p>
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

Discussions.getInitialProps = async(query) => {
  // const request = await fetch();
  // const response = await res.json()
  return {};
}

export default Discussions;