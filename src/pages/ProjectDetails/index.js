import React, { useEffect, Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "../../components/Button";
import axios from 'axios';
import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const ProjectDetail = (props) => {
    const history = useHistory();
    // const url = 'https://savings-back.herokuapp.com/api/'
    const url = 'http://localhost:3001/api'
    const [data, setData] = useState(null)
    const [payment, setPayment] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let {
        match: {
            params: { id },
        },
    } = props;
    useEffect(() => {
        axios
            .get(url + '/project/' + id)
            .then((res) => {
                if (res.data.status === 200) {
                    setData(res.data.data)
                }
                toast(res.data.message);
                // setShouldSubmit(true);
            }).catch((e) => {
            });
        loadStripe();

    }, [])

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

    const contribute = () => {
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
                        projectId: data._id
                    };
                }
            }
        );
    }
    return (
        <Fragment>{data ?
            <div>
                <h4>Project Detail</h4>
                <p>{data.name}</p>
                <img src={data.image} />
                <Button type="button" onClick={handleShow}>
                    Contribute
              </Button>
            </div>
            : null}
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal></Fragment>
    );
};

export default ProjectDetail;
