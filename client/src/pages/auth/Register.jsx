import React from 'react'
import { Form, Input,Button,Carousel } from 'antd'
import { Link } from 'react-router-dom'
import AuthCarousel from '../../components/auth/AuthCarousel'
const Register = () => {
  return (
    <div className='h-screen'>
    <div className='flex justify-between h-full'>
        <div className='xl:px-20 px-10  min-w-[600px] flex flex-col h-full justify-center relative'>
            <h1 className='text-center text-5xl font-bold mb-2'> LOGO</h1>
            <Form layout="vertical">
                <Form.Item
                label="Kullanıcı Adı"
                name={"username"}
                rules={[{required:true,
                message:"Bu alan boş bırakılamaz!"}]}
                >
                <Input />
                </Form.Item>
                <Form.Item
                label="Email"
                name={"email"}
                rules={[{required:true,
                message:"Bu alan boş bırakılamaz!"}]}
                >
                <Input />
                </Form.Item>
                <Form.Item
                label="Şifre"
                name={"password"}
                rules={[{required:true,
                message:"Bu alan boş bırakılamaz!"}]}
                >
                <Input.Password />
                </Form.Item>
                <Form.Item
                label="Şifre Tekrar"
                name={"passwordAgain"}
                dependencies = {["password"]}
                rules={[
                    {
                      required: true,
                      message: 'Şifreler uyumlu değil!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Şifreler uyumlu değil!'));
                      },
                    }),
                  ]}
                
                >
                <Input.Password />
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full" size="large">Kaydol</Button>
                </Form.Item>
            </Form>
            <div className='flex justify-center absolute left-0 bottom-10 w-full'>
                Bir Hesabınız mı var? &nbsp; <Link to="/login" className='text-blue-600'>Şimdi giriş yap</Link>
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

export default Register
