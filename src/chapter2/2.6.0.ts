function deco(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log('데코레이터 평가됨')
}


// 데코레이터 팩토리 - 데코레이터를 반환하는 함수
function deco2(value: string) {
    console.log('데코레이터2 평가됨')
    return function deco(target: any, key: string, descriptor: PropertyDescriptor) {
        console.log(value)
    }
}


class TestClass {
    @deco
    test() {
        console.log('함수 호출됨')
    }

    @deco2('Hello')
    test2() {
        console.log('함수2 호출됨')
    }
}

const t = new TestClass();
t.test();
t.test2();