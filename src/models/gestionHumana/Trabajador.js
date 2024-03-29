import {Schema, model} from 'mongoose';

// tabla trabajador
const TrabajadorSchema = new Schema({
    idPersona: {
        type: Schema.Types.ObjectId,
        ref: 'Persona',
        required: true
    },
    numeroTelefonoAcudiente: {
        type: Number,
        required: true
    }
},{collection: 'Trabajadores'});

// exportacion del modelo
export default model('Trabajador', TrabajadorSchema);