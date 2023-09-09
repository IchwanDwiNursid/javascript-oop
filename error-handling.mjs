import { ValidationError } from "./error-class.mjs";
import { MathUtil } from "./error.mjs";


try{
    console.info(MathUtil.sum())
    console.log('Code Program akan berhenti')
}catch(error){
    if(error instanceof ValidationError){
        console.log(`Terjadi error di field : ${error.field}, dengan pesan :${error.message}`)
    }else{
        console.log(`terjadi error ${error.message}`)
    }
}finally{
    console.log('code program telah selesai')
}