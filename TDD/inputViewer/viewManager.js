// 사용자가 입력한 값을 화면에 보여주는 역할
class ViewManager {
  constructor(textManager, options) {

    // 매개변수가 제대로 들어왔는지 확인
    // textManager 가 TextManager의 인스턴스가 아니라면
    if(textManager.constructor !== TextManager) {
      throw Error('textManager 객체가 아닌 다른 것이 전달되었습니다.');
    }

    // options로 전달받을 세가지 요소 중에 누락이 존재한다면
    if(!options.inpTxt || !options.viewerEl || !options.btnEl) {
      throw Error('options에 필요한 요소중 누락된 요소가 존재합니다.');
    }


    // ViewManager 가 알아야할 값은 스트롱태그, 인풋태그 value, 버튼 click이다.
    // 이게 options로 간다.
    this.inpTxt = options.inpTxt;
    this.viewerEl = options.viewerEl;
    this.textManager = textManager;

    options.btnEl.addEventListener('click', () => {
      this.changeValue();
    })
  }

  updateView() {
    // textManager 요소에 사용자가 입력한 값을 가져와서 textManager가 관리하게 합니다.
    this.viewerEl.textContent = this.textManager.getValue();
  }


  changeValue(){
    // input 요소에 사용자가 입력한 값을 가져와서 textManager가 관리하게 합니다.
    this.textManager.setValue(this.inpTxt.value);
    this.updateView();
  }


}