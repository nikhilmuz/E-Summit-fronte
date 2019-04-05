import React from 'react';

export const FormErrors6 = ({formErrors6}) =>
  <div className='formErrors'>
    {Object.keys(formErrors6).map((fieldName, i) => {
      if(formErrors6[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {formErrors6[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>
  export const FormErrors7 = ({formErrors7}) =>
  <div className='formErrors7'>
    {Object.keys(formErrors7).map((fieldName, i) => {
      if(formErrors7[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {formErrors7[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>
export const FormErrors1 = ({formErrors1}) =>
  <div className='formErrors1'>
    {Object.keys(formErrors1).map((fieldName, i) => {
      if(formErrors1[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {formErrors1[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>

export const FormErrors2 = ({formErrors2}) =>
<div className='formErrors2'>
  {Object.keys(formErrors2).map((fieldName, i) => {
    if(formErrors2[fieldName].length > 0){
      return (
        <p key={i}>{fieldName} {formErrors2[fieldName]}</p>
      )        
    } else {
      return '';
    }
  })}
</div>
export const FormErrors3 = ({formErrors3}) =>
<div className='formErrors3'>
  {Object.keys(formErrors3).map((fieldName, i) => {
    if(formErrors3[fieldName].length > 0){
      return (
        <p key={i}>{fieldName} {formErrors3[fieldName]}</p>
      )        
    } else {
      return '';
    }
  })}
</div>
export const FormErrors4 = ({formErrors4}) =>
<div className='formErrors4'>
  {Object.keys(formErrors4).map((fieldName, i) => {
    if(formErrors4[fieldName].length > 0){
      return (
        <p key={i}>{fieldName} {formErrors4[fieldName]}</p>
      )        
    } else {
      return '';
    }
  })}
</div>
export const FormErrors5 = ({formErrors5}) =>
<div className='formErrors5'>
  {Object.keys(formErrors5).map((fieldName, i) => {
    if(formErrors5[fieldName].length > 0){
      return (
        <p key={i}>{fieldName} {formErrors5[fieldName]}</p>
      )        
    } else {
      return '';
    }
  })}
</div>
