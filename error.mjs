import { ValidationError } from "./error-class.mjs"

export class MathUtil{
    static sum(...numbers){

        if(numbers.length == 0){
            throw new ValidationError('Total parameter harus lebih dari 0', "numbers")
        }else{
            let total = 0

            for (const number of numbers) {
                total += number
            }

            return total
        }
    }
}
