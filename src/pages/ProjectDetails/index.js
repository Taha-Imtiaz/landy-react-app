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
            .get( '/project/' + id)
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

            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <TextField
                            variant="outlined"
                            className={style.styleFormFields}
                            required
                            fullWidth
                            size="small"
                            id="cardno"
                            label="Card Number"
                            name="number"
                            onChange={changeHandler}
                        />

                        <p>Testing Card #: 4242424242424242</p>
                        <div className={style.currentYear}>
                            <div>
                                <TextField
                                    variant="outlined"
                                    className={style.styleFormFields}
                                    required
                                    fullWidth
                                    size="small"
                                    id="month"
                                    label="Month"
                                    name="exp_month"
                                    onChange={changeHandler}
                                />
                            </div>

                            <div>
                                <TextField
                                    variant="outlined"
                                    className={style.styleFormFields}
                                    required
                                    fullWidth
                                    size="small"
                                    id="year"
                                    label="Year"
                                    name="exp_year"
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>

                        <TextField
                            variant="outlined"
                            className={style.styleFormFields}
                            required
                            fullWidth
                            size="small"
                            id="name"
                            label="CVC"
                            name="cvc"
                            onChange={changeHandler}
                        />

                        <TextField
                            variant="outlined"
                            className={style.styleFormFields}
                            required
                            fullWidth
                            size="small"
                            id="amount"
                            label="Amount"
                            name="amount"
                            onChange={changeHandler}
                        />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal> */}
            </Fragment>
   
   );
};

export default ProjectDetail;
