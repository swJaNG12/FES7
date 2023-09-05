class VendingMachineFunc {
  // 필요한 재로
  // 여기서는 이벤트를 붙이는 것이다.
  // 콜라 클릭했을 때 이벤트 등등

  // 만약 입금 버튼을 누른다면
  // 입금 버튼을 찾아야하고, 우리가 적은 입금 금액 input창, 그리고 그 금액의 들어갈 잔액부분을 찾아야 한다.

  // 그래서 우리가 기능을 구현하려면 DOM에 먼저 접근해야한다.

  constructor() {
    const vMachine = document.querySelector('.section1');

    // 잔액 부분
    this.balance = vMachine.querySelector('.bg-box p');

    // cola list(버블링, 이벤트 위임 하기 위해 list로 잡음)
    this.itemList = vMachine.querySelector('.cola-list');

    // 입금액
    this.inputCostEl = vMachine.querySelector('#input-money');

    // 입금 버튼, 유일한 id를 가진 입금액 input 바로 옆에 버튼으로 찾는다.
    this.btnPut = vMachine.querySelector('#input-money+.btn');

    // 거스름돈 반환 버튼
    this.btnReturn = vMachine.querySelector('.bg-box+.btn')

    // 획특 버튼
    this.btnGet = vMachine.querySelector('.btn-get');

    // 선택한 음료리스트 
    this.stagedList = vMachine.querySelector('.get-list');

    
    
    // section2 요소 선택
    const myInfo = document.querySelector('.section2');

    // 소지금 정보
    this.myMoney = myInfo.querySelector('.bg-box p');



    // section3 요소 선택
    const getInfo = document.querySelector('.section3');

    // 획득 음료 리스트
    this.getList = getInfo.querySelector('.get-list');

    // 총금액
    this.txtTotal = getInfo.querySelector('.total-price');
    
  }

  setup() {
    this.bindEvents();
  }

  // 3)
  // 장바구니에 선택한 음료수의 목록을 생성하는 함수
  // target에는 콜러버튼을 클릭할 때마다 콜라가 하나씩 들어온다.
  // 아래 같은 구조로 데이터를 변경한다.
  // <li>
  //   <img src="./images/cola-green.png" alt="">
  //   Green_Cola
  //   <strong>
  //     2
  //     <span class="a11y-hidden">개</span>
  //   </strong>
  // </li>
  stagedItemGenerator(target) {
    const stagedItem = document.createElement('li');
    stagedItem.dataset.item = target.dataset.item;
    stagedItem.dataset.img = target.dataset.img;
    stagedItem.dataset.price = target.dataset.price;
    stagedItem.innerHTML = 
    `
      <img src="./images/${target.dataset.img}" alt="">
      ${target.dataset.item}
      <strong>
        1
        <span class="a11y-hidden">개</span>
      </strong>
    `;
    this.stagedList.append(stagedItem);

  }


  // 찾은 요소에 이벤트를 붙입니다.
  bindEvents() {
    /**
     * 1. 입금 버튼 기능 구현
     * 입금 버튼을 클릭했을 때 무슨일이 일어나는지 생각
     * 
     * 1) 눌렀을 때 우리 소지금이 차감되야 한다.
     *    소지금 === 소지금 - 입금액
     * 2) 그리고 잔액에 우리가 입력한 입금액 만큼 더해야 한다.
     *    잔액 === 기존 잔액 + 입금액
     * 3) 그리고 소지금보다 많은 입금액이 입력 됐을 때의 예외처리
     *    입금액이 소지금보다 많으면 '소지금이 부족합니다' 경고창을 띄웁니다.
     * 4) 그리고 우리가 입력한 입급액 입력창 초기화
     * 5) 입금액이 있는지 없는지 확인해야 한다.
     */
    this.btnPut.addEventListener('click', () => {
      // 사용자가 입력한 값
      const inputCost = parseInt(this.inputCostEl.value);
      // 소지금(현재 사용자의 돈)
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',',''));
      // 현재 자판기 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));

      // 5) 입금액이 있는지 없는지 확인
      // 있다면, 내 잔액보다 적거나 같고 0보다 크다면
      if(inputCost && inputCost > 0) {
        if(inputCost <= myMoneyVal) {
          // 1)
          // this로 찾는 이유는 현재 myMoney의 값을 의미한다.
          // 그냥 이렇게 하면 소지금이 변할 때 ,가 사라진다. 
          // intl, 
          // new Intl.NumberFormat().format(계산한 값) = 금액단위 유지 할 때 사용, 현재 사용자가 사용하는 컴퓨터 국가 단위로 자동으로 계산
          
          // 1)
          this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + ' 원';
  
          // 2)
          console.log(balanceVal)
          this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + ' 원';
        } else {
          // 3)
          alert('소지금이 부족합니다.');
        }

        // 4)
        this.inputCostEl.value = null;
      }

    })


    /**
     * 2. 거스름돈 반환 기능구현
     * 거스름돈 반환 버튼을 누르면 어떤 일이 일어나는가 먼저 생각
     * 잔액이 있을 때 잔액이 사라지고, 그 사라진 돈 만큼 
     * 사용자의 소지금이 증가해야 한다.
     * 1) 잔액이 초기화된다.
     * 2) 소지금이 증가한다, 소지금 === 소지금 + 잔액
     */
    this.btnReturn.addEventListener('click', () => {
      // 소지금(현재 사용자의 돈)
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',',''));
      // 현재 자판기 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));

      // 잔액이 있는지 확인
      if(balanceVal) {
        this.myMoney.textContent = Intl.NumberFormat().format(myMoneyVal + balanceVal) + ' 원';

        this.balance.textContent = null;
      }
    })

    /**
     * 3. 자판기 메뉴 기능
     * 리스트에 있는 콜라를 눌렀을 때 무슨일이 벌어져야 하는가
     * 콜라를 선택했다면 일단 잔액에서 콜라 가격만큼 차감
     * 그다음에 콜라가 장바구니로 이동
     * 그리고 콜라가격이 잔액보다 높다면 콜라가 눌리면 안되니까 경고창 출력
     * 그 다음에 콜라에 data 속성에 data-count가 변경되어야 한다.
     * data-count가 0이 되면 품절 표시를 붙인다.
     * 이때 button에 disabled와 strong품절이 추가되야 한다.
     * 
     * 1) 콜라를 누르면 잔액 === 잔액 - 콜라 가격
     * 2) 콜라 가격보다 잔액이 적다면 "잔액이 부족합니다." 경고창 출력
     * 3) 콜라가 장바구니에 등록
     * 4) 콜라의 data-count 값을 -1 한다.
     * 5) 만약 data-count값이 0이라면 button 요소에 disabled 속성이 추가되고 콜라 템플릿에 strong 태그가 추가되어야한다.
     * 
     */
    const colaBtns = this.itemList.querySelectorAll('button');
    console.log(colaBtns)
    colaBtns.forEach((colaBtn) => {
      colaBtn.addEventListener('click', e => {
        console.log('click')
        // 현재 잔액
        const balanceVal = parseInt(this.balance.textContent.replaceAll(',',''));

        // 클릭한 콜라의 가격(버튼의 data 속성에 접근)
        const targetElPrice = parseInt(colaBtn.dataset.price);

         // 3) 장바구니에 담는데 내가 클릭한 콜라의 이름과
        // 현재 장바구니에 있는 콜라의 이름과 동일한지 확인한다
        const stagedListItem = this.stagedList.querySelectorAll('li')

        // 장바구니에 콜라가 현재 있는지 불리언으로 관리
        let isStaged = false

        // 현재 잔액과 콜라가격을 비교
        if(balanceVal >= targetElPrice) {
          // 잔액이 콜라 가격보다 많거나 동일하다면
          //  1)
          this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + ' 원';
      
          for (const item of stagedListItem) {
            // 선택한 콜라가 이미 장바구니에 존재하는 경우
            if(item.dataset.item === colaBtn.dataset.item) {
              console.log(item.querySelector('strong').textContent);


              // 장바구니에 콜라가 있다면 그 콜라의 카운트를 1 증가
              const itemTxt =item.querySelector('strong');
              itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + 1;
              isStaged = true;
              break;
            }
          }
          
          
          // 3)
          // 콜라를 장바구니에 담기
          if(!isStaged) {
            this.stagedItemGenerator(colaBtn)
          }
          
          // 4)
          colaBtn.dataset.count--;

          // 5)
          // 만약 콜라의 카운트가 0이된다면
          if(!parseInt(colaBtn.dataset.count)) {
            // disabled 속성추가
            colaBtn.disabled = true;

            // strong 품절태그 추가
            //  <strong class="soldout">품절</strong>
            colaBtn.insertAdjacentHTML('afterbegin', '<strong class="soldout">품절</strong>')
          }


        } else {
          // 2)
          alert('잔액이 부족합니다. 돈을 더 입금해주세요.');
        }
      }) 
    })


    /**
     * 4. 획득 버튼 기능 구현
     * 1) 획득 버튼을 누르면 선택한 음료수 목록이 음료 목록으로 이동
     * 2) 획특한음료의 금액을 모두 합하여 총 금액 업데이트
     */

    // this.btnGet.addEventListener('click', () => {
    //   // 장바구니 리스트
    //   const itemStgedList = this.stagedList.querySelectorAll('li');

    //   // 획득한 음료 리스트
    //   const itemGetList = this.getList.querySelectorAll('li');

    //   // 장바구니리스트 를 획득한 음료 리스트로 옮긴다.
    //   // 1번 방법 순회 ,docFrag, 2번 빙법 스프레드
    //   // 1번 순회, 프레그먼트
    //   // const docFrag = new DocumentFragment();
    //   // itemStgedList.forEach(item => {
    //   //   docFrag.append(item);
    //   // })
    //   // docFrag.append(...itemStgedList);
    //   // 
    //   // 2번 스프레드
    //   this.getList.append(...itemStgedList);
      
    //   let isStaged = false;

    //   // itemStaged 이유는 장바구니에 있는 음료가 획득한  음료에 있는가 확인하기 위해
    //   for(const itemStaged of itemStgedList) {

    //     for(const itemGet of itemGetList) {
    //       // 장박구니의 콜라가 이미 획득 리스트에 있다면
    //       if(itemStaged.dataset.item === itemGet.dataset.item) {
    //         // 장바구니에 콜라가 있다면 그 콜라의 카운트를 1 증가
    //         const itemTxt = itemGet.querySelector('strong');
    //         itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + 1;
    //         isStaged = true;
    //         break;
    //       }
    //     }

    //     if(!isStaged) {
    //       this.getList.append(itemStaged);
    //     }
        
    //   }
    //   // 장바구니 목록 비우기
    //   this.stagedList.innerHTML = null;

  


    //   this.getList.querySelectorAll('li')

    // })
      this.btnGet.addEventListener('click', () => {
        const itemStagedList = this.stagedList.querySelectorAll('li');
        const itemGetList = this.getList.querySelectorAll('li');
        let totalPrice = 0;
        // 장바구니 아이템을 획득 목록으로 이동하기
        // this.getList.append(...itemStagedList);


        for (const itemStaged of itemStagedList) {

            let isStaged = false;
            for (const itemGet of itemGetList) {
                // 장바구니의 콜라가 이미 획득리스트에 있다면
                if (itemStaged.dataset.item === itemGet.dataset.item) {
                    const itemTxt = itemGet.querySelector('strong');
                    // 획득목록의 콜라의 카운트를 고른 갯수만큼 증가
                    itemTxt.firstChild.textContent = parseInt(itemTxt.firstChild.textContent) + 
                    parseInt(itemStaged.querySelector('strong').firstChild.textContent);

                    isStaged = true;
                    break;
                }
            }

            if (!isStaged) {
                this.getList.append(itemStaged);
            }
        }
        // 장바구니 목록 비우기
        this.stagedList.innerHTML = null;

        // 획득한 음료 리스트를 순환하면서 총 금액 계산
        this.getList.querySelectorAll('li').forEach((itemGet) => {
          totalPrice += parseInt(itemGet.dataset.price) * parseInt(itemGet.querySelector('strong').firstChild.textContent);
        })

        this.txtTotal.textContent = `총 금액 : ${new Intl.NumberFormat().format(totalPrice)} 원`;
    });

  }

  
}

export default VendingMachineFunc;