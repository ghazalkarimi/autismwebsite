import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CreatePost = () => {

    const [file, setFile] = useState(null);

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleFile = (selectedFile) => {
        setFile(selectedFile);
    };

    const handleRemoveFile = () => {
        setFile(null);
    };

    return (
        <div>
            <h1 className="mt-4">Create Post</h1>
            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">
                    Here you can introduce digital entertainment that is used for autism and you want to share them with others.
                </li>
            </ol>
            <form>
                <p>
                    <strong>
                        Select one type of digital entertainment: *
                    </strong>
                </p>

                <div className="form-group row col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6 form-check">
                        <input className="form-check-input" type="radio" name="Radios" id="defaultradio1" />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Video
                        </label>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6 form-check">
                        <input class="form-check-input" type="radio" name="Radios" id="exampleRadios1" value="option1" />
                        <label class="form-check-label" htmlFor="exampleRadios1">
                            Game
                        </label>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6 form-check">
                        <input class="form-check-input" type="radio" name="Radios" id="exampleRadios2" value="option2" />
                        <label class="form-check-label" htmlFor="exampleRadios2">
                            E-Book
                        </label>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6 form-check">
                        <input className="form-check-input" type="radio" name="Radios" id="exampleradio3" />
                        <label className="form-check-label" htmlFor="exampleradio3">
                            Music
                        </label>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 form-check">
                        <div className="row col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-2">
                                <input className="form-check-input" type="radio" name="Radios" id="exampleradio4" />
                                <label className="form-check-label" htmlFor="exampleradio4">
                                    others:
                                </label>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8 col-10">
                                <input type="other" placeholder="Type of digital entertainment" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputlink">
                        <p><strong>Share Link: *</strong></p>
                    </label>
                    <input type="link" className="form-control" id="exampleInputlink" placeholder="Enter Link" />
                    <small id="emailHelp" className="form-text text-muted">
                        Here you can share the link of introduced digital entertainment.
                    </small>
                </div>

                {/* //upload digital entertainment source */}
                <div className='form-group'>
                    <p><strong>If you want to upload the file of digital resources you can upload it here: </strong></p>
                    <div className="container">
                        <div
                            className="upload-zone p-5 mb-3"
                            style={{ border: '2px dashed #007bff', borderRadius: '5px', textAlign: 'center' }}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            {file ? (
                                <div className="alert alert-secondary d-flex justify-content-between align-items-center">
                                    <span>{file.name}</span>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                        onClick={handleRemoveFile}
                                    ></button>
                                </div>
                            ) : (
                                <div>
                                    <FontAwesomeIcon className="upload-logo" icon="fa-solid fa-cloud-arrow-up" />
                                    <p>
                                        Select a file or drag and drop here</p>
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={(e) => handleFile(e.target.files[0])}
                                    />
                                </div>
                            )}
                        </div>

                    </div>
                </div>


                <div className="form-group">
                    <p><strong>Description: *</strong></p>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <small className="form-text text-muted">
                        Here you can explain about the introduced digital entertainment.
                    </small>
                </div>
                <div className="form-group">
                    <p><strong>Select the device(s) that mentioned digital entertainment are suitable for: *</strong></p>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6 form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox1"
                            defaultValue="option1"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">
                            PC / Laptop
                        </label>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6 form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox2"
                            defaultValue="option2"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">
                            Tablet
                        </label>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-4 col-6 form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="inlineCheckbox3"
                            defaultValue="option3"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">
                            Mobile
                        </label>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 form-check form-check-inline">
                        <div className="row col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="col-lg-3 col-md-4 col-sm-4 col-2">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="inlineCheckbox3"
                                    defaultValue="option4"
                                />
                                <label className="form-check-label" htmlFor="inlineCheckbox4">
                                    Other:
                                </label>
                            </div>
                            <div className="col-lg-9 col-md-8 col-sm-8 col-10">
                                <input type="other" placeholder="Type of Device" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* //Age */}
                <div className="col-lg-6 form-group">
                    <p><strong>Select the age group that mentioned digital entertainment are suitable for: *</strong></p>
                    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>All Ages</option>
                        <option value="1">3-7</option>
                        <option value="2">7-10</option>
                        <option value="3">10-15</option>
                        <option value="3">15-18</option>
                        <option value="3">+18</option>
                    </select>
                </div>
                {/* //Requirement */}
                <div className="form-group">
                    <p><strong>Requirements: *</strong></p>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <small className="form-text text-muted">
                        Here you can explain about the requirements that need for using the intriduces digital resources.
                    </small>
                </div>

                {/* //upload cover image */}
                <div className='form-group'>
                    <p><strong>Select an image as a cover image of your post:  </strong></p>
                    <div className="container">
                        <div
                            className="upload-zone p-5 mb-3"
                            style={{ border: '2px dashed #007bff', borderRadius: '5px', textAlign: 'center' }}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            {file ? (
                                <div className="alert alert-secondary d-flex justify-content-between align-items-center">
                                    <span>{file.name}</span>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"
                                        onClick={handleRemoveFile}
                                    ></button>
                                </div>
                            ) : (
                                <div>
                                    <FontAwesomeIcon className="upload-logo" icon="fa-solid fa-cloud-arrow-up" />
                                    <p>
                                        Select a file or drag and drop here</p>
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={(e) => handleFile(e.target.files[0])}
                                    />
                                </div>
                            )}
                        </div>

                    </div>
                </div>
                {/* //Submit and Cancel button */}
                <div className="row col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <button
                            type="button"
                            className="btn btn-orangenull full-width"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                        <button type="button" className="btn btn-orange full-width">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default CreatePost;