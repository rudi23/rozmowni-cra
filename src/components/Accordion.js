export default function Accordion({ id = 'accordion', cards }) {
    function renderCard({ id, parentId, items, title }) {
        return (
            <div className="card">
                <div className="card-header" id={`heading-${id}`}>
                    <button className="btn-block text-left curriculmn-title-btn" type="button"
                            data-toggle="collapse" data-target={`#collapse-${id}`} aria-expanded="false"
                            aria-controls={`collapse-${id}`}>
                        <h4 className="curriculmn-title">{title}</h4>
                    </button>
                </div>

                <div id={`collapse-${id}`} className="collapse" aria-labelledby={`heading-${id}`} data-parent={`#${parentId}`}>
                    <div className="course-lessons">
                    {items.map(item => (
                        <div className="single-course-lesson">
                            <div className="course-topic-lesson">
                                <i className="fa fa-check"></i>
                                <span>{item}</span>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="edutim-course-topic">
            <div className="accordion" id={id}>
                {cards.map(card => renderCard({...card, parentId: id }))}
            </div>
        </div>
    )
}
