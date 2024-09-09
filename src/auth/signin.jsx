import { NavLink } from "react-router-dom";

export default function SigIn(){


  return (
    <div className= "container p-4 align-items-center 100-w 100-vh" >
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <NavLink type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <NavLink type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <NavLink type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )

}

