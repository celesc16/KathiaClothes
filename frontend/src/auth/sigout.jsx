
export default function SigOut(){


  return(
    <form>
      <div className="form-group">
        <label for="inputName">Ingrese su nombre</label>
        <input type="Name" className="form-control" id="inputName" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label for="inputAge">Ingrese su edad</label>
        <input type="age" className="form-control" id="exampleInputAge" placeholder="Edad" />
      </div>
      <div className="form-group">
        <label for="inputEmail">Ingrese su Email</label>
        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
      </div>
      <div className="form-group">
        <label for="inputPassword1">Ingrese su Password</label>
        <input type="password" className="form-control" id="inputPassword1" placeholder="Password" />
      </div>
      <div className="form-check">  
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )

}