const Pages = () => {
    return (
      <div>
        <div className="welcome_docmed_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="welcome_thumb">
                  <div className="thumb_1">
                    <img src={require("../assets/images/1.png")} alt=""></img>
                  </div>
                  <div className="thumb_2">
                    <img src={require("../assets/images/2.png")} alt=""></img>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="welcome_docmed_info">
                  <h2>Welcome to Docmed</h2>
                  <h3>
                    Best Care For Your <br></br>
                    Good Health
                  </h3>
                  <p>
                    Esteem spirit temper too say adieus who direct esteem. It
                    esteems luckily or picture placing drawing. Apartments
                    frequently or motionless on reasonable projecting expression.
                  </p>
                  <ul>
                    <li>
                      {" "}
                      <i className="flaticon-right"></i> Apartments frequently or
                      motionless.{" "}
                    </li>
                    <li>
                      {" "}
                      <i className="flaticon-right"></i> Duis aute irure dolor in
                      reprehenderit in voluptate.
                    </li>
                    <li>
                      {" "}
                      <i className="flaticon-right"></i> Voluptatem quia voluptas sit
                      aspernatur.{" "}
                    </li>
                  </ul>
                  <a href="#" className="boxed-btn3-white-2">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Pages;