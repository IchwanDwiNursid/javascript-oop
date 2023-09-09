class MathUtil{
    static sum(...numbers){
        let total = 0

        for (const number of numbers) {
            total += number
        }

        return total
    }
}

const sum = MathUtil.sum(121312,241315,331551,415135,56474,648648,7486666,848684,946843,135385,25794,3575795,475594,5482635,6356768,5335367,83563534,93656357,135664,246724,3245513,4134156,5245642,6254256,7254644444446,84315642,913454,1431510)
console.info(sum)