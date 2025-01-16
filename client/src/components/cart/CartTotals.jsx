import React from 'react'
import { Button } from 'antd'
import { ClearOutlined, PlusCircleOutlined,MinusCircleOutlined } from '@ant-design/icons';

const CartTotals = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh_-_100px)] flex flex-col ">
        <h2 className='bg-blue-600 text-center py-4 text-white font-bold '>Sepetteki Ürünler</h2>
        <ul className="cart-items px-2 flex flex-col gap-y-3 overflow-y-auto py2">
            <li className='cart-item flex justify-between'>
                <div className='flex items-center'>
                   <img src="logo192.png" alt="" className='w-16 h-16 object-cover pt-2' /> 
                   <div className='flex flex-col ml-2'>
                    <b>test</b>
                    <span>12x2</span>
                   </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Button  icon={<PlusCircleOutlined/>} size='small' className='w-full flex items-center text-white bg-blue-500 justify-center !rounded-full'
                    />
                    <span className=''>1</span>
                    <Button
                    icon={<MinusCircleOutlined/>} size='small' className='w-full flex items-center bg-blue-500 text-white justify-center !rounded-full'
                    />
                </div>
            </li>
            <li className='cart-item flex justify-between'>
                <div className='flex items-center'>
                   <img src="logo192.png" alt="" className='w-16 h-16 object-cover pt-2' /> 
                   <div className='flex flex-col ml-2'>
                    <b>test</b>
                    <span>12x2</span>
                   </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Button  icon={<PlusCircleOutlined/>} size='small' className='w-full flex items-center text-white bg-blue-500 justify-center !rounded-full'
                    />
                    <span className=''>1</span>
                    <Button
                    icon={<MinusCircleOutlined/>} size='small' className='w-full flex items-center bg-blue-500 text-white justify-center !rounded-full'
                    />
                </div>
            </li>
            <li className='cart-item flex justify-between'>
                <div className='flex items-center'>
                   <img src="logo192.png" alt="" className='w-16 h-16 object-cover pt-2' /> 
                   <div className='flex flex-col ml-2'>
                    <b>test</b>
                    <span>12x2</span>
                   </div>
                </div>
                <div className='flex items-center gap-2'>
                    <Button  icon={<PlusCircleOutlined/>} size='small' className='w-full flex items-center text-white bg-blue-500 justify-center !rounded-full'
                    />
                    <span className=''>1</span>
                    <Button
                    icon={<MinusCircleOutlined/>} size='small' className='w-full flex items-center bg-blue-500 text-white justify-center !rounded-full'
                    />
                </div>
            </li>
        </ul>
        <div className="cart-totals mt-auto">
            <div className='border-t border-b'>
                <div className='flex justify-between px-2'>
                    <b>Ara Toplam</b>
                    <span>99</span>
                </div>
                <div className='flex justify-between px-2'>
                    <b>KDV %8</b>
                    <span className='text-red-700'>99</span>
                </div>
            </div>
            <div className='border-b mt-4'>
                <div className='flex justify-between px-2'>
                    <b className='text-2xl text-green-500'>Genel Toplam</b>
                    <span className='text-xl'>99</span>
                </div>
            </div>
            <div className='py-4 px-2'>
                <Button type='primary' size='large' className='w-full'>
                    Sipariş Oluştur
                </Button>
                <Button type='primary' danger icon={<ClearOutlined/>} size='large' className='w-full mt-2 flex items-center justify-center'>
                    Temizle
                </Button>
            </div>
        </div>
    </div>
  )
}

export default CartTotals
