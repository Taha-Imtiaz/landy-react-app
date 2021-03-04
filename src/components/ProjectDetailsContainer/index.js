import React, { useEffect, Fragment, useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Button";
import axios from "axios";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "../../components/Input";
import { CopyToClipboard } from "react-copy-to-clipboard";
import * as S from "./styles";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import ProjectInfoCard from "../ProjectInfoCard";

const ProjectDetailsContainer = (props) => {
  const projectUrl = window.location.href;
  const history = useHistory();

  const [data, setData] = useState(null);
  const [payment, setPayment] = useState({});
  const [show, setShow] = useState(false);
  const [showOwner, setShowOnwer] = useState(false);
  const [email, setEmail] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseOwner = () => setShowOnwer(false);
  const handleShowOwner = () => setShowOnwer(true);
  let {
    match: {
      params: { id },
    },
  } = props;
  useEffect(() => {
    axios
      .get("/project/" + id)
      .then((res) => {
        if (res.data.status === 200) {
          setData(res.data.data);
        }
      })
      .catch((e) => { });
    loadStripe();
  }, []);

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setPayment({
      ...payment,
      [name]: value,
    });
  };

  let validate = () => {
    if (
      !payment.number ||
      !payment.exp_month ||
      !payment.exp_year ||
      !payment.cvc ||
      !payment.amount
    ) {
      return false;
    }
    return true;
  };

  // let handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (validate()) {
  //         axios
  //             .post('/login', {
  //                 ...values,
  //             })
  //             .then((res) => {
  //                 if (res.data.status === 200) {
  //                     localStorage.setItem('saving-token', res.data.token)
  //                     history.push("/profile")
  //                 }
  //                 toast(res.data.message);
  //             }).catch((e) => {
  //             });
  //     } else {
  //         toast("Please fill the valid values.");
  //     }
  // };

  const loadStripe = () => {
    if (!window.document.getElementById("stripe-script")) {
      let s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => {
        window["Stripe"].setPublishableKey(
          "pk_test_51HfgSrIoqQ2sulu0x4TK6K2atQHghj1iIthjdrpD9qkE1yLx8nEFEYysxJrXn16tz6caSn1kMFFD6YnUl2MK05C800tBcU5bIH"
        );
      };
      window.document.body.appendChild(s);
    }
  };

  const contribute = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(payment);
      window.Stripe.card.createToken(
        {
          number: payment.number,
          exp_month: payment.exp_month,
          exp_year: payment.exp_year,
          cvc: payment.cvc,
        },
        (status, response) => {
          if (status === 200) {
            let obj = {
              stripeToken: response.id,
              amount: payment.amount,
              projectId: data._id,
            };
            axios
              .post("/contribute", {
                ...obj,
              })
              .then((res) => {
                if (res.data.status === 200) {
                  // localStorage.setItem('saving-token', res.data.token)
                  // history.push("/profile")
                  handleClose();
                }
                toast(res.data.message);
              })
              .catch((e) => { });
          }
        }
      );
    }
  };

  const changeHandlerOnwer = (e) => {
    setEmail(e.target.value);
  };

  const addOwner = () => {
    console.log(email);
    if (email) {
      let obj = {
        id: data._id,
        email,
      };
      axios
        .post("/add-owner", {
          ...obj,
        })
        .then((res) => {
          if (res.data.status === 200) {
            // localStorage.setItem('saving-token', res.data.token)
            // history.push("/profile")
            handleCloseOwner();
            setData(res.data.data);
          }
          toast(res.data.message);
        })
        .catch((e) => { });
    }
  };
  return (
    <S.ProjectDetailsContainer>
      {data ? (
        <S.ProjectDetailsContainerArea>
          <S.ProjectDetailsContainerUpperArea>
            <Heading fontSize={20}>Project Detail</Heading>
            {/* <CopyToClipboard text={projectUrl}>
              <Button
                type="button"
                onClick={() => toast("Copied To Clipboard")}
              >
                Invite
              </Button>
            </CopyToClipboard> */}
          </S.ProjectDetailsContainerUpperArea>

          <S.ProjectDetailsContainerLowerArea>
            <S.ProjectInfoContainer>

              <S.ProjectInfoCard>
                <ProjectInfoCard data={data} />
              </S.ProjectInfoCard>

              <S.ProjectOwnerInfo>
                <S.AddOwnerBtn>
                  <Heading fontSize={20}>Owners</Heading>

                  <Button type="button" onClick={handleShowOwner}>
                    Add Owner
                  </Button>
                </S.AddOwnerBtn>

                {data.owner.map((ownerObj) =>

                  <S.ProjectOwnerInfoContent>
                    <S.ProjectOwnerImage><S.ImageArea src="https://res.cloudinary.com/dz8zgvu8s/image/upload/v1570542639/user1.jpg" /></S.ProjectOwnerImage>
                    <S.ProjectOwnerName>
                      <Paragraph fontSize={12}>
                        {ownerObj.name}
                      </Paragraph>
                      <Paragraph fontSize={12}>
                        {ownerObj.email}
                      </Paragraph>
                    </S.ProjectOwnerName>

                  </S.ProjectOwnerInfoContent>

                )}

              </S.ProjectOwnerInfo>
            </S.ProjectInfoContainer>



            <S.ProjectDetailsContainerButtons>
              <S.ProjectDetailsContainerButtonsArea>

                <Button type="button" onClick={handleShow}>
                  Contribute
          </Button>

                <CopyToClipboard text={projectUrl}>
                  <Button
                    type="button"
                    onClick={() => toast("Copied To Clipboard")}
                  >
                    Invite
              </Button>
                </CopyToClipboard>
                <Button>Delete</Button>
              </S.ProjectDetailsContainerButtonsArea>
            </S.ProjectDetailsContainerButtons>
          </S.ProjectDetailsContainerLowerArea>
          {/* <p>{data.name}</p>
          <img src={data.image} />
          <Button type="button" onClick={handleShow}>
            Contribute
          </Button>
          <Button type="button" onClick={handleShowOwner}>
            Add Owner
          </Button> */}
        </S.ProjectDetailsContainerArea>
      ) : null}
      <ToastContainer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contribute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Input
              type="number"
              variant="outlined"
              required
              fullWidth
              size="small"
              id="Card No"
              label="Card Number"
              name="number"
              onChange={changeHandler}
            />

            <p>Testing Card #: 4242424242424242</p>
            <div>
              <div>
                <Input
                  variant="outlined"
                  required
                  size="small"
                  id="Month"
                  label="Month"
                  name="exp_month"
                  onChange={changeHandler}
                />
              </div>

              <div>
                <Input
                  variant="outlined"
                  size="small"
                  id="Year"
                  label="Year"
                  name="exp_year"
                  onChange={changeHandler}
                />
              </div>
            </div>

            <Input
              variant="outlined"
              size="small"
              id="CVC"
              label="CVC"
              name="cvc"
              onChange={changeHandler}
            />

            <Input
              type="number"
              variant="outlined"
              size="small"
              id="Amount"
              label="Amount"
              name="amount"
              onChange={changeHandler}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button> */}
          <Button variant="primary" onClick={contribute}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add onwer modal */}
      <Modal show={showOwner} onHide={handleCloseOwner}>
        <Modal.Header closeButton>
          <Modal.Title>Contribute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Input
              type="email"
              variant="outlined"
              size="small"
              id="Email"
              label="Enter Email"
              name="email"
              onChange={changeHandlerOnwer}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button> */}
          <Button variant="primary" onClick={addOwner}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </S.ProjectDetailsContainer>
  );
};

export default withRouter(ProjectDetailsContainer);
