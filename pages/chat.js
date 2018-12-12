import Header from '../components/Header';
import fetch from 'isomorphic-fetch';

const Chat = (props) => {
  return (
    <div>
      <Header />
      <br /> <br />
      <div className="container"> 
        <div className="row">
          <div className="col-md-6">
            <h1 style={{fontWeight: 800}}>Davis Haupt</h1>
            <p className="text-muted">Active 5 Minutes Ago</p>
            <div class="card mb-3" style={{marginBottom: "0rem"}}>
              <div class="card-body">
                <p class="card-text">Hey, how's it going Aimé?</p>
              </div>
            </div>
            <div class="card text-white bg-primary mb-3" style={{marginTop: "0rem"}}>
              <div class="card-body">
                <p class="card-text">Not terrible. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
              </div>
            </div>
            <hr />
            <input class="form-control" type="text" placeholder="Type a message..."></input>
          </div>
        </div>
      </div>
    </div>
  );
}

Chat.getInitialProps = async(query) => {
  return {};
}

export default Chat;