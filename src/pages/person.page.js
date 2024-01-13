import React from 'react'
import axios from 'axios'
import { useMatches } from 'react-router-dom'

const Person = () => {
  const matches = useMatches()
  const id = matches[0].params.id
  console.log(matches)
  const [person, setPerson] = React.useState([])
  const getPerson = () => {
    axios
      .get(`http://localhost:3000/people/${id}`)
      .then((result) => {
        setPerson(result.data)
      })
      .catch((err) => {
        setPerson([err])
      })
  }
  React.useEffect(() => {
    getPerson()
  }, [])

  return <div> {person?.firstName} </div>
}
export { Person }
