import pendingpic from './Img/mr tumble.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PostDetails = () => {
    return (
        <div>
            <div className="video-position col-lg-12 col-md-12 col-sm-12 col-12">
                <div className='Content-Center'>Video</div>
            </div>
            <div className='container details-post col-lg-12 col-md-12 col-sm-12 col-12'>
                <div className='row'>

                    <div className='col-lg-3 col-md-3 col-sm-3 col-3'>
                        <img className="img-pending-post" src={pendingpic} />
                    </div>
                    <div className='col-lg-9 col-md-9 col-sm-9 col-9'>
                        <div class="sharing col-auto d-flex justify-content-end">
                            <button className="btn btn-like" type="button">
                                <FontAwesomeIcon icon="fa-solid fa-thumbs-up" /> 240
                            </button>
                            <button className="btn btn-dislike me-3" type="button">
                                <FontAwesomeIcon icon="fa-solid fa-thumbs-down" />
                            </button>
                            <button className="btn btn-share me-3" type="button">
                                <FontAwesomeIcon icon="fa-solid fa-paper-plane" /> Share
                            </button>
                            <button className="btn btn-moreoption" type="button">
                                <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
                            </button>
                        </div>
                        <p>
                            **If you want to set a time and use a default message or record a message by your own voice to prepare the child to say goodbye to the digital device after setting time you can click here.
                        </p>
                        <p><strong>Type:</strong> Video</p>
                        <p><strong>Suitable Device:</strong> PC/ Laptop/ Tablet/ Mobile</p>
                        <p><strong>Share link:</strong> https://www.bbc.co.uk/mr-tumble-songs-lets-count-together</p>
                        <p><strong>Description:</strong> This video is from Mr. Tamble that helped me to teach numbers to my child easily.</p>
                        <p><strong>Age Group:</strong> 3-7</p>
                        <p><strong>Requirements:</strong>
                            You can watch this video on a device with windows 7 or later, iBook 1.5 or later.
                        </p>
                    </div>
                </div>
            </div>

            {/* //comment */}
            <div className="comment-section form-group">
                <p><strong>11 Comments</strong></p>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                
            </div>
        </div>
    )
}
export default PostDetails;