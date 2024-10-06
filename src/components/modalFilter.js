import { useState } from "react";
import { Link } from 'react-router-dom';

const ModalFilter = () => {

    const [color, setColor] = useState("white")

    const [activeButton, setActiveButton] = useState(null);

    const buttonStyles = {
        backgroundColor: '#ffff',
        borderColor: '#5f5f61',
        margin: '5px',

    };

    const activeButtonStyle = {
        ...buttonStyles,
        backgroundColor: '#566FA3',
        color: '#F4F5F9'
    };

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    return (
        <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            Filter then Search
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        {/* //Accardion */}
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Digital Entertainment
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div>
                                            <button className="btn btn-light"
                                                style={activeButton === 0 ? activeButtonStyle : buttonStyles}
                                                onClick={() => handleButtonClick(0)}
                                            >
                                                All
                                            </button>
                                            <button className="btn btn-light"
                                                style={activeButton === 1 ? activeButtonStyle : buttonStyles}
                                                onClick={() => handleButtonClick(1)}
                                            >
                                                Videos
                                            </button>
                                            <button className="btn btn-light"
                                                style={activeButton === 2 ? activeButtonStyle : buttonStyles}
                                                onClick={() => handleButtonClick(2)}
                                            >
                                                Games
                                            </button>
                                            <button className="btn btn-light"
                                                style={activeButton === 3 ? activeButtonStyle : buttonStyles}
                                                onClick={() => handleButtonClick(3)}
                                            >
                                                Music
                                            </button>
                                            <button className="btn btn-light"
                                                style={activeButton === 4 ? activeButtonStyle : buttonStyles}
                                                onClick={() => handleButtonClick(4)}
                                            >
                                                E-Books
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Devices
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <button className="btn btn-light"
                                            style={activeButton === 5 ? activeButtonStyle : buttonStyles}
                                            onClick={() => handleButtonClick(5)}
                                        >
                                            All
                                        </button>
                                        <button className="btn btn-light"
                                            style={activeButton === 6 ? activeButtonStyle : buttonStyles}
                                            onClick={() => handleButtonClick(6)}
                                        >
                                            PC / Laptop
                                        </button>
                                        <button className="btn btn-light"
                                            style={activeButton === 7 ? activeButtonStyle : buttonStyles}
                                            onClick={() => handleButtonClick(7)}
                                        >
                                            Tablet
                                        </button>
                                        <button className="btn btn-light"
                                            style={activeButton === 8 ? activeButtonStyle : buttonStyles}
                                            onClick={() => handleButtonClick(8)}
                                        >
                                            Mobile
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Age Groups
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" defaultChecked />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                All Ages
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                3-7
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                7-10
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                10-15
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                15-18
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                +18
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //Accardion */}

                    </div>
                    <div className="modal-footer">
                        <div className="row col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <button
                                    type="button"
                                    className="btn btn-orangenull full-width"
                                    data-bs-dismiss="modal"
                                >
                                    Clear all
                                </button>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                <Link className="nav-link" to="/searchresult">
                                    <button type="button"
                                        data-bs-dismiss="modal"
                                        aria-label="Close" 
                                        className="btn btn-orange full-width">
                                        Search Here
                                    </button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalFilter;