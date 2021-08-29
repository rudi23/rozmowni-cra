import { useState } from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styles from './Accordion.module.scss';

export default function Accordion({ id = 'accordion', cards }) {
    const [collapsedTab, setCollapsedTab] = useState();

    const onClick = (id) => {
        if (collapsedTab === id) {
            setCollapsedTab();
        } else {
            setCollapsedTab(id);
        }
    };

    function renderCard({ id, parentId, items, title, content }) {
        return (
            <div className={cx('card', styles.card)} key={id}>
                <div className={cx('card-header', styles.cardHeader)} id={`heading-${id}`}>
                    <button
                        className="btn-block text-left"
                        type="button"
                        onClick={() => onClick(id)}
                        // data-toggle="collapse"
                        // data-target={`#collapse-${id}`}
                        aria-expanded={collapsedTab === id ? true : false}
                        aria-controls={`collapse-${id}`}
                    >
                        <h4>
                            {title}
                            <span className={cx('fa-plus2', styles.plusIcon)}>
                                <FontAwesomeIcon icon={faPlus} />
                            </span>
                            <span className={cx('fa-plus2', styles.minusIcon)}>
                                <FontAwesomeIcon icon={faMinus} />
                            </span>
                        </h4>
                    </button>
                </div>

                <div
                    id={`collapse-${id}`}
                    className={`collapse ${collapsedTab === id && 'show'}`}
                    aria-labelledby={`heading-${id}`}
                    data-parent={`#${parentId}`}
                >
                    {content && <div className={styles.content}>{content} </div>}
                    {items &&
                        items.map((item) => (
                            <div className={styles.item} key={item}>
                                <div>
                                    <FontAwesomeIcon icon={faCheck} />
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
