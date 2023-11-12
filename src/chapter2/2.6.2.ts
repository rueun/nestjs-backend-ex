// 클래스 데코레이터
// 클래스 바로 앞에 선언된다.
// 클래스의 생성자에 적용되어 클래스 정의를 읽거나 수정할 수 있다.

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T // 생성자를 인수로 받는다.
) {
    return class extends constructor { // 생성자 리턴
        reportingURL = "http://wwww.example.com";
    };
}

@reportableClassDecorator
class BugReport {
    type = "report";
    title: string;

    constructor(title: string) {
        this.title = title;
    }
}

const bug = new BugReport("Needs dark mode");
console.log(bug);

// 실행결과
// BugReport { type: 'report', title: 'Needs dark mode', reportingURL: 'http://wwww.example.com' }