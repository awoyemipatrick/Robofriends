import React from 'react';

const Card = ({ name, email, id, username }) => {

    return (
        <div className='tc bg-light-green dib br2 pa2 ma2 grow bw4 shadow-5'>
            <img src={`https://robohash.org/${id}?100x100`} alt='Robot' />
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>

        </div>
    );
}

export default Card;