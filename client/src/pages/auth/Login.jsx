import React from 'react'
import { Form, Input,Button,Carousel,Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import AuthCarousel from '../../components/auth/AuthCarousel'
const Login = () => {
  return (
    <div className='h-screen'>
    <div className='flex justify-between h-full'>
        <div className='xl:px-20 px-10  min-w-[600px] flex flex-col h-full justify-center relative'>
            <h1 className='text-center text-5xl font-bold mb-2'> LOGO</h1>
            <Form layout="vertical">
                <Form.Item
                label="Email"
                name={"email"}
                rules={[{required:true,
                message:"Bu alan boş bırakılamaz!"}]}
                >
                <Input.Password />
                </Form.Item>
                <Form.Item
                label="Şifre"
                name={"password"}
                rules={[{required:true,
                message:"Bu alan boş bırakılamaz!"}]}
                >
                <Input />
                </Form.Item>
                <Form.Item name={"remember"} valuePropName="checked">
              <div className="flex justify-between items-center">
                <Checkbox>Remember me</Checkbox>
                <Link>Forgot Password?</Link>
              </div>
            </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full" size="large">Giriş yap</Button>
                </Form.Item>
            </Form>
            <div className='flex justify-center absolute left-0 bottom-10 w-full'>
                Henüz bir hesabınız yok mu? &nbsp; <Link to="/register" className='text-blue-600'>Şimdi Kaydol</Link>
            </div>
        </div>
        <div className='xl:w-4/6 lg:w-3/5 md:w-1/2  md:flex sm:hidden bg-[#6c63ff] flex justify-center items-center'>
            <div className='w-full'>
            <Carousel autoplay>
            <AuthCarousel img="responsive.svg" title="Responsive" desc="Tüm Cihaz Boyutlarıyla uyumluluk"/>
            <AuthCarousel img="statistic.svg" title="İstatistikler" desc="Geniş Tutulan İstatistikler"/>
            <AuthCarousel img="customer.svg" title="Müşteri Memnuniyeti" desc="Deneyim Sonunda Memnun Müşteriler"/>
            <AuthCarousel img="admin.svg" title="Yönetici Paneli" desc="Tek Yerden Yönetim"/>
            </Carousel>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login
