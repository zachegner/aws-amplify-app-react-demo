import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const ExampleToast = ({ children }) => {
    const [show, toggleShow] = useState(false);

    return <>
        {!show && <Button className="btn btn-info" onClick={() => toggleShow(true)}>Click Me</Button>}
        <Toast show={show} onClose={() => toggleShow(false)}>
            <Toast.Header>
                <strong className="mr-auto">Created By Zach Egner</strong>
            </Toast.Header>
            <Toast.Body>{children}</Toast.Body>
        </Toast>
    </>;
};

export default ExampleToast;
