import { useForm } from "react-hook-form";

export default function Contact(){

  const { register, formState: { errors } ,handleSubmit } = useForm();

  const OnSubmit = (data) => {
    console.log(data)
  }

  return(
    <div className= "container p-4 align-items-center 100-w 100-vh" >
      <h2>Formulario Contacto</h2>

      <form onSubmit={handleSubmit(OnSubmit)}>
        <div className="mb-3">
          <label for="" className="form-label">Nombre</label>
          <input type="text" { ...register('name', {
            required: true,
            maxLength: 10
          })} />
          {errors.name?.type === 'required' && <p>Este campo es Requerido</p>}
          {errors.name?.type === 'maxLenght' && <p>El nombre debe contener mas de 10 Caracteres</p>}
        </div>
      
        <div className="mb-3">
          <label for="" className="form-label">Apellido</label>
          <input type="text" { ...register('surname', {
            required: true,
            maxLength: 10
          })} />
          {errors.surname?.type === 'required' && <p>Este campo es Requerido</p>}
          {errors.surname?.type === 'maxLenght' && <p>El Apellido debe contener mas de 10 Caracteres</p>}
        </div>

        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="text" { ...register('email', {
            required: true,
            pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
          })} />
          {errors.email?.type === 'pattern' && <p>El formato del Email es incorrecto</p>}
          {errors.email?.type === 'required' && <p>Este campo es requerido</p>}
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Mensaje</label>
          <textarea rows='10' cols='40' type="text" {...register('message' , {
            required: true,
            //pattern:
          })}/>
          {errors.password?.type === 'required' }

        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  )
};
