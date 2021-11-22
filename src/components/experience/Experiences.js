import React from 'react';
import { FaBriefcase, FaUniversity } from 'react-icons/fa';

const ExperienceItem = ({ time, field, location, description }) => (
    <div className="work__div border-bottom mb-4">
        <div className="o-time-title mb-2 position-relative o-font-sm">{time}</div>
        <div className="o-title-exp mb-2 d-flex flex-column">
            <strong className="font-weight-normal o-text-purple">{field}</strong>
            <small className="text-muted">{location}</small>
        </div>
        <p className="text-justify o-font-sm">{description}</p>
    </div>  
);

class Experiences extends React.Component{

    state = {
        experiences: [
            {id: 1, type: 'work', time: 'May 2021 - October 2021', field: 'Frontend Web Developer', location: 'Mumbai', description: 'Here my job was to design and develop interactive , responsive website.'},
            {id: 2, type: 'work', time: 'Sep 2021', field: 'SDE', location: 'Bhopal', description: 'Here my job was to make UI more interactive and work on the responsiveness of the website.'},
            {id: 3, type: 'education', time: '2019 - 2022', field: 'BE - IT', location: 'PES Modern College Of Engineering Pune', description: 'Currently Pursuing Graduation.'},
        ]
    }

    render(){
        return(
            <div className="row">
                <div className="col-12 col-sm-6 col-md-12 col-lg-6 border-right">
                    <div className="mb-4">
                        <i className="o-font-lg align-bottom o-text-purple mr-2"><FaBriefcase /></i>
                        <span className="font-weight-bold">Work Experience</span>
                    </div>
                    {
                        this.state.experiences.filter(item => item.type === 'work').map(item => (
                            <ExperienceItem key={item.id} {...item} />
                        ))
                    }
                </div>
                <div className="col-12 col-sm-6 col-md-12 col-lg-6">
                    <div className="mb-4">
                        <i className="o-font-lg align-bottom o-text-purple mr-2"><FaUniversity /></i>
                        <span className="font-weight-bold">Education</span>
                    </div>
                    {
                        this.state.experiences.filter(item => item.type === 'education').map(item => (
                            <ExperienceItem key={item.id} {...item} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Experiences;