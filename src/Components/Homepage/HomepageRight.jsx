import React from 'react';

const HomepageRight = () => {
    return (
        <>
            <div className='py-4'>
                <h2>Login with</h2>
                <button className='btn btn-primary d-block w-100 mb-2'>Facebook</button>
                <button className='btn btn-danger d-block w-100'>Instagram</button>
            </div>
            <div className='my-5'>
                <h2>Find us on</h2>
                <ul className='list-unstyled'>
                    <li className='p-4 border'>Facebook</li>
                    <li className='p-4 border'>Twitter</li>
                    <li className='p-4 border'>Instagram</li>
                    <li className='p-4 border'>Linkedin</li>
                </ul>
            </div>
        </>
    );
};

export default HomepageRight;