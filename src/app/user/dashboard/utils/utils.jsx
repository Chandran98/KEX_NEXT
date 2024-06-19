import React from 'react'

export const UtilsData = ({icon, title}) => {
  return (<div className="d-flex align-items-center pe-4 mb-2">
  <div className="pe-2">
    {icon}
  </div>
  <h5 className="font-w400 mb-0">{title}</h5>
</div>
  )
}
