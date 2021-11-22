import React from 'react';
import Title from '../title/Title';

const InfoItem = ({ infoTitle, infoValue }) => (
    <li className="mb-2">
        <div className="row">
            <div className="col-4 font-weight-bold">{infoTitle}</div>
            <div className="col-8">{infoValue}</div>
        </div>
    </li>
);

class InfoList extends React.Component{

    state = {
        allInfo: [
            {
                infoTitle: 'Age',
                infoValue: 21,
            },
            {
                infoTitle: 'Languages',
                infoValue: 'English, Marathi, Hindi ',
            },
            {
                infoTitle: 'Nationality',
                infoValue: 'Indian',
            },
            {
                infoTitle: 'Address',
                infoValue: 'Flat no 6.Chaitanya appartment Swapna Nagari Garkheda Aurangabad',
            },
            {
                infoTitle: 'Freelance',
                infoValue: 'Available',
            },
        ]
    }

    render(){
        return(
            <>
                <Title>About</Title>
                <ul className="list-unstyled p-3">
                    {
                        this.state.allInfo.map((item, index) => (
                            <InfoItem key={index} {...item} />
                        ))
                    }
                </ul>
            </>
        );
    }
}

export default InfoList;