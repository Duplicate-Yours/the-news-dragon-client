import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <Container className='w-25 mx-auto'>
            <h2>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                 <br />   
                <Form.Text className='text-secondary'>
                    Don't have an account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className='text-success'>

                </Form.Text>
                <Form.Text className='text-danger'>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;