import { useState } from 'react'
import CostSelect from '@/components/learn/CostSelect'
import learnResources from '../data/learn-resources.json'

export default function Learn() {
  const [allResources, setAllResources] = useState(learnResources)
  const [resources, setResources] = useState(learnResources)
  const [selectedOption, setSelectedOption] = useState('')
  const freeResources = resources.filter((resource) => resource.Cost === 'Free')

  const handleChange = (event) => {
    setSelectedOption(event.target.value)

    if (event.target.value === 'Paid & Free') {
      setResources(allResources)
    } else {
      setResources(
        allResources.filter((resource) => resource.Cost === event.target.value)
      )
    }
  }
  return (
    <>
      <h1>
        Learn How to Code <br /> from over {resources.length} resources
      </h1>
      {/* <CostSelect /> */}
      <select id="options" value={selectedOption} onChange={handleChange}>
        <option value="Paid & Free">Paid & Free</option>
        <option value="Free">Free</option>
        <option value="Paid">Paid</option>
      </select>
      {resources.map((resource, index) => (
        <div key={index}>
          <h2>{resource.Name}</h2>
          <p>Category: {resource.Category}</p>
          <a href={resource.URL}>{resource.URL}</a>
          <p>Cost: {resource.Cost}</p>
          <p>Type: {resource.Type}</p>
          <hr />
        </div>
      ))}
    </>
  )
}
