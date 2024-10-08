import { useForm } from "react-hook-form";

export default function Contact(){

  const { register, formState: { errors } ,handleSubmit } = useForm();

  const OnSubmit = (data) => {
    console.log(data)
  }

  return(
    <div className= "container_form" >
      <div className="contact-wrapper">
        <div className="contact-form">
          <h3 className="text-center">Formulario de Contacto</h3>
          <form onSubmit={handleSubmit(OnSubmit)}>
            <p>
              <label >Nombre</label>
              <input type="text" { ...register('name', {
                required: true,
                maxLength: 10
              })} />
              {errors.name?.type === 'required' && <p>Este campo es Requerido</p>}
              {errors.name?.type === 'maxLenght' && <p>El nombre debe contener mas de 10 Caracteres</p>}
            </p>
          
            <p>
              <label >Apellido</label>
              <input type="text" { ...register('surname', {
                required: true,
                maxLength: 10
              })} />
              {errors.surname?.type === 'required' && <p>Este campo es Requerido</p>}
              {errors.surname?.type === 'maxLenght' && <p>El Apellido debe contener mas de 10 Caracteres</p>}
            </p>

            <p>
              <label >Email address</label>
              <input type="text" { ...register('email', {
                required: true,
                pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
              })} />
              {errors.email?.type === 'pattern' && <p>El formato del Email es incorrecto</p>}
              {errors.email?.type === 'required' && <p>Este campo es requerido</p>}
            </p>

            
            <p>
              <label >Ubicacion</label>
              <input type="text" { ...register('ubication', {
                required: true,
                // averiguar pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
              })} />
              {errors.ubication?.type === 'required' && <p>Este campo es requerido</p>}
            </p>

            <p className="block">
              <label>Mensaje</label>
              <textarea rows='3' type="text" {...register('message' , {
                required: true,
                //pattern:
              })}/>
              {errors.message?.type === 'required' }
            </p>
            <p className="block">
              <button type="submit">Enviar</button>
            </p>
          </form>
        </div>
        <div className="contact-info">
          <h4 className="text-white">Mas Info</h4>
          <ul className="text-white">
            <li>Bakesd</li>
            <li>1111 1111 111 </li>
            <li>conctact@gmail.com</li>
          </ul>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur 
            adipiscing elit eros, suscipit venenatis montes
            quam morbi senectus fringilla lacus nunc, neque 
          </p>
        </div>

      </div>
    </div>
  )
};
