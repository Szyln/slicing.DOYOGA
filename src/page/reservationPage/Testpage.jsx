import React from 'react'

const Testpage = () => {
  const termsInfo = [
    {
      name: '首次體驗',
      engName: 'trial',
      price: 450,
      info: '分基礎、中級、高級可以選擇。初次至 DOYOGA 上課建議選擇此方案。',
      img: '../src/image/woman in white tank top and white leggings bending her body.jpg',
    },
    {
      name: '短期體驗',
      engName: 'short',
      price: 1800,
      info: '分基礎、中級、高級可以選擇。想試著培養瑜珈習慣者可以選擇此方案。',
      img: '../src/image/woman performing yoga.jpg',
    },
    {
      name: '長期體驗',
      engName: 'long',
      price: 5600,
      info: '分基礎、中級、高級可以選擇。有長期習慣做瑜伽者建議選擇此方案。',
      img: '../src/image/woman in blue leggings and black tank top doing yoga.jpg',
    },
  ];
  const [term, setTerm] = useState('trialLesson');
  return (
    <div>Testpage</div>
  )
}

export default Testpage