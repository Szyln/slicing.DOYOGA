import React from 'react';
// import Datepicker from '../../../node_modules/vanillajs-datepicker/js/Datepicker';
// import { Datepicker } from 'vanillajs-datepicker';
import { Link } from 'react-router-dom';

const Form = () => {
  // const elem = document.querySelector('input[name="foo"]');
  // const datepicker = new Datepicker(elem, {
  //   // ...options
  // });
  return (
    <form className='row mx-auto col-md-6 col-lg-4 '>
      <h3>
        你選擇的是<span>首次體驗課程-基礎</span>
      </h3>
      {/* <input type='text' name='foo' /> */}
      <div>
        <p>1. 是否接觸過瑜珈?</p>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='radio'
            name='isExperienced'
            id='isExperiencedYes'
            value='yes'
          />
          <label className='form-check-label' htmlFor='isExperiencedYes'>
            是
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='radio'
            name='isExperienced'
            id='isExperiencedNo'
            value='no'
          />
          <label className='form-check-label' htmlFor='isExperiencedNo'>
            否
          </label>
        </div>
      </div>
      <div>
        <p>2. 想改善的生活問題?</p>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='checkbox'
            name='problems'
            id='lackOfStrength'
            value='肌耐力不足'
          />
          <label className='form-check-label' htmlFor='lackOfStrength'>
            肌耐力不足
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='checkbox'
            name='problems'
            id='lackOfFlexibility'
            value='柔軟度不佳'
          />
          <label className='form-check-label' htmlFor='lackOfFlexibility'>
            柔軟度不佳
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='checkbox'
            name='problems'
            id='fullOfPressure'
            value='壓力大'
          />
          <label className='form-check-label' htmlFor='fullOfPressure'>
            壓力大
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='checkbox'
            name='problems'
            id='poorPosture'
            value='姿勢不正'
          />
          <label className='form-check-label' htmlFor='poorPosture'>
            姿勢不正
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='checkbox'
            name='problems'
            id='poorSleepingQuality'
            value='睡眠品質差'
          />
          <label className='form-check-label' htmlFor='poorSleepingQuality'>
            睡眠品質差
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='checkbox'
            name='problems'
            id='lackOfAttention'
            value='注意力不足'
          />
          <label className='form-check-label' htmlFor='lackOfAttention'>
            注意力不足
          </label>
        </div>
      </div>
      <div>
        <p>3. 每週累積運動量約為多少？</p>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='radio'
            name='quantityOfExercise'
            id='above150Min'
            value='150 分鐘以上'
          />
          <label className='form-check-label' htmlFor='above150Min'>
            150 分鐘以上
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='radio'
            name='quantityOfExercise'
            id='from75To150Min'
            value='75~150 分鐘'
          />
          <label className='form-check-label' htmlFor='from75To150Min'>
            75~150 分鐘
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='radio'
            name='quantityOfExercise'
            id='from30To75Min'
            value='30~75 分鐘'
          />
          <label className='form-check-label' htmlFor='from30To75Min'>
            30~75 分鐘
          </label>
        </div>
        <div className='form-check form-check-inline'>
          <input
            className='form-check-input'
            type='radio'
            name='quantityOfExercise'
            id='below30Min'
            value='30 分鐘以下'
          />
          <label className='form-check-label' htmlFor='below30Min'>
            30 分鐘以下
          </label>
        </div>
      </div>
      <div>
        <label htmlFor='reportForDuty' className='form-label'>
          4. 上課預約報到日
        </label>
        <div className='form-text'>
          若還沒有確定的日期，可以等待專員與您聯絡時在做詳細的諮詢哦！
        </div>
        <input
          type='date'
          className='form-control'
          name='reportForDuty'
          id='reportForDuty'
        />
      </div>
      <div>
        <p>5. 填寫基本資料，完成預約後會寄送通知至電子信箱</p>
        <label htmlFor='name' className='form-label'>
          姓名
        </label>
        <input
          type='text'
          className='form-control col-auto'
          name='name'
          id='name'
          placeholder='請輸入您的姓名'
        />
        <label htmlFor='age' className='form-label'>
          年齡
        </label>
        <input
          type='number'
          className='form-control col-auto'
          name='age'
          id='age'
          placeholder='請輸入您的年齡'
        />
        <label htmlFor='gender' className='form-label'>
          性別
        </label>
        <select name='gender' id='gender' className='form-select'>
          <option value='女'>女</option>
          <option value='男'>男</option>
          <option value='不予告知'>不予告知</option>
        </select>
        <label htmlFor='email' className='form-label'>
          電子信箱
        </label>
        <input
          type='email'
          className='form-control'
          name='email'
          id='email'
          placeholder='請輸入您的電子信箱'
        />
        <label htmlFor='phone' className='form-label'>
          手機號碼
        </label>
        <input
          type='text'
          className='form-control'
          name='phone'
          id='phone'
          placeholder='請輸入您的手機號碼'
        />
      </div>

        <Link to='/reservation/result'>
          <input
            type='submit'
            className='btn btn-secondary w-100'
            value='送出'
          />
        </Link>

    </form>
  );
};

export default Form;
