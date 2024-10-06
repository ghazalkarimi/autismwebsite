import headerpic from './Img/header1.jpg';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/react-splide/css';
import logo from './Img/moana.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {

    const options4 = {
        perPage: 4,
        perMove: 4,
        pagination: true,
        arrows: true,
    };
    const options3 = {
        perPage: 3,
        perMove: 3,
        pagination: true,
        arrows: true,
    };
    const options2 = {
        perPage: 2,
        perMove: 2,
        pagination: true,
        arrows: true,
    };
    const options1 = {
        perPage: 1,
        perMove: 1,
        pagination: true,
        arrows: true,
    };
    return (
        <div>
            <div className="mask-section">
                <div className="content">
                    <h1>Find Digital Entertainment
                        For Autism
                    </h1>
                </div>
            </div>
            <div>

                {/* //Screen-4 */}
                <div className='screen4'>
                    <div className='margin-posts'>
                        <p>
                            <h4>Popular Posts
                                <FontAwesomeIcon className="cheviconsize" icon="fa-solid fa-chevron-right" />
                            </h4></p>
                        <Splide
                            options={options4}
                            aria-label="My Favorite Images"
                        >
                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description1:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description2:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description3:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description4:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description5:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description6:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                            </SplideSlide>

                            <SplideSlide>
                            </SplideSlide>

                        </Splide>
                    </div>
                    <div className='margin-posts'>
                        <p>
                            <h4>Newest Releases
                                <FontAwesomeIcon className="cheviconsize" icon="fa-solid fa-chevron-right" />
                            </h4>
                        </p>
                        <Splide
                            options={options4}
                            aria-label="My Favorite Images"
                        >
                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                            </SplideSlide>

                            <SplideSlide>
                            </SplideSlide>

                        </Splide>
                    </div>
                    <div className='margin-posts'>
                        <p>
                            <h4>Recommended
                                <FontAwesomeIcon className="cheviconsize" icon="fa-solid fa-chevron-right" />
                            </h4>
                        </p>
                        <Splide
                            options={options4}
                            aria-label="My Favorite Images"
                        >
                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                            </SplideSlide>

                            <SplideSlide>
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>

                {/* //Screen-3 */}
                <div className='screen3'>
                    <div className='margin-posts'>
                        <p>
                            <h4>Popular Posts
                                <FontAwesomeIcon className="cheviconsize" icon="fa-solid fa-chevron-right" />
                            </h4>
                        </p>
                        <Splide
                            options={options3}
                            aria-label="My Favorite Images"
                        >
                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                        </Splide>
                    </div>
                    <div className='margin-posts'>
                        <p><h4>Newest Releases
                            <FontAwesomeIcon className="cheviconsize" icon="fa-solid fa-chevron-right" />
                        </h4></p>
                        <Splide
                            options={options3}
                            aria-label="My Favorite Images"
                        >
                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                        </Splide>
                    </div>
                    <div className='margin-posts'>
                        <p><h4>Recommended
                            <FontAwesomeIcon className="cheviconsize" icon="fa-solid fa-chevron-right" />
                        </h4></p>
                        <Splide
                            options={options3}
                            aria-label="My Favorite Images"
                        >
                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                        </Splide>
                    </div>
                </div>
                {/* //Screen2 */}
                <div className='screen2'>
                    <div className='margin-posts'>
                        <p><h4>Popular Posts
                            <FontAwesomeIcon className="cheviconsize" icon="fa-solid fa-chevron-right" />
                        </h4></p>
                        <Splide
                            options={options2}
                            aria-label="My Favorite Images"
                        >
                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                        </Splide>
                    </div>
                    <div className='margin-posts'>
                        <p><h4>Newest Releases
                            <FontAwesomeIcon className="cheviconsize" icon="fa-solid fa-chevron-right" />
                        </h4></p>
                        <Splide
                            options={options2}
                            aria-label="My Favorite Images"
                        >
                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                        </Splide>
                    </div>
                    <div className='margin-posts'>
                        <p><h4>Recommended
                            <FontAwesomeIcon className="cheviconsize" icon="fa-solid fa-chevron-right" />
                        </h4></p>
                        <Splide
                            options={options2}
                            aria-label="My Favorite Images"
                        >
                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src={logo} alt="Card image cap" />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <div className='border-type col-lg-12 row'>
                                                <div className='col-lg-3 col-md-3 col-sm-3'>
                                                    <div>Type:</div>
                                                    <div>Video</div>
                                                </div>
                                                <div className='border-text col-lg-4 col-md-4 col-sm-4'>
                                                    <div>Age:</div>
                                                    <div>All ages</div>
                                                </div>
                                                <div className='container col-lg-5 col-md-5 col-sm-5'>
                                                    <div>Device:</div>
                                                    <div>All Devices</div>
                                                </div>
                                            </div>
                                        </p>
                                        <p className="card-text">
                                            <h6>Description:</h6>
                                            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ...
                                        </p>
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                        </Splide>
                    </div>
                </div>
                {/* //Screen1 */}
                <div className='screen1'>
                    <div className='margin-posts'>
                        <p><h4>Popular Posts
                            <FontAwesomeIcon className="cheviconsize" icon="fa-solid fa-chevron-right" />
                        </h4></p>
                        <Splide
                            options={options1}
                            aria-label="My Favorite Images"
                        >
                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                        </Splide>
                    </div>
                    <div className='margin-posts'>
                        <p><h4>Newest Releases
                            <FontAwesomeIcon className="cheviconsize" icon="fa-solid fa-chevron-right" />
                        </h4></p>
                        <Splide
                            options={options1}
                            aria-label="My Favorite Images"
                        >
                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                        </Splide>
                    </div>
                    <div className='margin-posts'>
                        <p><h4>Recommended
                            <FontAwesomeIcon className="cheviconsize" icon="fa-solid fa-chevron-right" />
                        </h4></p>
                        <Splide
                            options={options1}
                            aria-label="My Favorite Images"
                        >
                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="container card" style={{ width: '18rem' }}>
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
                                        <a href="#" className="see-more-btn btn btn-orange">See More</a>
                                    </div>
                                </div>
                            </SplideSlide>

                        </Splide>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Home;