import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import pendingpic from './Img/mr tumble.png'
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <h1 className="mt-4">Profile</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">
                    Ghazal Karimishiraz
                </li>
            </ol>
            <div className="container mt-3">
                <br />
                {/* Nav tabs */}
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-bs-toggle="tab" href="#home">
                            Published post (0)
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#pendingpost">
                            Pending Post (1)
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#followers">
                            Followers (0)
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#following">
                            Following (10)
                        </a>
                    </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                    <div id="home" className="container tab-pane active">
                        <br />
                        <div className='Content-Center'>
                            <h3>No Post Yet</h3>
                            <p>
                                Click Below Button To Create Your First Post
                            </p>
                            <Link className="nav-link" to="/createpost">
                                <button className="visibility btn btn-orange" id="btnNavbarSearch" type="button">
                                    <FontAwesomeIcon icon="fa-solid fa-pen" /> Create Post
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div id="pendingpost" className="container tab-pane">
                        <br />
                        <div>
                            <p>
                                Here you can see the post(s) that you have created and should be submited by admin(s) before publishing.
                            </p>
                            <div className='pending-post row col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
                                    <img className="img-pending-post" src={pendingpic} />
                                </div>
                                <div className='col-lg-9 col-md-9 col-sm-9 col-9'>
                                    <p><strong>Type:</strong> Video</p>
                                    <p><strong>Suitable Device:</strong> PC/ Laptop/ Tablet/ Mobile</p>
                                    <p><strong>Share link:</strong> https://www.bbc.co.uk/mr-tumble-songs-lets-count-together</p>
                                    <p><strong>Description:</strong> This video is from Mr. Tamble that helped me to teach numbers to my child easily.</p>
                                    <p><strong>Age Group:</strong> 3-7</p>
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="row">
                                            <div class="col">
                                            </div>
                                            <div class="col-auto d-flex justify-content-end">
                                                <button className="btn btn-blue me-3" type="button">
                                                    <FontAwesomeIcon icon="fa-solid fa-pen-to-square" /> Edit Post
                                                </button>
                                                <button className="btn btn-orange" type="button">
                                                    <FontAwesomeIcon icon="fa-solid fa-trash" /> Delete Post
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="followers" className="container tab-pane fade">
                        <br />
                        <h3>Followers</h3>
                    </div>
                    <div id="following" className="container tab-pane fade">
                        <br />
                        <h3>Following</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Profile;