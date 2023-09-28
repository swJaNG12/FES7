class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector('.cola-list');
  }

  // 초기화하는 함수
  async setup() {
    const reponse = await this.loadData();
    this.colaFactory(reponse);
  }

  // 콜라 관련 데이터를 로드
  async loadData() {

    try {
      const response = await fetch('../items.json');
    
      if(!response.ok) {
        throw new Error('HTTP ERROR!! : ', response.status);
      } else {
        return await response.json();
      }
    } catch (error) {
      console.error('콜라데이터를 로딩하는 중에 문제가 발생했습니다. : ',error);
    }
  }


/*
  <li>
    <button type="button" class="btn-cola on">
      <img src="./images/cola-original.png" alt="">
      <span class="cola-name">Original_Cola</span>
      <strong class="cola-price">1000원</strong>
    </button>
  </li>
*/


  // cola list 만들기, 콜라의 템플릿 코드
  colaFactory(data) {
    const docFrag = new DocumentFragment();
    data.forEach((el) => {
      const item = document.createElement('li');
      const itemTemplate = `
        <button type="button" class="btn-cola" data-item="${el.name}"
        data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
          <img src="./images/${el.img}" alt="">
          <span class="cola-name">${el.name}</span>
          <strong class="cola-price">${el.cost}</strong>
        </button>
      `;

      item.innerHTML = itemTemplate;
      docFrag.append(item);
    });

    this.itemList.append(docFrag);
  }
}

export default ColaGenerator;