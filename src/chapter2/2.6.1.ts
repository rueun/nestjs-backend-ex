function first() {
  console.log('first(): factory evaluated');
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('first(): called');
  }
}

function second() {
  console.log('second(): factory evaluated');
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('second(): called');
  }
}

class ExampleClass {
  // 데코레이터의 표현은 위에서 아래로 실행된다.
  // 데코레이터는 아래에서 위로 호출된다.
  @first()
  @second()
  method() {
    console.log('method(): called');
  }
}

const example = new ExampleClass();
example.method();

