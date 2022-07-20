import React, { useState } from 'react'

import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePerson = () => {
  const [per, setPer] = useState({
    name: '',
    age: 1
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onChangeHandler = (e) => {
    setPer((pre) => {
      return { ...pre, [e.target.name]: e.target.value }
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setLoading(true)
    axios
      .post('/api/pers', per)
      .then(() => {
        navigate('/', { replace: true })
      })
      .catch((err) => {
        setLoading(false)
        alert(err.message)
      })
  }
  return (
    <Container>
      <Row>
        <Col lg={6} md={8} sm={10}>
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={onChangeHandler}
                required={true}
                disabled={loading}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                min="1"
                placeholder="Age"
                name="age"
                required={true}
                onChange={onChangeHandler}
                disabled={loading}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {!loading && 'Submit'}
              {loading && (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Loading...</span>
                </>
              )}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default CreatePerson
