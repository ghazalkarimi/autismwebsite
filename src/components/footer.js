import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

    
    return (
        <footer className="first-footer py-4 bg-light">
            <div className="first-footer container-fluid px-4">
                <div className="first-footer row col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="row col-lg-7 col-md-7 col-sm-12 col-12">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">About Us</div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">Jobs</div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">Explore</div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">Contact Us</div>
                    </div>
                    <div className="offset-md-1 row col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                            <FontAwesomeIcon icon="fa-brands fa-facebook" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                            <FontAwesomeIcon icon="fa-brands fa-instagram" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                            <FontAwesomeIcon icon="fa-brands fa-twitter" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                        </div>
                    </div>
                </div>
                <div className="second-footer row col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">© 2024 digital entertainment for autism.</div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">Terms of Service & Policy</div>
                </div>
            </div>

        </footer>
    )
}
export default Footer;