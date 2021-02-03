import { useState } from "react";
import { Form, Grid, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as yup from "yup";
import "./FormQuestionnaire.scss";
import { getResult } from "../../api/questionnaire";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const FormQuestionnaire = ({ setResponseList }) => {

  const [loading, setLoading] = useState(null);
  const { id } = useParams();

  const formik = useFormik({
    initialValues: initialState(id),
    validationSchema: yup.object(validationSchema()),
    onSubmit: async (values) => {
      const data = {
        ...values,
        precionArterial: values.presionArterialNumerador
      }
      delete (data["presionArterialNumerador"]);
      delete (data["presionArterialDenominador"]);
      setLoading(true);
      try {
        const response = await getResult(data);
        toast.success('Resultados obtenidos correctamente');
        setLoading(false);
        setResponseList(response.data)
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error(error);
      }
    }
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
                name="edadGestante"
                value={formik.values.edadGestante}
                onChange={formik.handleChange}
                error={formik.errors.edadGestante}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Peso pre-gestante (kg)</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Input
                type="text"
                name=""
                disabled
                defaultValue={65}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Peso gestante (kg)</label>
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
              <label>Temperatura (°C)</label>
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
                  width={8}
                  name="presionArterialNumerador"
                  value={formik.values.presionArterialNumerador}
                  onChange={formik.handleChange}
                  error={formik.errors.presionArterialNumerador}
                />
                <span style={{fontSize: "2rem", marginTop: ".5rem"}} >/</span>
                <Form.Input
                  type="text"
                  width={8}
                  disabled
                  name="presionArterialDenominador"
                  defaultValue={120}
                  // onChange={formik.handleChange}
                  // error={formik.errors.presionArterialDenominador}
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
              <label>Altura uterina (cm)</label>
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
                  { key: "t", text: "Transverso", value: "Transverso" },
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
                  { key: "l", text: "Cefálico", value: "cefalico" },
                  { key: "t", text: "Podalico", value: "podalico" },
                  { key: "na", text: "No aplica", value: "NA" },
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
                  { key: "d", text: "Derecho", value: "derecho" },
                  { key: "i", text: "Izquierdo", value: "izquierdo" }
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
            <Grid.Column width={7}>
              <label>F.C.F (por min/NA)</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Input
                type="text"
                name="frecuenciaCardiaFetal"
                value={formik.values.frecuenciaCardiaFetal}
                onChange={formik.handleChange}
                error={formik.errors.frecuenciaCardiaFetal}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Mov. Fetal (+/++/+++/SM/NA)</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="movimientoFetal"
                options={[
                  { key: "+", text: "+", value: "+" },
                  { key: "++", text: "++", value: "++" },
                  { key: "+++", text: "+++", value: "+++" },
                  { key: "SM", text: "Sin movimiento", value: "SinMovimiento" },
                  { key: "NA", text: "No aplica", value: "NA" },
                ]}
                value={formik.values.movimientoFetal}
                onChange={(_, { value }) =>
                  formik.setFieldValue("movimientoFetal", value)
                }
                error={formik.errors.movimientoFetal}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Proteinuria cualitativa (+/++/+++/NSH)</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="proteinuriaCualitativa"
                options={[
                  { key: "+", text: "+", value: "+" },
                  { key: "++", text: "++", value: "++" },
                  { key: "+++", text: "+++", value: "+++" },
                  { key: "NAH", text: "NSH", value: "NSH" },
                ]}
                value={formik.values.proteinuriaCualitativa}
                onChange={(_, { value }) =>
                  formik.setFieldValue("proteinuriaCualitativa", value)
                }
                error={formik.errors.proteinuriaCualitativa}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Edema (+/++/+++/SE)</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="edema"
                options={[
                  { key: "+", text: "+", value: "+" },
                  { key: "++", text: "++", value: "++" },
                  { key: "+++", text: "+++", value: "+++" },
                  { key: "SE", text: "Sin edema", value: "SinEdema" },
                ]}
                value={formik.values.edema}
                onChange={(_, { value }) =>
                  formik.setFieldValue("edema", value)
                }
                error={formik.errors.edema}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Reflejo Osteotendinoso (0,+/++/+++)</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="reflejoOseotendinoso"
                options={[
                  { key: "0", text: "0", value: "0" },
                  { key: "+", text: "+", value: "+" },
                  { key: "++", text: "++", value: "++" },
                  { key: "+++", text: "+++", value: "+++" },
                ]}
                value={formik.values.reflejoOseotendinoso}
                onChange={(_, { value }) =>
                  formik.setFieldValue("reflejoOseotendinoso", value)
                }
                error={formik.errors.reflejoOseotendinoso}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Exámen de pezón (Formado/No Form/Sin Exam)</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="examenDePezon"
                options={[
                  { key: "formado", text: "Formado", value: "formado" },
                  { key: "noForm", text: "No formado", value: "no formado" },
                  { key: "sinExam", text: "Sin Exámen", value: "sin examen" }
                ]}
                value={formik.values.examenDePezon}
                onChange={(_, { value }) =>
                  formik.setFieldValue("examenDePezon", value)
                }
                error={formik.errors.examenDePezon}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Indic. Fierro/Ac. Fólico (mayor o igual a 16 sem)</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="indiceFierro"
                options={[
                  { key: "si", text: "Si consume", value: "si consume" },
                  { key: "no", text: "No consume", value: "no consume" },
                ]}
                value={formik.values.indiceFierro}
                onChange={(_, { value }) =>
                  formik.setFieldValue("indiceFierro", value)
                }
                error={formik.errors.indiceFierro}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Indic. Calcio (mayor o igual a 20 sem)</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="indiceCalcio"
                options={[
                  { key: "si", text: "Si consume", value: "si consume" },
                  { key: "no", text: "No consume", value: "no consume" }
                ]}
                value={formik.values.indiceCalcio}
                onChange={(_, { value }) =>
                  formik.setFieldValue("indiceCalcio", value)
                }
                error={formik.errors.indiceCalcio}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Indic. Ac. Fólico</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="indiceAcidoFolio"
                options={[
                  { key: "si", text: "Si consume", value: "si consume" },
                  { key: "no", text: "No consume", value: "no consume" }
                ]}
                value={formik.values.indiceAcidoFolio}
                onChange={(_, { value }) =>
                  formik.setFieldValue("indiceAcidoFolio", value)
                }
                error={formik.errors.indiceAcidoFolio}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Orient. Consej.</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="OrientacionConsejeria"
                options={[
                  { key: "si", text: "Si", value: "si" },
                  { key: "no", text: "No", value: "no" }
                ]}
                value={formik.values.OrientacionConsejeria}
                onChange={(_, { value }) =>
                  formik.setFieldValue("OrientacionConsejeria", value)
                }
                error={formik.errors.OrientacionConsejeria}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>EG. de ECO. Control</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="ECOControl"
                options={[
                  { key: "sem", text: "Se hizo", value: "se hizo" },
                  { key: "no", text: "No se hizo", value: "no se hizo" },
                  { key: "NA", text: "No aplica", value: "NA" }
                ]}
                value={formik.values.ECOControl}
                onChange={(_, { value }) =>
                  formik.setFieldValue("ECOControl", value)
                }
                error={formik.errors.ECOControl}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Perfíl Biosífico</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="perfilBiofisico"
                options={[
                  { key: "sem", text: "Se hizo", value: "se hizo" },
                  { key: "no", text: "No se hizo", value: "no se hizo" },
                  { key: "NA", text: "No aplica", value: "NA" }
                ]}
                value={formik.values.perfilBiofisico}
                onChange={(_, { value }) =>
                  formik.setFieldValue("perfilBiofisico", value)
                }
                error={formik.errors.perfilBiofisico}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Cita</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Input
                type="date"
                name="cita"
                value={formik.values.cita}
                onChange={formik.handleChange}
                error={formik.errors.cita}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Visita domicil.</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="visitaDomicilia"
                options={[
                  { key: "Si", text: "Si", value: "Si" },
                  { key: "No", text: "No", value: "No" },
                  { key: "NA", text: "No aplica", value: "NA" }
                ]}
                value={formik.values.visitaDomicilia}
                onChange={(_, { value }) =>
                  formik.setFieldValue("visitaDomicilia", value)
                }
                error={formik.errors.visitaDomicilia}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Plan Parto</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Select
                placeholder="--Seleccione--"
                name="planParto"
                options={[
                  { key: "constrol", text: "Control", value: "Control" },
                  { key: "visita", text: "Visita", value: "Visita" },
                  { key: "No", text: "No se hizo", value: "no" },
                  { key: "NA", text: "No aplica", value: "NA" },
                ]}
                value={formik.values.planParto}
                onChange={(_, { value }) =>
                  formik.setFieldValue("planParto", value)
                }
                error={formik.errors.planParto}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Estab. de la atención</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Input
                type="text"
                name="establecimientoDeLaAtencion"
                value={formik.values.establecimientoDeLaAtencion}
                onChange={formik.handleChange}
                error={formik.errors.establecimientoDeLaAtencion}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Responsable atensión</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Input
                type="text"
                name="responsable"
                value={formik.values.responsable}
                onChange={formik.handleChange}
                error={formik.errors.responsable}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={7}>
              <label>Nro. Formato SIS</label>
            </Grid.Column>
            <Grid.Column width={9}>
              <Form.Input
                type="text"
                name="numeroFormatoSis"
                value={formik.values.numeroFormatoSis}
                onChange={formik.handleChange}
                error={formik.errors.numeroFormatoSis}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16} className="content-action">
              <Button type="submit" loading={loading} disabled={loading} primary>
                Obtener resultados
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
  pesoGestante: "",
  temperatura: "",
  presionArterialNumerador: "",
  presionArterialDenominador: "",
  pulsoMaterno: "",
  alturaUterina: "",
  situacion: "",
  presentacion: "",
  posicion: "",
  frecuenciaCardiaFetal: "",
  movimientoFetal: "",
  proteinuriaCualitativa: "",
  edema: "",
  reflejoOseotendinoso: "",
  examenDePezon: "",
  indiceFierro: "",
  indiceAcidoFolio: "",
  indiceCalcio: "",
  OrientacionConsejeria: "",
  ECOControl: "",
  perfilBiofisico: "",
  cita: "",
  visitaDomicilia: "",
  planParto: "",
  establecimientoDeLaAtencion: "",
  responsable: "",
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
    frecuenciaCardiaFetal: yup.string().required("Este campo es requerido."),
    movimientoFetal: yup.string().required("Este campo es requerido."),
    proteinuriaCualitativa: yup.string().required("Este campo es requerido."),
    edema: yup.string().required("Este campo es requerido."),
    reflejoOseotendinoso: yup.string().required("Este campo es requerido."),
    examenDePezon: yup.string().required("Este campo es requerido."),
    indiceFierro: yup.string().required("Este campo es requerido."),
    indiceAcidoFolio: yup.string().required("Este campo es requerido."),
    indiceCalcio: yup.string().required("Este campo es requerido."),
    OrientacionConsejeria: yup.string().required("Este campo es requerido."),
    ECOControl: yup.string().required("Este campo es requerido."),
    perfilBiofisico: yup.string().required("Este campo es requerido."),
    cita: yup.string().required("Este campo es requerido."),
    visitaDomicilia: yup.string().required("Este campo es requerido."),
    planParto: yup.string().required("Este campo es requerido."),
    establecimientoDeLaAtencion: yup.string().required("Este campo es requerido."),
    responsable: yup.string().required("Este campo es requerido."),
    numeroFormatoSis: yup.number()
      .typeError("Solo se permiten número")
      .required("Este campo es requerido."),
  };
};
