import ColaGenerator from "./js/colaGenerator.js";
import VendingMachineFunc from "./js/vendingMachineFunc.js";


// 이 코드는비동기로 동작한다.
// 왜냐하면 loadData가 비동기 동작으로 데이터를 불러오기 때문이다.
// 그래서 await가 없으면 vendingMe에서 이 클래스에서 만든 콜라 버튼을 찾을 수 없다.
const colaGenerator = new ColaGenerator();
await colaGenerator.setup()
// top레벨 await
// console.log(await ColaGenerator.loadData())

const vendingMachineFunc = new VendingMachineFunc();
vendingMachineFunc.setup();