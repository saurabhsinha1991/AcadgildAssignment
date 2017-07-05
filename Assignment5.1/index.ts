function test1() {
    console.log("test1(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("test1(): called");
    }
}

function test2() {
    console.log("test2(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("test2(): called");
    }
}

class test {
    @test1()
    @test2()
    method() {}
}

/*Output
test1(): evaluated
test2(): evaluated
test2(): called
test1(): called
*/