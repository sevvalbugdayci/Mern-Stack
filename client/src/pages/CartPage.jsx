import {useState} from 'react'
import Header from "../components/header/Header";
import { Table,Card,Button,Modal } from 'antd';
import CreateBill from "../components/cart/CreateBill"
const CartPage = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);


  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <>
      <Header />
      <div className='px-6'>
      <Table dataSource={dataSource} columns={columns} bordered pagination={false}/>

        <div className="cart-total flex justify-end"> 
    <Card className='w-72 mt-4'>
      <div className='flex justify-between'>
        <span>Ara Toplam</span>
        <span>549.00TL</span>
      </div>
      <div className='flex justify-between my-2'>
        <span>KDV Toplam %8</span>
        <span className='text-red-600'>4.00TL</span>
      </div>
      <div className='flex justify-between font-bold'>
        <span>Toplam</span>
        <span>549.00TL</span>
      </div>
      <Button className='mt-4 w-full' type="primary" size="large" onClick={() => setIsModalOpen(true)}>
        Sipariş Oluştur
      </Button>
      </Card>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  )
}

export default CartPage
