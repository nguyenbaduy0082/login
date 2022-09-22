import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Input from '../components/Input'


const Login = () => {
    return (
        <div>
            <Card>
                <Input
                    label='email'
                    type='text'
                    placeholder='nhap tai khoan'
                    defaultValue=''
                />

                <Input
                    label='mat khau'
                    type='text'
                    placeholder='nhap mat khau'
                    defaultValue=''
                />

                <Input
                    label='nhap lai mat khau'
                    type='text'
                    placeholder='nhap mat khau'
                    defaultValue=''
                />

                <Button>
                    dang ky
                </Button>
            </Card>


        </div>
    )
}

export default Login