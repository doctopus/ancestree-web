import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Table } from 'antd'
import styles from './people.module.scss'

const People = () => {
  const navigate = useNavigate()
  const [people, setPeople] = React.useState([])
  const getPeople = () => {
    axios
      .get('http://localhost:3000/people')
      .then((result) => {
        setPeople(result.data)
        console.log('result', result)
      })
      .catch((err) => {
        setPeople([])
        console.log(err)
      })
  }
  React.useEffect(() => {
    getPeople()
  }, [])

  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName'
      // key: 'firstName'
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName'
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dob',
      key: 'dob'
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender'
    }
  ]
  return (
    <div>
      <div className={'Table'}>
        <Table
          rowClassName={styles.row}
          columns={columns}
          dataSource={people}
          onRow={(row) => {
            return {
              onClick: (e) => {
                e.preventDefault()
                navigate(`/people/${row.id}`)
              }
            }
          }}
        />
      </div>
    </div>
  )
}
export { People }
