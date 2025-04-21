import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AuthLayout from '@/layouts/auth-layout';

type RegisterForm = {
    name: string;
    email: string;
    noktp: string;
    nohp: string;
    pasar_id: string;
    password: string;
    password_confirmation: string;
};

export default function Register({ dataPasar }: any) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        noktp: '',
        nohp: '',
        pasar_id: '',
        no_kios: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('register'), {
            onSuccess: () => {
                window.location.href = '/admin';
            },
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout title="Create an account" description="Enter your details below to create your account">
            <Head title="Register" />
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            disabled={processing}
                            placeholder="Full name"
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="noktp">No. KTP</Label>
                        <Input
                            id="noktp"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="noktp"
                            value={data.noktp}
                            onChange={(e) => setData('noktp', e.target.value)}
                            disabled={processing}
                            placeholder="Full noktp"
                        />
                        <InputError message={errors.noktp} className="mt-2" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="nohp">No. HP</Label>
                        <Input
                            id="nohp"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="nohp"
                            value={data.nohp}
                            onChange={(e) => setData('nohp', e.target.value)}
                            disabled={processing}
                            placeholder="Full nohp"
                        />
                        <InputError message={errors.nohp} className="mt-2" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="name">Pasar</Label>
                        {/* Select */}
                        {/* Select Dropdown */}
                        <Select name="pasar" aria-label="Pasar" value={data.pasar_id} onValueChange={(e) => setData('pasar_id', e)}>
                            <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Pilih Pasar" />
                            </SelectTrigger>
                            <SelectContent>
                                {dataPasar.map((data: any) => {
                                    return <SelectItem value={data.id}>{data.nama}</SelectItem>;
                                })}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="no_kios">No. Kios</Label>
                        <Input
                            id="no_kios"
                            type="text"
                            required
                            tabIndex={2}
                            autoComplete="no_kios"
                            value={data.no_kios}
                            onChange={(e) => setData('no_kios', e.target.value)}
                            disabled={processing}
                            placeholder="Masukkan nomor kios..."
                        />
                        <InputError message={errors.no_kios} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            tabIndex={2}
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            disabled={processing}
                            placeholder="email@example.com"
                        />
                        <InputError message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={3}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            disabled={processing}
                            placeholder="Password"
                        />
                        <InputError message={errors.password} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password_confirmation">Confirm password</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            required
                            tabIndex={4}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            disabled={processing}
                            placeholder="Confirm password"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>

                    <Button type="submit" className="mt-2 w-full" tabIndex={5} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Create account
                    </Button>
                </div>

                <div className="text-muted-foreground text-center text-sm">
                    Already have an account?{' '}
                    <TextLink href={route('login')} tabIndex={6}>
                        Log in
                    </TextLink>
                </div>
            </form>
        </AuthLayout>
    );
}
