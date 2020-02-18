import React from 'react'
import faker from 'faker'

const ComponentDetail = () => {
    return (
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Harsha
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 5:00pm</span>
                    </div>
                    <div className="text">Hello there</div>
                </div>
            </div>
    )
}

export default ComponentDetail