import React from 'react'
import SectionSwitch from './SectionSwitch'
import FilterBar from './FilterBar'
import PropertList from './PropertList'

const PropertySection = () => {
  return (
    <div>
        <SectionSwitch/>
        <FilterBar/>
        <PropertList/>
    </div>
  )
}

export default PropertySection