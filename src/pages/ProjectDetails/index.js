import React, { useEffect, Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "../../components/Button";
import axios from 'axios';
import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from "../../components/Input";
import { CopyToClipboard } from 'react-copy-to-clipboard';


const ProjectDetail = (props) => {
    const projectUrl = window.location.href
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
            }).catch((e) => {
            });
        loadStripe();

    }, [])

    const changeHandler = (e) => {
        let { name, value } = e.target;
        setPayment({
            ...payment,
            [name]: value,
        });
    }

    let validate = () => {
        if (!payment.number || !payment.exp_month || !payment.exp_year || !payment.cvc || !payment.amount) {
            return false;
        }
        return true;
    }

    // let handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (validate()) {
    //         axios
    //             .post(url + '/login', {
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
            console.log(payment)
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
                        axios
                            .post('/contribute', {
                                ...obj,
                            })
                            .then((res) => {
                                if (res.data.status === 200) {
                                    // localStorage.setItem('saving-token', res.data.token)
                                    // history.push("/profile")
                                    handleClose();
                                }
                                toast(res.data.message);
                            }).catch((e) => {
                            });
                    }
                }
            );
        }
    }

    const copyLink = () => {

    }

    return (

        <Fragment>{data ?
            <div>
                <h4>Project Detail</h4>
                <CopyToClipboard text={projectUrl}>
                    <Button type="button" onClick={() => toast("Copied To Clipboard")}>
                        Invite
              </Button>
                </CopyToClipboard>
                <p>{data.name}</p>
                <img src={data.image} />
                <Button type="button" onClick={handleShow}>
                    Contribute
              </Button>
            </div>
            : null}
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
            </Modal> */}
            </Fragment>
   
   );
};

export default ProjectDetail;
