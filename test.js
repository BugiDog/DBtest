function func (peremennaya, callback) {
    console.log(peremennaya)
    callback()
}

let a = 123
let myfunc = function () {
    console.log('все прошло успешно')
}
func(a, myfunc)