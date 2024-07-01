import React from 'react'

export default function GithubBtn(props) {

    const initialAction = () => {
        props.actions.initialAction();
    }

    return (
        <div>
            <button className='start-btn' onClick={() => initialAction()}>GithubBtn</button>
        </div >
    )
}


