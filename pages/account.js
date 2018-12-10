import Header from '../components/Header';
import fetch from 'isomorphic-fetch';

const Account = (props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <br /> <br />
        <div className="row">
          <div className="col-md-8">
            <h1 style={{fontWeight: 800}}> username456 </h1>
            <p className="text-muted">Sophomore in SEAS</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-muted">User Statistics</p>
            <div class="card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">95% mindful <a href="/about"><span class="badge badge-secondary">?</span></a></li>
                <li class="list-group-item">Contributed to 63 discussions</li>
              </ul>
            </div>
            <br />
            <p className="text-muted">Recent Activity</p>
            <div class="card" style={{marginBottom: "0.5rem"}}>
              <div class="card-body">
                <small class="text-muted">December 6th, 2018</small>
                <p style={{marginBottom: "0.5rem"}}>Math 114 is really difficult to me.</p>
                <a href="#" class="card-link">Agree</a>
                <a href="#" class="card-link">Comment</a>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <small class="text-muted">December 5th, 2018</small>
                <p style={{marginBottom: "0.5rem"}}>Class board's dog needs to make a comeback.</p>
                <a href="#" class="card-link">Agree</a>
                <a href="#" class="card-link">Comment</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <p className="text-muted">Recommended Discussions</p>
            <div class="card" style={{marginBottom: "0.5rem"}}>
              <div class="card-body">
                <small class="text-muted">1 hour ago</small>
                <p style={{marginBottom: "0.5rem"}}>What is something stressful about Penn?</p>
                <a href="#" class="card-link">Answer</a>
              </div>
            </div>
            <div class="card" style={{marginBottom: "0.5rem"}}>
              <div class="card-body">
                <small class="text-muted">4 hours ago</small>
                <p style={{marginBottom: "0.5rem"}}>What's your favourite dessert on campus?</p>
                <a href="#" class="card-link">Answer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Account.getInitialProps = async(query) => {
  // const request = await fetch();
  // const response = await res.json()
  return {};
}

export default Account;