import { Form, Button } from "react-bootstrap";
import { EmpployeeContext } from "../../context/EmployeeContext";
import { useContext, useState } from "react";


const EditForm = ({ theEmployee }) => {

  const id = theEmployee.id;

  const [name, setName] = useState(theEmployee.name);
  const [email, setEmail] = useState(theEmployee.email);
  const [address, setAddress] = useState(theEmployee.address);
  const [phone, setPhone] = useState(theEmployee.phone);

  const { updateEmployee } = useContext(EmpployeeContext);

  const updatedEmployee = { id, name, email, address, phone };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee);

  }
  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group>
        <Form.Control type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required />
      </Form.Group>

      <Form.Group>
        <Form.Control type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows={3} />
      </Form.Group>

      <Form.Group>
        <Form.Control type="text"
          placeholder="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit" block>Edit New Employee</Button>

    </Form>

  );
}
export default EditForm;