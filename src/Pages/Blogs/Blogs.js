import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container w-100 mt-5'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Q1. Difference between javascript and nodejs.</Accordion.Header>
                    <Accordion.Body>
                        Nodejs is a javascript runtime environment working on javascripts V8 engine and javascript is used for executing scripts for running the website which is an implementation of ECMAscript. So this basically means javascript is a language and nodejs is not a language. Nodejs mostly used as a server side platform whereas javascript only works in browser. Javascript has the capability to add HTML whereas nodejs do not.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Q2. When should you use nodejs and when should you use mongodb</Accordion.Header>
                    <Accordion.Body>
                        Nodejs is used as a standalone server for the application and basically helps to execute in backend. Mongodb basically used to do CRUD operations in form of database.  We can use mongodb with nodejs since mongodb offers api library it helps to add in database and perform CRUD operations.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Q3. Differences between sql and nosql databases.</Accordion.Header>
                    <Accordion.Body>
                        SQL is relational whereas nosql non-relational database management system. NOSQL is best suited when there is a complex linked to each parent-child datas in a database whereas SQL is not suited for those complex datas. SQL contains full schema where it contains tabular data whereas NOSQL database is not sticking to this format and contains JSON format data.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Q4. What is the purpose of jwt and how does it work</Accordion.Header>
                    <Accordion.Body>
                        JWT is a way to guarantee safe authentication of any user when it recieves by the server. It can ensure user safety and safe the authentication from hackers. <br />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;