import z from 'zod'

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name:z.string().optional()
})

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const createBolgInput = z.object({
    title: z.string().min(3),
    content: z.string().min(3),
})

export const updateBolgInput = z.object({
  title: z.string().min(3),
  content: z.string().min(3),
  id: z.string()
});


export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreateBlogInput = z.infer<typeof createBolgInput>;
export type UpdateBlogInput = z.infer<typeof updateBolgInput>;

