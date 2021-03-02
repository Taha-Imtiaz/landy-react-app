import React, { useEffect, useState, Fragment } from 'react'
import ProfilePageContainer from '../../components/ProfilePageContainer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Profile = () => {
    const [data, setData] = useState(null)
    const history = useHistory();

    const url = 'http://localhost:3001/api'

    useEffect(() => {
        let token = localStorage.getItem('saving-token')
        if (token) {
            axios
                .get(url, {
                    headers: {
                        "Authorization": token
                    }
                })
                .then((res) => {
                    if (res.data.status === 200) {
                        setData(res.data.data)
                    }
                }).catch((e) => {
                });
        } else {
            history.push("/signin")
        }
    }, [])

    return (
        <Fragment>
            {data ? <ProfilePageContainer data={data} /> : null}
        </Fragment>
    )
}

export default Profile
