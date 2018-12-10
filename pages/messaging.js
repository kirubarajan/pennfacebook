import Header from '../components/Header';
import fetch from 'isomorphic-fetch';

const Messaging = (props) => {
  return (
    <div>
      <Header />
      <br /> <br />
      <div className="container"> 
        <div className="row">
          <div className="col-md-8">
            <h1 style={{fontWeight: 800}}>Messaging</h1>
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