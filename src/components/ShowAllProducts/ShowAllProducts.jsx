import { useState, useEffect } from 'react';
import { getAllProducts, deleteProduct, updateProduct } from '../../Routes/products.routes';
import { Formik, Field, Form, ErrorMessage } from 'formik';


function ShowProducts() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedItem, setEditedItem] = useState({});
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    // Lógica para obtener los datos de la API y almacenarlos en el estado 'data'
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const products = await getAllProducts();
        console.log(products);
        setData(products.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleEdit = (id) => {
    // Lógica para editar el elemento con el ID proporcionado
    setSelectedItem(id);
    setEditedItem({ ...id });
    setEditModalOpen(true);
};

  const handleDelete = (id) => {
        deleteProduct(id);
  };
  const handleCancel = () => {
    setEditModalOpen(false);
};

  return (
        <div>
      {Array.isArray(data) ? (
        data.map((item) => (
          <div key={item._id}>
            <h2>{item.name}</h2>
            <p>Category: {item.category}</p>
            <p>Price: {item.price}</p>
            <p>Stock: {item.storage}</p>
            <p>Fecha de vencimiento: {item.expireDate}</p>
            <img src={item.image} alt={item.name} />
            <button onClick={() => handleEdit(item)}>Editar</button>
            <button onClick={() => handleDelete(item._id)}>Borrar</button>
          </div>
        ))
      ) : (
        <p>No hay datos disponibles</p>
      )}
      {selectedItem && editModalOpen && (
                <div>
                <Formik
                        initialValues={selectedItem}
                            // validate={(values)=>{
                            //     let errors = {}
                            //     //Validacion de email
                            //     if(!values.email){
                            //         errors.email = 'Ingrese un email valido'
                            //     }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
                            //         errors.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
                            //     }
                            //     //Validacion contrase;a
                            //     // if(!values.password){
                            //     //     errors.password = 'Por favor ingresa una contraseña'
                            //     // } else if(!/^(?=.*\W).{8,}$/.test(values.password)){
                            //     //     errors.password = 'La contraseña debe contener 8 caracteres o mas y minimo un caracter especial'
                            //     // }
                            // }}
                            onSubmit={(values, {resetForm})=>{
                                console.log(values);
                                updateProduct(values)
                                // handleCloseModal();
                                resetForm();
                                handleCancel();
                                // cambiarFormularioEnviado(true);
                                // setTimeout(() => cambiarFormularioEnviado(false), 5000);
                            }}
                    >
                    {({errors}) => (
                        <Form className="container-form-grid_products">
                                    <div className="form-grid-cell form-grid-cell-big">
                                        <label htmlFor="name">Nombre</label>
                                        <Field
                                        type="name"
                                        id="name"
                                        name="name"
                                        placeholder=""
                                        />
                                    </div>
                                    <div className="form-grid-cell aparence-disable">
                                        <label htmlFor="price">Precio</label>
                                        <Field
                                            type="number"
                                            id="price"
                                            name="price"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="form-grid-cell aparence-disable">
                                        <label htmlFor="storage">Unidad de medida</label>
                                        <Field
                                            type="text"
                                            id="storage"
                                            name="storage"
                                            placeholder=""
                                        />
                                    </div>                            
                                    <div className="form-grid-cell aparence-disable">
                                        <label htmlFor="category">Unidad de medida</label>
                                        <Field
                                            type="text"
                                            id="category"
                                            name="category"
                                            placeholder=""
                                        />
                                    </div>                            
                                    <div className="form-grid-cell aparence-disable">
                                        <label htmlFor="expireDate">Fecha de vencimiento</label>
                                        <Field
                                            type="text"
                                            id="expireDate"
                                            name="expireDate"
                                            placeholder=""
                                        />
                                        {/* <ErrorMessage name="password" component={() => (<div className="error">{errors.password}</div>)} /> */}
                                    </div>
                                    <button className='modal-products-submit' type="submit">
                                        Subir
                                    </button>
                                    <button className="modal-products-submit" onClick={handleCancel}>Cancelar</button>
                        </Form>
                    )}  
                    </Formik>
                </div>
            )}
    </div>
  );
}

export default ShowProducts;