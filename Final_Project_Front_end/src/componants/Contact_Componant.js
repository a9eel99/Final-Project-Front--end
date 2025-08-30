import 'bootstrap/dist/css/bootstrap.min.css';
import "../componant_style/componant.css";

export default function Contact_Componant(){
  return (
    <div className="container my-5">
      <div className="row text-center">
        <div className="col-md-4 mb-4 single_add">
          <i className="ti-map fs-1 mb-2 d-block"></i>
          <h4>Our Location</h4>
          <p>3481 Melrose Place, Beverly Hills <br /> CA 90210</p>
        </div>
        <div className="col-md-4 mb-4 single_add add">
          <i className="ti-mobile fs-1 mb-2 d-block"></i>
          <h4>Telephone</h4>
          <p>(+1) 517 397 7100 <br /> (+1) 411 315 8138</p>
        </div>
        <div className="col-md-4 mb-4 single_add">
          <i className="ti-email fs-1 mb-2 d-block"></i>
          <h4>Send email</h4>
          <p>Info@example.com <br /> admin@example.com</p>
        </div>
      </div>
    </div>
  );
};

