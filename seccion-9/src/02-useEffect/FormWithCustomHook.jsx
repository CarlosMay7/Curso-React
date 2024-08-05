import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const {username, email, password} = formState;
  

  return (
    <>
        <h1>Custom Hook Form</h1>

        <hr />

        <input type="text" className="form-control" name="username" placeholder="username" value={username} onChange={onInputChange} />
        <input type="email" className="form-control mt-2" name="email" placeholder="email" value={email} onChange={onInputChange} />
        <input type="password" className="form-control mt-2" name="password" placeholder="password" value={password} onChange={onInputChange} />

        <button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>
    </>
  )
}
