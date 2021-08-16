import cx from 'classnames';
import styles from './Accordion.module.scss';

export default function Accordion({ id = 'accordion', cards }) {
    function renderCard({ id, parentId, items, title, content }) {
        return (
            <div className={cx('card', styles.card)}>
                <div className={cx('card-header', styles.cardHeader)} id={`heading-${id}`}>
                    <button
                        className="btn-block text-left"
                        type="button"
                        data-toggle="collapse"
                        data-target={`#collapse-${id}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${id}`}
                    >
                        <h4>{title}</h4>
                    </button>
                </div>

                <div
                    id={`collapse-${id}`}
                    className="collapse"
                    aria-labelledby={`heading-${id}`}
                    data-parent={`#${parentId}`}
                >
                    {content && <div className={styles.content}>{content} </div>}
                    {items &&
                        items.map((item) => (
                            <div className={styles.item}>
                                <div>
                                    <i className="fa fa-check" />
                                    <span>{item}</span>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.root}>
            <div className="accordion" id={id}>
                {cards.map((card) => renderCard({ ...card, parentId: id }))}
            </div>
        </div>
    );
}
