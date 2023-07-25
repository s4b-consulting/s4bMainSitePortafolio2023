import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const Contacts = () => {
    const [successMessage, setSucessMessage] = useState("")

    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID"
    const userID = "user_zeaYXm8WVDNHpV0StOBbQ";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();

    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        // e.preventDefault();

        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSucessMessage('Form sent successfully ! I will contact you as soon as possible.');
            }).catch(err => console.error(`Something went wrong ${err}`));
    }

    return (
        <>
            <div id="contacts" className="contacts">
                <div className="text-center">
                    <h1>Contact me</h1>
                    <p>Please fill out theform and describe your Project needs and I will contact you as soon as possible</p>
                    <span className="success-message">{successMessage}</span>
                </div>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                {/* NAME INPUT */}
                                <div className="text-center">
                                    <input
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
                                <span className="Error-message">
                                    {errors.name && errors.name.message}
                                </span>
                                {/* PHONE INPUT */}
                                <div className="text-center">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        name="phone"
                                        {...register("phone", {
                                            required: "Please add your phone number",
                                            
                                        })}
                                    />
                                    <div className="line"></div>
                                </div>
                                <span className="Error-message">
                                    {errors.phone && errors.phone.message}
                                </span>
                                {/* EMAIL INPUT */}
                                <div className="text-center">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="email"
                                        name="email"
                                        {...register("email", {
                                            required: "Please add your email address",
                                            pattern: {
                                                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid Email"
                                            }
                                            
                                        })}
                                    />
                                    <div className="line"></div>
                                </div>
                                <span className="Error-message">
                                    {errors.email && errors.email.message}
                                </span>
                                {/* SUBJECT INPUT */}
                                <div className="text-center">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Subject"
                                        name="subject"
                                        {...register("subject", {
                                            required: "Please add the subject",
                                            
                                        })}
                                    />
                                    <div className="line"></div>
                                </div>
                                <span className="Error-message">
                                    {errors.subject && errors.subject.message}
                                </span>
                            </div>
                            
                            <div className="col-md-6 col-xs-12">
                                {/*DESCRIPTION*/}
                                <div className="text-center">
                                    <textarea
                                        className="form-control"
                                        placeholder="Please describe shortly your project..."
                                        name="description"
                                        {...register("description", {
                                            required: "Please describe shortly your project",
                                            
                                        })}
                                    >
                                    </textarea>
                                    <div className="line"></div>
                                </div>
                                <span className="Error-message">
                                    {errors.description && errors.description.message}
                                </span>
                                <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Contacts