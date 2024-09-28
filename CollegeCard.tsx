// components/CollegeCard.tsx
import React from 'react';

interface CollegeCardProps {
    name: string;
    location: string;
    description: string;
    logoUrl: string;
}

const CollegeCard: React.FC<CollegeCardProps> = ({ name, location, description, logoUrl }) => {
    return (
        <div style={styles.card}>
            <img src={logoUrl} alt={`${name} logo`} style={styles.logo} />
            <h2>{name}</h2>
            <h4>{location}</h4>
            <p>{description}</p>
        </div>
    )
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '300px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        margin: '10px',
        background: '#fff'
    },
    logo: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '4px',
    }
};

export default CollegeCard;