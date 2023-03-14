import React, {useState, useEffect} from 'react';
import {requestForToken, onMessageListener} from "./firebase";
import toast, { Toaster } from 'react-hot-toast';
export const Notification = () => {
    const [token, setToken] = useState('test')

    function ToastDisplay() {
        return (
            <div>
                <p><b>{token?.title}</b></p>
                <p>{token?.body}</p>
            </div>
        );
    };
    useEffect(() => {
        if (token?.title ){
            notify()
        }
    }, [token])
    const notify = () =>  toast(<ToastDisplay/>);

    requestForToken(setToken);
    onMessageListener().then((payload) => {
        setToken({title: payload?.notification?.title, body: payload?.notification?.body});
    })
        .catch((err) => console.log('failed: ', err));
    return (
        <div>
            <Toaster/>
            {/*<h2>{token}</h2>*/}
        </div>
    )
}


