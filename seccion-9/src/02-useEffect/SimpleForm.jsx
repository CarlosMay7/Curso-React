import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'May',
        email: 'may@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log('FormState changed')
    }, [formState])

    useEffect(() => {
        // console.log('email changed')
    }, [email])
   

  return (
    <>
        <h1>Simple Form</h1>

        <hr />

        <input type="text" className="form-control" name="username" placeholder="username" value={username} onChange={onInputChange} />
        <input type="email" className="form-control mt-2" name="email" placeholder="email" value={email} onChange={onInputChange} />
   
        {
            (username === 'May2') && <Message />
        }
    </>
  )
}
