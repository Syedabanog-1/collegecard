
import React from 'react';
import CollegeCard from './Components/CollegeCard';

const Home: React.FC = () => {
    const colleges = [
        {
            name: 'Harvard University',
            location: 'Cambridge, MA',
            description: 'Harvard is a private Ivy League research university.',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/en/5/54/Harvard_shield_wreath.svg',
        },
        {
            name: 'Stanford University',
            location: 'Stanford, CA',
            description: 'Stanford is known for its academic strength, wealth, and proximity to Silicon Valley.',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Stanford_University_seal.svg/1200px-Stanford_University_seal.svg.png',
        },
        // Add more colleges as needed
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {colleges.map((college, index) => (
                <CollegeCard
                    key={index}
                    name={college.name}
                    location={college.location}
                    description={college.description}
                    logoUrl={college.logoUrl}
                />
            ))}
        </div>
    );
};

export default Home;
