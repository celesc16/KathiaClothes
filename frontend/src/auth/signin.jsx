import { useForm } from "react-hook-form";
export default function SigIn(){

  const { register, formState: { errors } ,handleSubmit } = useForm();

  const OnSubmit = (data) => {
    console.log(data)
  }

  return(
    <div className= "container_form" >
      <div className="contact-wrapper">
        <div className="contact-form">
          <h3 className="text-center">Formulario de Inicio</h3>
          <form onSubmit={handleSubmit(OnSubmit)}>
            <p>
              <label >Email</label>
              <input type="text" { ...register('email', {
                required: true,
                pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
              })} />
              {errors.email?.type === 'pattern' && <p>El formato del Email es incorrecto</p>}
              {errors.email?.type === 'required' && <p>Este campo es requerido</p>}
            </p>

            <p className="block">
              <label>Password</label>
              <input type="text" {...register('password' , {
                required: true,
                //pattern:
              })}/>
              {errors.password?.type === 'required' }
            </p>

            <p>
              <label>Terminos y condiciones</label>
              <input type="check-box"></input>
            </p>

            <p className="block">
              <button type="submit">Enviar</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

