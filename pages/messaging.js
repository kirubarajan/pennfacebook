import Header from '../components/Header';
import fetch from 'isomorphic-fetch';

const Messaging = (props) => {
  return (
    <div>
      <Header />
      <br /> <br />
      <div className="container"> 
        <div className="row">
          <div className="col-md-4">
            <h1 style={{fontWeight: 800}}>Messaging</h1>
            <p className="text-muted">Unread Messages</p>
            <div class="card">
              <img class="card-img-top" src="https://avatars1.githubusercontent.com/u/436045?s=400&u=92519faf207e6f2ccc75df519ad89d9609a1aea4&v=4" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title" style={{marginBottom: "0.25rem"}}>Davis Haupt</h5>
                <small class="text-muted">Today at 11:59 PM</small>
                <p class="card-text" style={{marginTop: ".25rem"}}>Hey! Just wanted to check in with you and see how you're doing.</p>
                <a href="/chat" class="btn btn-primary">Message</a>
              </div>
            </div>
            <br />
            <p className="text-muted">All Contacts</p>
            <div class="card">
              <img class="card-img-top" src="https://avatars2.githubusercontent.com/u/6424868?s=400&u=481199032fa2426a9c4bb60dcb937966cd8c3ce0&v=4" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title" style={{marginBottom: "0.25rem"}}>Arun Kirubarajan</h5>
                <small class="text-muted">December 9th at 1:00 PM</small>
                <p class="card-text" style={{marginTop: ".25rem"}}>Gotchu, thanks!</p>
                <a href="/chat" class="btn btn-primary">Message</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Messaging.getInitialProps = async(query) => {
  // const request = await fetch();
  // const response = await res.json()
  return {};
}

export default Messaging;