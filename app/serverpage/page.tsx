import React from 'react'

function page() {
  return (
        <div className="h-screen flex items-center justify-center">
            <p className={`m-0 max-w-[30ch] text-xl opacity-50`}>
                This is server Page
            </p>
            <iframe src="https://giphy.com/embed/14kqI3Y4urS3rG" width="480" height="436" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/baby-internet-vintage-14kqI3Y4urS3rG"/></p>
        </div>
  )
}

export default page