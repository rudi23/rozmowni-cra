import './Teachers.css';

function Teachers() {
    return (
        <section className="section-padding bg-grey team-2">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-heading center-heading">
                            <span className="subheading">Best Expert Trainer</span>
                            <h3>Our Professional trainer</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="team-block">
                            <div className="team-img">
                                <img src="assets/images/team/team-4.jpg" alt="" className="img-fluid" />
                            </div>
                            <div className="team-info">
                                <h4>Harish Ham</h4>
                                <p>CEO, Developer</p>
                            </div>
                            <ul className="team-socials list-inline">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="team-block">
                            <div className="team-img">
                                <img src="assets/images/team/team-1.jpg" alt="" className="img-fluid" />
                            </div>
                            <div className="team-info">
                                <h4>Tanvir Hasan</h4>
                                <p>Market Researcher</p>
                            </div>
                            <ul className="team-socials list-inline">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="team-block">
                            <div className="team-img">
                                <img src="assets/images/team/team-2.jpg" alt="" className="img-fluid" />
                            </div>
                            <div className="team-info">
                                <h4>Mikele John</h4>
                                <p>Content Writter</p>
                            </div>
                            <ul className="team-socials list-inline">
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#">
                                        <i className="fab fa-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Teachers;
