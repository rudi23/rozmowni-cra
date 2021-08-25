import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styles from './ContactForm.module.scss';

const sendForm = async (data) =>
    fetch('/mail.php', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    });

export default function ContactForm() {
    const [isSent, setSent] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        await sendForm(data);
        setSent(true);
    };

    return (
        <form className="contact__form form-row" onSubmit={handleSubmit(onSubmit)} id="contactForm">
            {isSent && (
                <div className="col-lg-12 col-12">
                    <div className="alert alert-success contact__msg form-group" role="alert">
                        Dziękujemy za kontakt! Twoja wiadomość została pomyślnie wysłana!
                    </div>
                </div>
            )}

            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="Imię i nazwisko"
                                {...register('name', { required: true })}
                            />
                            {errors.name?.type === 'required' && (
                                <div className={styles.error}>Imię i nazwisko jest wymagane</div>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                className="form-control"
                                placeholder="Numer telefonu"
                                {...register('phone', { required: true })}
                            />
                            {errors.phone?.type === 'required' && (
                                <div className={styles.error}>Numer telefonu jest wymagany</div>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Email"
                                {...register('email', { required: true })}
                            />
                            {errors.email?.type === 'required' && (
                                <div className={styles.error}>Email jest wymagany</div>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                className="form-control"
                                placeholder="Temat"
                                {...register('subject', { required: true })}
                            />
                            {errors.subject?.type === 'required' && (
                                <div className={styles.error}>Temat jest wymagany</div>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="form-group">
                            <textarea
                                id="message"
                                name="message"
                                cols="30"
                                rows="6"
                                className="form-control"
                                placeholder="Wiadomość"
                                {...register('message', { required: true })}
                            />
                            {errors.message?.type === 'required' && (
                                <div className={styles.error}>Treść wiadomośi jest wymagana</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-12">
                <div className="mt-4 text-right">
                    <button className="btn btn-main" type="submit">
                        Wyślij wiadomość
                        <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
                    </button>
                </div>
            </div>
        </form>
    );
}
