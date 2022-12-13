const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1/instituto'

mongoose.connect(url, {
    
    })
    .then(()=>console.log('Connected'))
    .catch((e)=>console.log('El error es: ' + e))

//const ObjectId = Schema.ObjectId;

const beneficiarioSchema = mongoose.Schema({
    //id:ObjectId,
    idBeneficiario:Number,
    nombre:String,
    rfc:String,
    estatus:Number
}, {versionKey:false})

const BeneficiarioModel = mongoose.model('beneficiario', beneficiarioSchema, 'beneficiario')

//Mostrar
const mostrar = async ()=>{
    const beneficiario = await BeneficiarioModel.find()
    console.log(beneficiario)
}

const crear = async ()=>{
    const persona = new BeneficiarioModel({
        idBeneficiario:11,
        nombre:'AGUSTD',
        rfc:'MIYO930309AGD',
        estatus:1
    })
    const resultado = await persona.save()
    console.log(resultado)
}
const actualizar = async (id)=>{
    const persona = await BeneficiarioModel.updateOne({idBeneficiario:id},
    {
        $set:{
            nombre: 'AGUST D',
            RFC: 'MIYO930309AGD'
        }
    })
    console.log(persona)
}

const eliminar = async(id)=>{
    const persona = await BeneficiarioModel.deleteOne({idBeneficiario:id})
    console.log(persona)
}

//mostrar()
//crear()
//actualizar(11)
//eliminar(3)