import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import axios from 'axios'

const Home = () => {
  const [pers, setPers] = useState([])

  useEffect(() => {
    axios
      .get('/api/pers')
      .then(({ data }) => {
        setPers(data.pers)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const displayPers = () => {
    if (pers.length > 0) {
      return pers.map((p, key) => {
        return (
          <tr key={key}>
            <td>{key + 1}</td>
            <td>{p.name}</td>
            <td>{p.age}</td>
          </tr>
        )
      })
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Table</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>{displayPers()}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
