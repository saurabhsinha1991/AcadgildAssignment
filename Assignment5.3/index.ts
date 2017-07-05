//A
function MyMethodDecorator (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
   console.log('target' + target);
    console.log('propertyKey' + propertyKey);
    console.log('descriptor' + descriptor);
}


class Class1 {
    @MyMethodDecorator
    print(output: string) {
        console.log(`classMyMethodDecoratorExample.print (${output}) called.`);
    }
}


let testObj = new Class1();
testObj.print("test");


//B
function MyStaticMethodDecorator(
    target: Function,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
) {
     console.log('target' + target);
    console.log('propertyKey' + propertyKey);
    console.log('descriptor' + descriptor);
}


class Class2 {
    @MyStaticMethodDecorator
    static print(output: string) {
        console.log(`MyStaticMethodDecoratorExample.print(${output}) called.`);
    }
}


Class2.print("test");