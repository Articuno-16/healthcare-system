import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import AccountManage from './Account';

export default function Account() {
    const [info, setInfo] = useState({});
    const id = localStorage.getItem('id');

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = `http://localhost/api/getUser/?id=${id}`;
        axios.put(url, info).then((res) => {
            console.log(res);
        });
    };

    const handleAge = () => {
        if (info.birthday) 
        {
            let from = info.birthday.split('-')[0]*1;
            let to = new Date();
            return to.getFullYear() - from;
        }
        return;
    }

    const handleChange = (event) => {
        setInfo((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    useEffect(() => {
        if (id) {
            console.log(id);
            const url = `http://localhost/api/getUser/?id=${id}`;
            axios.get(url).then((res) => {
                if (res.data) setInfo(res.data[0]);
            });
        }
    }, [id]);
    
    if (id)
        return <AccountManage props={{info, handleSubmit, handleChange, age : handleAge()}}/> 
    return <Navigate to="/" />;
}
