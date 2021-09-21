import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import {useForm} from 'react-hook-form'

export const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState:{ errors }} = useForm();

    const serviceID = "service_ID"
    const templateID = "template_ID"
    const userID = "user_vCOddSOtcbc7165eSdITF" 

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                message: data.message
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent Successfully! I'll contact you as soon as possible.");
          }).catch(err => console.error(`Something went wrong ${err}`));
    }
    

    return (
        <div id="contact "className="contact">
            <div className="text-center">
                <h1>contact me</h1>
                <p>Please fill out the form and describe your project needs and I'll contact you as soon as possible.</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME INPUT*/}
                        <div className="text-center">
                            <input
                            id="name"
                            type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                aria-invalid={errors.name ? "true" : "false"}
                                {...register("name", {
                                  required: "Please enter your name",
                                  maxLength: {
                                    value: 20,
                                    message:
                                      "Please enter a name with fewer than 20 characters",
                                  },
                                })}
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        {/* PHONE INPUT*/}
                        <div className="text-center">
                            <input
                            id="phone"
                            type="text"
                                className="form-control"
                                placeholder="Phone"
                                name="phone"
                                aria-invalid={errors.phone ? "true" : "false"}
                                {...register("phone", {
                                  required: "Please enter your phone number",
                                  maxLength: {
                                    value: 10,
                                    message:
                                      "Please enter a valid with phone number",
                                  },
                                })}
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.phone && errors.phone.message}
                        </span>
                        {/* EMAIL INPUT*/}
                        <div className="text-center">
                            <input
                            id="email"
                            type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                aria-invalid={errors.email ? "true" : "false"}
                                {...register("email", {
                                  required: "Please enter a valid email",
                                  maxLength: {
                                    value: 100,
                                    message:
                                      "Please enter a valid email",
                                  },
                                })}
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.email && errors.email.message}
                        </span>
                        {/* SUBJECT INPUT*/}
                        <div className="text-center">
                            <input
                            id="subject"
                            type="text"
                                className="form-control"
                                placeholder="Subject"
                                name="subject"
                                aria-invalid={errors.subject ? "true" : "false"}
                                {...register("subject", {
                                  required: "OOPS you forgot to add a subject",
                                  maxLength: {
                                    value: 50,
                                    message:
                                      "Please enter a valid subject",
                                  },
                                })}
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.subject && errors.subject.message}
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                         {/* MESSAGE INPUT*/}
                            <div className="text-center">
                                <textarea
                                id="message"
                                type="text"
                                    className="form-control"
                                    placeholder="Message"
                                    name="message"
                                    aria-invalid={errors.message ? "true" : "false"}
                                {...register("message", {
                                  required: "Please enter message",
                                  minLength: {
                                    value: 1,
                                    message:
                                      "Please enter a message",
                                  },
                                })}
                                />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                            {errors.message && errors.message.message}
                            </span>
                        <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contact