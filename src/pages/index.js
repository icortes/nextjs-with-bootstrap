import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [total, setTotal] = useState('');

  const firstNumAsNumber = Number(firstNumber);
  const secondNumbAsNumber = Number(secondNumber);

  const handleClick = (event, operator) => {
    switch (operator) {
      case 'add':
        setTotal(firstNumAsNumber + secondNumbAsNumber);
        break;
      case 'subtract':
        setTotal(firstNumAsNumber - secondNumbAsNumber);
        break;
      case 'multiply':
        setTotal(firstNumAsNumber * secondNumbAsNumber);
        break;
      case 'divide':
        setTotal(firstNumAsNumber / secondNumbAsNumber);
        break;
      default:
        setTotal(-1);
    }
    console.log(event);
  };
  

  return (
    <>
      <Head>
        <title>Calculator</title>
        <meta charset='UTF-8' />
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container-md h-100 d-flex flex-column align-items-center'>
        <div className='card mt-3'>
          <div className='card-header'>
            <h1 className='text-center'>Calculator</h1>
          </div>
          <div className='card-body'>
            <div className='input-group mb-2'>
              <span className='input-group-text'>Number 1:</span>
              <input
                className='form-control'
                type='number'
                value={firstNumber}
                onChange={(e) => {
                  setFirstNumber(e.target.value);
                }}
                required
              />
            </div>
            <div className='input-group mb-2'>
              <span className='input-group-text'>Number 2:</span>
              <input
                className='form-control'
                type='number'
                value={secondNumber}
                onChange={(e) => {
                  setSecondNumber(e.target.value);
                }}
                required
              />
            </div>
            <div className='input-group d-flex justify-content-between mb-4'>
              <button
                className='btn btn-outline-success'
                onClick={(event) => handleClick(event, 'add')}>
                Add
              </button>
              <button
                className='btn btn-outline-danger'
                onClick={(event) => handleClick(event, 'subtract')}>
                Subtract
              </button>
              <button
                className='btn btn-outline-warning'
                onClick={(event) => handleClick(event, 'multiply')}>
                Multiply
              </button>
              <button
                className='btn btn-outline-primary'
                onClick={(event) => handleClick(event, 'divide')}>
                Divide
              </button>
            </div>
            <div className='input-group'>
              <span className='input-group-text'>Answer:</span>
              <input className='form-control text-end' type='number' value={total} readOnly />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
