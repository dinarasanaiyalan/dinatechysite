import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { TopicsContext } from './JavaNotes';

const Content = () => {

    const topics = ["Variable", "Keywords", "Operator", "Control Statements", 
        "Decision-Making Statements","Looping Statements","Jump Statements",
        "Array","Types of Array","OOPS","Class","Constructor","Constructor Calling Chain",
        "Method","Object","Inheritance","Single Inheritance","Multi-level Inheritance","Multiple Inheritance",
        "Hybrid Inheritance","Hierarchical Inheritance"];

    const { topicsDetials } = useContext(TopicsContext);

    const { topicNameKey } = useParams(); // Get topic from URL

    const topicDetails = topicNameKey !== undefined ? topicsDetials.find((t) => t.topicKey === topicNameKey) :
        topicsDetials.find((t) => t.topicKey === "Variable");
    const topicsAndContents = topicDetails ? topicDetails.topicValue : null;

    return (
        <div className='main-container'>
            <div className="sidebar-container">
                <h3>Topics</h3>
                <ul className='topic-list'>
                    {topics
                        .map((t, index) => (
                            <li key={index}>
                                <Link to={`/topic/${t}`}>{t}</Link>
                            </li>
                        ))}
                </ul>
                {/* {topicsAndContents !== null ?
                    <div>
                        <h2>Learning Objective</h2>
                        <p>After reading this article what do you get from us:</p>
                        <ul>
                            {topicsAndContents.whatYouGet.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div> : <h2>Content Not Yet Avaiable:</h2>
                } */}
            </div>
            <div className="content-container">
                {topicsAndContents.mainContent.map((content, i) => (
                    <div key={i} className='mt-2'>
                        <h3>{content.topicName}</h3>
                        <p>{content.topicContent}</p>
                        <ul className='topic-points mb-1'>
                            {content.topicPoints ? content.topicPoints.map((contentPoints, pointsIndex) => {
                                return <li key={pointsIndex}>✅ {contentPoints}</li>
                            }) : ""}
                        </ul>
                        {content.topicExample ?
                            <div className="card bg-dark text-white mb-1">
                                <div className="card-body">
                                    <pre className="mb-0">
                                        <ul className='code-container'>
                                            {content.topicExample.map((example, exampleIndex) => {
                                                return <li key={exampleIndex}>{example}</li>
                                            })}
                                        </ul>
                                    </pre>
                                </div>
                            </div>
                            : ""
                        }
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Content;