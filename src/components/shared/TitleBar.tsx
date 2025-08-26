import React from 'react'

function TitleBar({ title }: Readonly<{ title: string }>) {
    return (
        <div>
            <h1 className=''>{title}</h1>
        </div>
    )
}

export default TitleBar