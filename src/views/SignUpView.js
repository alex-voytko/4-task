import { Form, Button } from "react-bootstrap";

function SignUpView() {
  return (
    <>
      <h2 className="mb-4">Sign Up, Please</h2>
      <Form className="text-center">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
export default SignUpView;
