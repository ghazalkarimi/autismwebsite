import logo from './Img/moana.jpeg';
import { Link } from 'react-router-dom';

const SearchResult = () => {
    return (
        <div>
            <div className="serach-card card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={logo} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">
                        <div className='border-type col-lg-12 col-12 row'>
                            <div className='col-lg-3 col-3'>
                                <div>Type:</div>
                                <div>Video</div>
                            </div>
                            <div className='border-text col-lg-4 col-4'>
                                <div>Age:</div>
                                <div>All ages</div>
                            </div>
                            <div className='container col-lg-5 col-5'>
                                <div>Device:</div>
                                <div>All Devices</div>
                            </div>
                        </div>
                    </p>
                    <p className="card-text">
                        <h6>Description:</h6>
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                    </p>
                    <Link className="nav-link" to="/postdetails">
                        <div className="see-more-btn btn btn-orange">See More</div>
                    </Link>
                </div>
            </div>
        </div>
    )

}
export default SearchResult;