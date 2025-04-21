import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { TopicsContext } from './JavaNotes';
import { Accordion } from 'react-bootstrap';

const Content = () => {

    const topicList = [
        {
            topicName: "Basic's",
            subTopicList: ["Variable", "Keywords", "Operator"]
        }, {
            topicName: "Fundamental",
            subTopicList: ["Control Statements", "Decision-Making Statements", "Looping Statements", "Jump Statements", "Array", "Types of Array", "Access Modifier"]
        }, {
            topicName: "OOPS",
            subTopicList: ["OOPs & Features", "Class", "Constructor", "Constructor Calling Chain",
                "Method", "Object", "Encapsulation"]
        }, {
            topicName: "Inheritance",
            subTopicList: ["Inheritance", "Single Inheritance", "Multi-level Inheritance", "Multiple Inheritance",
                "Hybrid Inheritance", "Hierarchical Inheritance"]
        }, {
            topicName: "Abstraction",
            subTopicList: ["Abstraction", "Abstract Class","Interface", "Upcasting", "DownCasting"]
        }, {
            topicName: "Polymorphism",
            subTopicList: ["Polymorphism", "Run-Time Polymorphism","Compile-Time Polymorphism"]
        }, {
            topicName: "String",
            subTopicList: ["String", "String Buffer", "String Builder"]
        }, {
            topicName: "Exception",
            subTopicList: ["Exception","Exception Handling","Custom Exception"]
        }, {
            topicName: "File",
            subTopicList: ["File Handling","File Reading","File Writing","File Deletion"]
        }, {
            topicName: "Serialization",
            subTopicList: ["Serialization"]
        }, {
            topicName: "Collection",
            subTopicList: ["Iterator","Collection","List Interface"]
        }
    ]

    const javaKeywords = [
        "abstract", "assert", "boolean", "break", "byte",
        "case", "catch", "char", "class", "const",
        "continue", "default", "do", "double", "else",
        "enum", "extends", "final", "finally", "float",
        "for", "goto", "if", "implements", "import",
        "instanceof", "int", "interface", "long", "native",
        "new", "package", "private", "protected", "public",
        "return", "short", "static", "strictfp", "super",
        "switch", "synchronized", "this", "throw", "throws",
        "transient", "try", "void", "volatile", "while",
        "null", "true", "false", // technically literals, not keywords
        "open", "module", "requires", "exports", "opens",
        "to", "uses", "provides", "with", "transitive",
        "Collections","System","out","println","ArrayList",
        "LinkedList","Vector","Stack","Map","Set","Map",
        "HashMap","LinkedHashMap","TreeMap","HashSet",
        "LinkedHashMap","TreeMap","Queue","PriorityQueue",
        "ArrayDeque","List","Integer","Byte","Short",
        "Long","Float","Double","Character","Boolean"
      ];      

    const { topicsDetials } = useContext(TopicsContext);

    const { topicNameKey } = useParams(); // Get topic from URL

    const topicDetails = topicNameKey !== undefined ? topicsDetials.find((t) => t.topicKey === topicNameKey) :
        topicsDetials.find((t) => t.topicKey === "Variable");
    const topicsAndContents = topicDetails ? topicDetails.topicValue : null;

    const highlightJavaKeywords = (codeLine) => {
        const regex = new RegExp(`\\b(${javaKeywords.join('|')})\\b`, 'g');
        return codeLine.split(regex).map((part, index) => {
          if (javaKeywords.includes(part)) {
            return <span key={index} style={{ color: 'blue', fontWeight: 'bold' }}>{part}</span>;
          }
          return part;
        });
      };

    return (
        <div className='main-container'>
            <div className="sidebar-container">
                <Accordion>
                    {topicList.map((topicDetail, tpindex) => (
                        <Accordion.Item eventKey={tpindex.toString()} key={tpindex}>
                            <Accordion.Header>
                                {topicDetail.topicName}
                            </Accordion.Header>
                            <Accordion.Body>
                                <ul className="accordion-list">
                                    {topicDetail.subTopicList.map((t, index) => (
                                        <li key={index}>
                                            <Link to={`/topic/${t}`} dangerouslySetInnerHTML={{ __html: t }}></Link>
                                        </li>
                                    ))}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
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
                        {content.topicNote === undefined ? "" : <p> <strong>Note : </strong> {content.topicNote}</p>}
                        {content.topicExample ?
                            <div className="card bg-dark text-white mb-1">
                                <div className="card-body">
                                    <pre className="mb-0">
                                        <ul className='code-container'>
                                            {content.topicExample.map((example, exampleIndex) => {
                                                return <li key={exampleIndex}>{highlightJavaKeywords(example)}</li>
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