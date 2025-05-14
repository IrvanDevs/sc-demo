import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { db, collection, addDoc } from "../firebase";
import "./ContactUs.css";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
    const [formData, setFormData] = useState({
        fullName: "",
        company: "",
        email: "",
        number: "",
        subject: "",
        message: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null);
    const mainTitleRef = useRef(null);
    const subTitleRef = useRef(null);


    useEffect(() => {
        gsap.fromTo(
            mainTitleRef.current,
            { scale: 0},
            { 
                scale: 1,
                duration: 1, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: mainTitleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        gsap.fromTo(
            subTitleRef.current,
            { opacity: 0, y: 30 },
            { 
                opacity: 1,
                y: 0,
                duration: 2, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: subTitleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        gsap.fromTo(
            formRef.current,
            { opacity: 0, x: 30 },
            { 
                opacity: 1, 
                x: 0, 
                duration: 1.2, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: formRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
    
        if (name === "number") {
            if (!/^[\d+]*$/.test(value)) return;
        }
    
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!window.grecaptcha) {
            alert("reCAPTCHA belum termuat. Coba refresh halaman.");
            return;
        }
    
        setIsLoading(true); 
    
        try {
            const token = await window.grecaptcha.execute("6LfizQArAAAAAKN8h5UaUPTGuL53_7VEMONoUrim", { action: "submit" });
    
            if (!token) {
                alert("reCAPTCHA verification failed!");
                setIsLoading(false);
                return;
            }
    
            await addDoc(collection(db, "contacts"), {
                ...formData,
                timestamp: new Date()
            });
    
            alert("Data submitted successfully!");
            setFormData({ 
                fullName: "",
                company: "",
                email: "",
                number: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("Submission failed!");
        }
    
        setIsLoading(false);
    };
    
    

    return (
        <div className="Contact-container">
            <div className="Contact-wrapper">
                <div className="Contact-title">
                    <p className="Contact-maintitle" ref={mainTitleRef}>Have questions about Samudra Commerce?</p>
                    <p className="Contact-subtitle" ref={subTitleRef}>Feel free to fill out the form<br />and our team will reach out to you shortly!</p>
                </div>
                <div className="Form-wrapper" ref={formRef}>
                    <form onSubmit={handleSubmit}>
                        <label>Full Name*</label>
                        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
                        
                        <label>Company*</label>
                        <input type="text" name="company" placeholder="Company/Institution" value={formData.company} onChange={handleChange} required />
                        
                        <label>Email*</label>
                        <input type="email" name="email" placeholder="work@email.com" value={formData.email} onChange={handleChange} required />
                        
                        <label>Number*</label>
                        <input type="tel" name="number" placeholder="081234567890 / +6281234567890" value={formData.number} onChange={handleChange} required />
                        
                        <label>Subject*</label>
                        <select name="subject" value={formData.subject} onChange={handleChange} required>
                            <option value="" disabled>Select Subject</option>
                            <option value="partnership">Partnerships</option>
                            <option value="support">Support</option>
                            <option value="others">Others</option>
                        </select>

                        
                        <label>Message*</label>
                        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                        
                        <button type="submit" className="submit-button" disabled={isLoading}>
                            {isLoading ? "Submitting..." : "Submit"}
                        </button>
                        <div className="Recaptcha-branding">
                        <p>
                            This site is protected by <a href="https://www.google.com/recaptcha" target="_blank" rel="noopener noreferrer">
                            reCAPTCHA
                            </a> and the Google&nbsp;
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                            Privacy Policy
                            </a> and&nbsp;
                            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                            Terms of Service
                            </a> apply.
                        </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
