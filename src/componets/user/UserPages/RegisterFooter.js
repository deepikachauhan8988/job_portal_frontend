import React from "react";
import { Form, Button } from "react-bootstrap";

const RegisterFooter = ({ promotions, onCheck, onSubmit, isFormValid }) => {
  return (
    <div className="mt-4">
      <Form.Group controlId="promotionsCheckbox">
        <Form.Check
          type="checkbox"
          label="Send me job updates and promotions"
          checked={promotions}
          onChange={(e) => onCheck(e.target.checked)}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="button"
        className="mt-3 w-100"
        onClick={onSubmit}
        disabled={!isFormValid}
      >
        Register
      </Button>
    </div>
  );
};

export default RegisterFooter;
