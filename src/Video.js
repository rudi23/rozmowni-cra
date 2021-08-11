import './Video.css';

export default function Video() {
    return (
        <section className="section-padding video-section2 clearfix mt-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <span className="subheading">Working Process</span>
                            <h3>Obejrzyj wideo, dowiesz się więcej</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <iframe
                            width="530"
                            height="300"
                            src="https://www.youtube.com/embed/QNx1LVeYnis"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
