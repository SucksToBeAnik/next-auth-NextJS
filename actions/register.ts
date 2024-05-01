'use server'

import bcrypt from "bcrypt"
import * as z from "zod"
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { error } from "console";
import { getUserByEmail } from "@/data/user";

export async function register(values:z.infer<typeof RegisterSchema>) {
    const validatedFields = RegisterSchema.safeParse(values)

    console.log(validatedFields.data);

    if(!validatedFields.success) {
        return {
            error: "Invalid fields!"
        }
    }

    const {email, name, password} = validatedFields.data
    const hashedPassword = await bcrypt.hash(password,10)

    const existingUser = await getUserByEmail(email)

    if(existingUser){
        return {error:"Email already in use!"}
    }

    await db.user.create(
        {
            data:{
                name,
                email,
                password: hashedPassword
            }
        }
    )

    // ToDo: send verification mail



    return {success: "User Created!"}

}