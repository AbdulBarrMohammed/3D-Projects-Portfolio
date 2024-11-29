import React from "react";

const Alert = ({ type, text }) => {
    return (
        <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
            <div className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-800'} p-2 text-indigo-100 leading-none lg:rounded-full flex items-center justify-center text-center
             lg:inline-flex`} role='alert'>
                <p className={`${type === 'danger' ? 'bg-red-500' : 'bg-blue-800'} flex rounded-full uppercase px-2 py-1
                font-semibold text-xs text-center`}>{type=== 'danger' ? 'Failed' : 'Success'}</p>
                <p className="">{text}</p>
            </div>
        </div>
    )
}

export default Alert
