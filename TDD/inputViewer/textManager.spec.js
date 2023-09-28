describe('텍스트 관리자 입니다.', () => { 

  const textManager = new TextManager();
 
  it('텍스트 값을 가져옵니다.', () => {
    const initaValue = textManager.getValue();
    expect(textManager.getValue()).toBe(initaValue)
  })

  it('텍스트 값을 수정합니다.', () => {
    const testValue = 'hello zebras';

    textManager.setValue(testValue);
    expect(textManager.getValue()).toBe(testValue);
  });
  
})