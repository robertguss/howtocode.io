import { useState } from 'react'
import CostSelect from '@/components/learn/CostSelect'
import learnResources from '../data/learn-resources.json'

export default function Learn() {
  const [resources, setResources] = useState(learnResources)
  return (
    <>
      <h1>
        Learn How to Code <br /> from over {learnResources.length} resources
      </h1>
      <CostSelect />
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
