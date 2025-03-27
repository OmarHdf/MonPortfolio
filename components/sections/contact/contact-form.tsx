'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, {
    message: '// Username must be at least 2 characters.',
  }),
  email: z.string().email({ message: '// Please enter a valid email.' }),
  message: z.string().min(1, {
    message: '// please enter any message to submit',
  }),
});

const defaultValues: z.infer<typeof formSchema> = {
  name: '',
  email: '',
  message: '',
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);

      const response = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify({
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      form.reset();
      alert('Thank you for your message! I will get back to you soon.');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>_Name</FormLabel>
              <FormControl>
                <Input placeholder='Your-Name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>_Email</FormLabel>
              <FormControl>
                <Input placeholder='your-email@email.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>_Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Let's Work Together!"
                  className='resize-y max-h-44'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='block ml-auto' type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </Button>
      </form>
    </Form>
  );
}
