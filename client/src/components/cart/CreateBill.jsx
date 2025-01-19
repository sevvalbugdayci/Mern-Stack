import { Modal,Form,Input, Select,Button,Card } from 'antd';
const CreateBill = ({isModalOpen, setIsModalOpen}) => {


  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <>
     <Modal title="Fatura Oluştur" open={isModalOpen} footer={false} onCancel={() => setIsModalOpen(false)}>
        <Form layout={"vertical"}>
            <Form.Item label="Müşteri Adı" name={"customerName"}  rules = {[{required:true,message:"Müşteri Adı alanı boş geçilemez."}]}>
                <Input />
            </Form.Item> 
            <Form.Item label="Telefon Numarası" name={"telNo"}  rules = {[{required:true}]}>
                <Input />
            </Form.Item>  
            <Form.Item label="Ödeme Yöntemi"   name={"select"} rules = {[{required:true}]}>
                <Select placeholder="Bir Ödeme Yöntemi Seçiniz..">
                    <Select.Option value="Nakit">Nakit</Select.Option>
                    <Select.Option value="Nakit">Kredi Kartı</Select.Option>
                </Select>
            </Form.Item>   
            <Card className='w-100'>
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
      <div className='flex justify-end'>
      <Button className='mt-4' type="primary" size="large" onClick={() => setIsModalOpen(true)} htmlType="submit">
        Sipariş Oluştur
      </Button>
      </div>
      
      </Card>
        </Form>
     </Modal>
    </>
  )
}

export default CreateBill
