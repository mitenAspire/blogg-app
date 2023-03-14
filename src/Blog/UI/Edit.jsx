import React, { useState } from "react";
import  axios  from "axios";
import {
  MDBInput,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTextArea,
} from "mdb-react-ui-kit";

export default function App(props) {
  const [basicModal, setBasicModal] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState(" ");
  const toggleShow = () => {
    console.log(props.props);
    setname(props.props.name);
    setemail(props.props.email);
    setpassword(props.props.password);
    setBasicModal(!basicModal);
  };
  const UpdateUser = () => {
    
    let id = props.props.id;
    let item = { name, email, password, id };
    console.log(item);
    axios.put("http://localhost:8000/employee/" + id, {
        username: name,
        email:email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      });
  }



  return (
    <>
      <MDBBtn onClick={toggleShow} className="mx-2">
        EDIT
      </MDBBtn>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBModalBody>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  id="Name"
                  type="Name"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Category"
                  id="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  type="category"
                />
                <MDBTextArea
                  label="Message"
                  id="textAreaExample"
                  rows={4}
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </MDBModalBody>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn onClick={UpdateUser}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}