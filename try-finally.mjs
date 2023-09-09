class Counter {
    #counter = 1

    next(){
        try{
            return this.#counter
        }finally{
            this.#counter++
        }
    }
}

const counter = new Counter
console.info(counter.next())
counter.next()
counter.next()
counter.next()
counter.next()
console.info(counter.next())