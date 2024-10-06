import React from 'react'

function LoadingBar({level}) {
    return (
        <div className="border-2 border-gri flex-fill">
            <div className={`h-full transition-all bg-white/30  loading-bg w-[${level}%]`}></div>
        </div>
    )
}

export default LoadingBar