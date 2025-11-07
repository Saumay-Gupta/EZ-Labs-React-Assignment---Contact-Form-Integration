import { useState } from "react"
import axios from "axios" 

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [emailWarning, setEmailWarning] = useState("");
    const [formSubmission, setFormSubmission] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submit button clicked")
        let valid = false;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(email)) {
            setEmailWarning("Please enter a valid email address (e.g. abc@gmail.com)");
        } else {
            setEmailWarning("");
            valid = true;
        }
        
        // API calls, only if Email Validation Complete
        if(valid){
            try{
                    const res = await axios.post("https://vernanbackend.ezlab.in/api/contact-us/", {
                    name: name, 
                    email: email, 
                    phone : phone, 
                    message: message,
                    })
                    if(res.status === 200 || res.status === 201){
                        console.log(res);
                        setFormSubmission("Form Submitted");
                        setName("");
                        setEmail("");
                        setPhone("");
                        setMessage("");
                    }
                }
                catch(e){
                    console.log("Error while API calling");
                }
        }
    }

    return (
        <>
            <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-20 w-full z-20 px-6 pt-24 py-10 lg:py-3">
                
                {/*Left Section*/}
                <div className="w-full md:w-[40%] text-center lg:text-left mb-6 md:mb-6">
                    <p className="text-black text-lg md:text-xl font-medium" style={{ fontFamily: "Instrument Sans" }}>
                        Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away.
                    </p>
                    <p className="text-black text-lg md:text-xl font-medium" style={{ fontFamily: "Instrument Sans" }}>
                        Let’s catch up over coffee.
                    </p>
                    <p className="text-black text-lg md:text-xl font-medium" style={{ fontFamily: "Instrument Sans" }}>
                        Great stories always begin with a good conversation.
                    </p>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-[50%] flex flex-col items-center gap-4 p-6">
                    <p className="text-black text-2xl md:text-3xl font-light" style={{ fontFamily: "Halant" }}>
                        Join the Story
                    </p>
                    <p className="text-black text-base md:text-lg" style={{ fontFamily: "Instrument Sans" }}>
                        Ready to bring your vision to life? Let’s talk.
                    </p>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center mt-5">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name*"
                            className="bg-white text-black w-full md:w-[90%] lg:w-[80%] p-2 border border-gray-300 "
                            required
                        />

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email*"
                            className="bg-white text-black w-full md:w-[90%] lg:w-[80%] p-2  border border-gray-300  mt-7"
                            required
                        />

                        <p className="text-red-600 font-bold text-sm">{emailWarning}</p>
                        
                       
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Phone"
                            className="bg-white text-black w-full md:w-[90%] lg:w-[80%] p-2 border border-gray-300 mt-7"
                        />

                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your message*"
                            className="bg-white text-black w-full md:w-[90%] lg:w-[80%] p-2 h-[120px]  border border-gray-300 resize-none mt-7"
                            required
                        />

                        <button
                            type="submit"
                            className="bg-[#F15D2B] text-white font-medium px-[16px] py-[12px] rounded-full hover:bg-[#d74d1d] transition-all mt-5"
                            style={{ fontFamily: "Instrument Sans" }}
                        >
                            Submit
                        </button>

                        {/* Form Success Message */}
                        {formSubmission && (
                            <p className="text-[#f5480e] font-bold text-center mt-2" style={{ fontFamily: "Instrument Sans" }}>
                                {formSubmission}
                            </p>
                        )}

                        {/* Contact Info */}
                        <div className="flex flex-col sm:flex-row items-center justify-center mt-3 gap-3 sm:divide-x divide-[#F15D2B]">
                            <span className="text-[#F15D2B] font-bold px-4" style={{ fontFamily: "Halant" }}>
                                vernita@varnanfilms.co.in
                            </span>
                            <span className="text-[#F15D2B] font-bold px-4" style={{ fontFamily: "Halant" }}>
                                +91 98736 84567
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact