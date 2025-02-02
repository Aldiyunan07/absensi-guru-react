import React, { useState } from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Label from '../../components/Label';
import { validationLogin } from '../../types/validationLogin';
import { z } from 'zod';
import apiClient from '../../services/apiService';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validation = validationLogin.safeParse(formData);
        if (!validation.success) {
            console.log('Validation error: ', validation.error.issues);
            setFormErrors(validation.error.issues);
            return;
        }

        setLoading(true);
        try {
            const response = await apiClient.post('/api/login', {
                ...formData,
            });
            localStorage.setItem('token', response.data.token);
            navigate('/dashboard', {
                state: {
                    user: response.data.user,
                },
            });
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error('Error submitting form', error.message);
                setError(error.message);
            } else {
                console.error('Unexpected error :', error);
                setError('An Unexpected error occured');
            }
        } finally {
            setLoading(false);
        }

        if (error) {
            return <p>{error}</p>;
        }
    };

    console.log(formData);
    return (
        <>
            <div className="account-pages my-5 pt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-8">
                            <Card>
                                <div>
                                    <div className="text-center"></div>
                                    {/* end row */}
                                    <h4 className="font-size-18 text-muted mt-2 text-center">Absensi Guru</h4>
                                    <p className="mb-5 text-center">Login untuk melanjutkan.</p>
                                    <form onSubmit={handleSubmit} className="form-horizontal">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="mb-4">
                                                    <Label id={'email'} name={'Email'} />
                                                    <Input onChange={handleChange} type={'email'} id={'email'} name={'email'} />
                                                    {formErrors.find((error) => error.path.includes('email')) && (
                                                        <p className="text-sm text-danger" id="email-error">
                                                            {' '}
                                                            Email harus diisi{' '}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="mb-4">
                                                    <Label id={'password'} name={'password'} />
                                                    <Input onChange={handleChange} type={'password'} id={'password'} name={'password'} />
                                                    {formErrors.find((error) => error.path.includes('password')) && (
                                                        <p className="text-sm text-danger" id="email-error">
                                                            {' '}
                                                            Password harus diisi{' '}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <Button disabled={loading} type={'submit'} name={loading ? 'Loading ...' : 'Log in'} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </Card>
                        </div>
                    </div>
                    {/* end row */}
                </div>
            </div>
        </>
    );
}
