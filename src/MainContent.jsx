import React from "react";

export default function MainContent() {
    return (
        <main>
            <h1>Endrődi Emese Anna</h1>
            <h3>Junior Software Developer</h3>
            <div>
                <button className="email-btn">Email</button>
                <button className="linkedin-btn">LinkedIn</button>
            </div>

            <div className="info-container">
                <div>
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making 
                        things simple and automating daily tasks. I try to keep up with security 
                        and best practices, and am always looking for new things to learn.</p>
                </div>

                <div>
                    <h2>Interest</h2>
                    <p>I am a frontend developer with a particular interest in making 
                        things simple and automating daily tasks. I try to keep up with security 
                        and best practices, and am always looking for new things to learn.</p>
                </div>
            </div>
        </main>
    )
}