import React from "react";
// button
import ButtonPrimary from "./PrimaryButton";
import ButtonSecondary from "./SecondaryButton";

function ContactUs(){

    return(
        <>
            <div className="container-fluid">
                <div className="row set-contactUs-cover">
                    <div className="col-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4128.483962870474!2d107.6268254206497!3d-6.973097422480387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437398556f9fa03!2sUniversitas%20Telkom!5e0!3m2!1sid!2sid!4v1692343746629!5m2!1sid!2sid"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-6 set-form-contactUs">
                        <div className="row cover-forms-contactUs">
                            <div className="col-12 title-contactUs">
                                <h1>Contact Us</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet temporibus asperiores mollitia ducimus cumque accusamus nemo, quae illo quam expedita?</p>
                            </div>

                            <div className="col-6 form-frist-name">
                                <label htmlFor="">First Name</label>
                                <input type="text" className="form-control" placeholder="First Name"/>
                            </div>
                            <div className="col-6 form-last-name mb-2">
                                <label htmlFor="">Last Name</label>
                                <input type="text" className="form-control" placeholder="Last Name"/>
                            </div>
                            <div className="col-12 mt-5">
                                <label htmlFor="">Email</label>
                                <input type="email" className="form-control" placeholder="Email"/>

                                <label htmlFor="">Subject</label>
                                <input type="text" className="form-control" placeholder="Subject"/>

                                <label htmlFor="">Message</label>
                                <textarea name="" id="" cols="30" rows="10" className="form-control Button-submit-contactUs" placeholder="Message"></textarea>

                                <ButtonSecondary title="Send Message"/>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ContactUs;
