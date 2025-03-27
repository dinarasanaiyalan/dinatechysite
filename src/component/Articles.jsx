import React from "react";
import { FaJava, FaRocket, FaMobileAlt, FaShieldAlt, FaGlobe } from "react-icons/fa";

const javaArticle = {
    topicName: "JAVA: The Language That Runs the World",
    topicPoints: [
        {
            text: "Java is more than just a programming language—it’s the backbone of the digital world. From massive banking systems to Android apps, Java silently powers billions of devices.",
            icon: <FaJava className="text-primary" />
        },
        {
            text: "With its 'Write Once, Run Anywhere' (WORA) principle, Java allows developers to write code that works on any operating system without modification.",
            icon: <FaGlobe className="text-success" />
        },
        {
            text: "Java is like a Swiss Army knife—versatile, reliable, and powerful. It is widely used for enterprise software, Android development, and cloud computing.",
            icon: <FaMobileAlt className="text-warning" />
        },
        {
            text: "NASA even uses Java in its Mars Rover projects! Java’s reliability makes it a great choice for space exploration and critical real-time applications.",
            icon: <FaRocket className="text-danger" />
        },
        {
            text: "Java has built-in security features, making it a preferred choice for banking, government systems, and cybersecurity applications.",
            icon: <FaShieldAlt className="text-info" />
        }
    ]
};

const Articles = () => {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg border-0 rounded">
                <div className="card-body">
                    <h2 className="card-title text-center text-primary">
                        {javaArticle.topicName}
                    </h2>
                    <ul className="list-group list-group-flush mt-3">
                        {javaArticle.topicPoints.map((point, index) => (
                            <li key={index} className="list-group-item d-flex align-items-center">
                                <span className="me-3 fs-4">{point.icon}</span>
                                <span className="fw-semibold">{point.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Articles;
