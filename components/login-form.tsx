"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import { setAuth } from "@/features/auth/authSlice"


export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"form">) {
    const dispatch = useDispatch()
    const router = useRouter()
    const [Phone,setPhone] = useState("")
    const [Password,setPassword] = useState("")
    const [error,setError] = useState("")
    const handleLogin = async (e:React.FormEvent)=>{
        e.preventDefault()
        setError("")
        try{
            const res = await fetch('https://e-commarce-website-eight.vercel.app/api/v1/auth/login',{
                method:'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                Phone,
                Password,
                })
            })
            const data = await res.json()
            if(res.ok){
            const AccessToken = data.AccessToken
            const userId = data.user.id 
            localStorage.setItem('AccessToken',AccessToken)
            localStorage.setItem('userId',userId)
            dispatch(setAuth({AccessToken,userId}))
                router.push("/")
            }
            else {
        setError(data.message || "حدث خطأ أثناء تسجيل الدخول")
        }
        }
        catch (err: unknown) {
  if (err instanceof Error) {
    setError(err.message || "حدث خطأ في الاتصال بالسيرفر")
  } else {
    setError("حدث خطأ في الاتصال بالسيرفر")
  }
}
    }
    return (
        <form className={cn("flex flex-col gap-6 ", className)} {...props} onSubmit={handleLogin}>
            <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center p-3 ">
                    <h1 className="text-2xl font-bold text-primary">Login to your account</h1>
                    <p className="text-muted-foreground text-sm text-balance">
                        Enter your email below to login to your account
                    </p>
                </div>
                <Field>
                    <FieldLabel htmlFor="phone">Phone</FieldLabel>
                    <Input id="phone" type="text" placeholder="01015121678" required value={Phone} onChange={(e)=> setPhone(e.target.value)} />
                </Field>
                <Field>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" type="password" required value={Password} onChange={(e)=> setPassword(e.target.value)} />
                </Field>
                <Field>
                    <Button type="submit" variant='default'>Login</Button>
                </Field>
                <p className="text-center text-red-500">{error}</p>
                <Field>
                    <FieldDescription className="text-center">
                        Don&apos;t have an account?{" "}
                        <Link href="/auth/register" className="underline underline-offset-4">
                            Sign up
                        </Link>
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    )
}
