import React from 'react';
import qZoneOne from '../../../src/assets/img/qZone1.png'
import qZoneTwo from '../../../src/assets/img/qZone2.png'
import qZoneThree from '../../../src/assets/img/qZone3.png'

const Qzonee = () => {
    return (
        <div style={{ background: '#fafafa', textAlign: 'center', padding: '20px 10px' }}>
            <h3 className='text-start'>Q-Zone</h3>
            <img src={qZoneOne} alt="" />
            <img src={qZoneTwo} alt="" />
            <img src={qZoneThree} alt="" />
        </div>
    );
};

export default Qzonee;