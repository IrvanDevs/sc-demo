import React from "react";
import "./Footer.css";
import { Mail, Phone, User, MapPin } from "react-feather";
import sclogowhite from "../images/sc-logo-white.png"

function Footer() {
    return (
        <div className="Footer-container">
            <div className="Footer-content">
                <div className="Footer-left">
                    <img className="Footer-logo" src= {sclogowhite} alt="sc-logo" />
                    
                    <div className="Footer-contact">
                        <p className="Footer-contact-title">Contact Us</p>
                        <p className="Footer-highlight">Business Development Team</p>
                        <div className="Contact-info">
                            <div className="Contact-list First-contact">
                                <div className="Contact-name">
                                    <User />
                                    <p>Erfia</p>
                                </div>
                                <div className="Contact-list-wrapper">
                                    <Mail />
                                    <a href="mailto:erfia@samudraretail.co.id?cc=bertin@samudraretail.co.id,diahayu@samudraretail.co.id">erfia@samudraretail.co.id</a>
                                </div>
                                <div className="Contact-list-wrapper">
                                    <Phone />
                                    <a href="tel:+6282299639096">+62-822-9963-9096</a>
                                </div>
                            </div>
                            
                            <div className="Contact-list">
                                <div className="Contact-name">
                                    <User />
                                    <p>Vian</p>
                                </div>
                                <div className="Contact-list-wrapper">
                                    <Mail />
                                    <a href="mailto:novian@samudraretail.co.id?cc=bertin@samudraretail.co.id,diahayu@samudraretail.co.id">novian@samudraretail.co.id</a>
                                </div>
                                <div className="Contact-list-wrapper">
                                    <Phone />
                                    <a href="tel:+6281916567832">+62-819-1656-7832</a>
                                </div>
                            </div>

                            <p className="Email-cc">Please ensure that the email is CC'd to <br/> bertin@samudraretail.co.id & diahayu@samudraretail.co.id</p>
                        </div>
                    </div>
                </div>
                <div className="Footer-right">
                    <div className="Address-wrapper">
                        <div className="Address-title">
                            <MapPin />
                            <p className="Footer-highlight">Our Address</p>
                        </div>
                        <iframe
                            className="Maps-embed"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.018788959657!2d106.7683946!3d-6.1281735999999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d006720e355%3A0xf84a7a16534ca047!2sSamudra%20Commerce!5e0!3m2!1sen!2sid!4v1743149268001!5m2!1sen!2sid"
                            width="380"
                            height="230" 
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        <a href="https://maps.app.goo.gl/eT44Dob3Rb4z3o3k9" target="_Blank"><span className="Sc-name">Samudra Commerce</span> <br />
                        Jl. Manyar Permai VII Blok V2 No.10 RT/RW 016/006, Pantai Indah Kapuk, Penjaringan, Jakarta Utara, Daerah Khusus Ibukota Jakarta 14460</a>
                    </div>
                </div>
            </div>
            <div className="Copyright-wrapper">
                <p className="Copyright-year">© {new Date().getFullYear()} Samudra Commerce</p>
            </div>
        </div>
    );
}

export default Footer;