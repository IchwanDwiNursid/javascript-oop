class Configuration {
   static name = "ichwan"
   static version = 1.0
   static author = "dwi"
}

const config = new Configuration()
console.info(config.name)

console.log(Configuration.name)