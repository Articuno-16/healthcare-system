import {Button} from 'react-bootstrap'

const Contact = () => {
    return (
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
          </div>
          <div className="col-lg-8 py-3">
            <form
              className="form-contact contact_form"
              action="contact_process.php"
              method="post"
              id="contactForm"
              noValidate="novalidate"
            >
              <div className="row">
                <div className="col-12 my-2">
                  <div className="form-group">
                    <textarea
                      className="form-control w-100"
                      name="message"
                      id="message"
                      cols="30"
                      rows="9"
                      onFocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Enter Message'"
                      placeholder=" Name"
                    ></textarea>
                  </div>
                </div>
                <div className="col-sm-6 my-2">
                  <div className="form-group">
                    <input
                      className="form-control valid"
                      name="name"
                      id="name"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Enter your name'"
                      placeholder="Enter your name"
                    ></input>
                  </div>
                </div>
                <div className="col-sm-6 my-2">
                  <div className="form-group">
                    <input
                      className="form-control valid"
                      name="email"
                      id="email"
                      type="email"
                      onfocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Enter email address'"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div className="col-12 my-2">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      onfocus="this.placeholder = ''"
                      onBlur="this.placeholder = 'Enter Subject'"
                      placeholder="Enter Subject"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <Button type="submit" variant="outline-dark">
                  Send
                </Button>
              </div>
            </form>
          </div>
          <div className="col-lg-3 offset-lg-1 text-center py-3">
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-home"></i>
              </span>
              <div className="media-body">
                <h3>Buttonwood, California.</h3>
                <p>Rosemead, CA 91770</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-tablet"></i>
              </span>
              <div className="media-body">
                <h3>+1 253 565 2365</h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-email"></i>
              </span>
              <div className="media-body">
                <h3>support@colorlib.com</h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Contact;
  