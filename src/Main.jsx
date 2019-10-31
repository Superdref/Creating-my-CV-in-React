import React from 'react';

import Section from './Section';



const jobs  = [
    {
        title: "Web Designer",
        company: "My Company",
        startDate: "2008",
        endDate: "Never",
        description: "I loved my freelance status"
    },
    {
        title: "Web Designer",
        company: "My Company",
        startDate: "2008",
        endDate: "Never"
    },
    {
        title: "Web Designer",
        company: "My Company",
        startDate: "2008",
        endDate: "Never"
    },
];

const projects  = [
    {
        title: "Web Designer",
        company: "My Company",
        startDate: "2008",
        endDate: "Never",
        description: "I loved my freelance status"
    },
    {
        title: "Web Designer",
        company: "My Company",
        startDate: "2008",
        endDate: "Never"
    },
    {
        title: "Web Designer",
        company: "My Company",
        startDate: "2008",
        endDate: "Never"
    },
];

const sections = [
    {title:"Work experiences", ...jobs },
    {title:"Projects", ...projects }
    ];

const Main = () => {
    return(
        <div className="col-9">
            <Section title="Work Experiences" articles={jobs} />
            <Section title="Projects" articles={projects} />
        </div>
    );
};

export default Main;