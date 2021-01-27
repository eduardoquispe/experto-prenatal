import { Form, Grid, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./FormQuestionnaire.scss";

const FormQuestionnaire = () => {
  const formik = useFormik({
    initialValues: initialState(),
    validationSchema: yup.object(validationSchema()),
    onSubmit: (values) => {},
  });

  return (
    <div className="FormQuestionnaire">
      <Form onSubmit={formik.handleSubmit}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Edad gestante</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Input
                type="text"
                placeholder="15"
                name="edadGestante"
                value={formik.values.edadGestante}
                onChange={formik.handleChange}
                error={formik.errors.edadGestante}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Peso pre-gestante</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Input
                type="text"
                name="pesoPreGestante"
                value={formik.values.pesoPreGestante}
                onChange={formik.handleChange}
                error={formik.errors.pesoPreGestante}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Peso gestante</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Input
                type="text"
                name="pesoGestante"
                value={formik.values.pesoGestante}
                onChange={formik.handleChange}
                error={formik.errors.pesoGestante}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Temperatura</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Input
                type="text"
                name="temperatura"
                value={formik.values.temperatura}
                onChange={formik.handleChange}
                error={formik.errors.temperatura}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Precion Arterial</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Group>
                <Form.Input
                  type="text"
                  width={9}
                  name="presionArterialNumerador"
                  value={formik.values.presionArterialNumerador}
                  onChange={formik.handleChange}
                  error={formik.errors.presionArterialNumerador}
                />
                {" / "}
                <Form.Input
                  type="text"
                  width={9}
                  name="presionArterialDenominador"
                  value={formik.values.presionArterialDenominador}
                  onChange={formik.handleChange}
                  error={formik.errors.presionArterialDenominador}
                />
              </Form.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Pulso materno</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Input
                type="text"
                name="pulsoMaterno"
                value={formik.values.pulsoMaterno}
                onChange={formik.handleChange}
                error={formik.errors.pulsoMaterno}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Altura uterina</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Input
                type="text"
                name="alturaUterina"
                value={formik.values.alturaUterina}
                onChange={formik.handleChange}
                error={formik.errors.alturaUterina}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Situación</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="situacion"
                options={[
                  { key: "l", text: "Longitudinal", value: "Longitudinal" },
                  { key: "t", text: "Tranversal", value: "Transversal" },
                  { key: "na", text: "No aplica", value: "No aplica" },
                ]}
                value={formik.values.situacion}
                onChange={(_, { value }) =>
                  formik.setFieldValue("situacion", value)
                }
                error={formik.errors.situacion}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Presentación</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="presentacion"
                options={[
                  { key: "l", text: "C", value: "C" },
                  { key: "t", text: "P", value: "C" },
                  { key: "na", text: "No aplica", value: "No aplica" },
                ]}
                value={formik.values.presentacion}
                onChange={(_, { value }) =>
                  formik.setFieldValue("presentacion", value)
                }
                error={formik.errors.presentacion}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Posición</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="posicion"
                options={[
                  { key: "d", text: "D", value: "D" },
                  { key: "i", text: "I", value: "I" },
                  { key: "na", text: "No aplica", value: "No aplica" },
                ]}
                value={formik.values.posicion}
                onChange={(_, { value }) =>
                  formik.setFieldValue("posicion", value)
                }
                error={formik.errors.posicion}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={15} className="content-action">
              <Button type="submit" primary>
                Enviar
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </div>
  );
};

export default FormQuestionnaire;

const initialState = (numeroAtencion = 2) => ({
  numeroAtencion: numeroAtencion,
  edadGestante: "",
  pesoPreGestante: "",
  pesoGestante: "",
  temperatura: "",
  presionArterialNumerador: "",
  presionArterialDenominador: "",
  pulsoMaterno: 60,
  alturaUterina: "",
  situacion: "",
  presentacion: "",
  posicion: "",
  frecuenciaCardiaFetal: "",
  movimientoFetal: "Lontiinal//NA",
  proteinuriaCualitativa: "",
  edema: "",
  reflejoOseotendinoso: "",
  examenDePezon: "",
  indiceHierro: "",
  indiceAcidoFolio: "",
  indiceCalcio: "",
  OrientacionConsejeria: "",
  ECOControl: "",
  perfilBiofisico: "",
  cita: "",
  visitaDomicilia: "",
  planParto: "",
  estabaDeLaAtencion: "",
  numeroFormatoSis: "",
});

const validationSchema = () => {
  return {
    numeroAtencion: yup
      .number()
      .typeError("Solo se permiten números.")
      .required("Este campo es requerido"),
    edadGestante: yup
      .number()
      .typeError("Solo se permiten números.")
      .positive("Solo números postivo.")
      .integer("Solo números enteros.")
      .required("Este campo es requerido"),
    pesoPreGestante: yup
      .number()
      .typeError("Solo se permiten números.")
      .positive("Solo números postivo.")
      .required("Este campo es requerido"),
    pesoGestante: yup
      .number()
      .typeError("Solo se permiten números.")
      .positive("Solo números postivo.")
      .required("Este campo es requerido"),
    temperatura: yup
      .number()
      .typeError("Solo se permiten números.")
      .positive("Solo números postivo.")
      .required("Este campo es requerido"),
    presionArterialNumerador: yup
      .number()
      .typeError("Solo se permiten números.")
      .positive("Solo números postivo.")
      .integer("Solo números enteros.")
      .required("Este campo es requerido"),
    presionArterialDenominador: yup
      .number()
      .typeError("Solo se permiten números.")
      .positive("Solo números postivo.")
      .integer("Solo números enteros.")
      .required("Este campo es requerido"),
    pulsoMaterno: yup
      .number()
      .typeError("Solo se permiten números.")
      .positive("Solo números postivo.")
      .integer("Solo números enteros.")
      .required("Este campo es requerido"),
    alturaUterina: yup
      .number()
      .typeError("Solo se permiten números.")
      .positive("Solo números postivo.")
      .required("Este campo es requerido"),
    situacion: yup.string().required("Este campo es requerido"),
    presentacion: yup.string().required("Este campo es requerido"),
    posicion: yup.string().required("Este campo es requerido"),
  };
};
