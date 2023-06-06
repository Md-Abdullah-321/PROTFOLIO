import React from 'react'

export default function ServiceComponent({icon,title,paragraph}) {
  return (
      <div className="p-4 md:w-1/3 md:px-14 flex flex-col text-center items-center  py-12 rounded-xl">
        <div className="flex-grow">
          <h2 className="text-secondary text-xl title-font font-medium mb-3">{title}</h2>
          <p className="leading-relaxed text-base">{paragraph}</p>
        </div>
      </div>
  )
}
