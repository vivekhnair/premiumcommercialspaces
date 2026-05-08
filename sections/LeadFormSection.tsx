'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

const schema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z
    .string()
    .min(10, 'Enter a valid phone number')
    .max(15, 'Enter a valid phone number')
    .regex(/^[+\d\s\-()]+$/, 'Invalid phone number'),
  email: z.string().email('Enter a valid email address'),
  propertyInterest: z.string().min(1, 'Please select a property type'),
  investmentBudget: z.string().min(1, 'Please select a budget range'),
  message: z.string().optional(),
  'bot-field': z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const propertyOptions = [
  'Premium Office Spaces',
  'Retail Shops',
  'Showrooms',
  'Commercial Units',
  'Business Parks',
  'Co-working Spaces',
]

const budgetOptions = [
  'Under ₹50 Lakhs',
  '₹50 Lakhs - ₹1 Crore',
  '₹1 Crore - ₹5 Crore',
  '₹5 Crore - ₹20 Crore',
  'Above ₹20 Crore',
]

interface FloatingInputProps {
  label: string
  id: string
  type?: string
  error?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any
  name: string
}

function FloatingInput({ label, id, type = 'text', error, register, name }: FloatingInputProps) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder=" "
        {...register(name)}
        className={cn(
          'peer w-full border bg-white px-4 pt-6 pb-2 font-inter text-sm text-dark-text outline-none transition-colors duration-200 placeholder-transparent',
          error
            ? 'border-red-400 focus:border-red-500'
            : 'border-border-gray focus:border-gold'
        )}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-4 text-xs text-dark-text/40 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-gold peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:text-xs"
      >
        {label}
      </label>
      {error && <p className="mt-1 font-inter text-xs text-red-500">{error}</p>}
    </div>
  )
}

export default function LeadFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true)
    try {
      const formData = new FormData()
      formData.append('form-name', 'contact')
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value as string)
      })

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(Object.fromEntries(formData) as Record<string, string>).toString(),
      })

      setSubmitted(true)
      reset()
    } catch (err) {
      console.error('Form submission error:', err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="section-padding bg-soft-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-inter text-gold text-xs tracking-[0.3em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark-text mb-4">
            Request a Consultation
          </h2>
          <div className="flex justify-center mb-6">
            <div className="gold-line" />
          </div>
          <p className="font-inter text-base text-dark-text/60 max-w-xl mx-auto">
            Share your requirements and our expert advisors will curate the perfect commercial
            property options tailored to your investment goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white shadow-lg border border-border-gray p-8 md:p-10"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center py-12"
              >
                <div className="w-20 h-20 bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-gold" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-dark-text mb-3">
                  Thank You!
                </h3>
                <p className="font-inter text-base text-dark-text/60 max-w-sm">
                  Your inquiry has been received. Our team will reach out within 24 hours with
                  tailored property recommendations.
                </p>
                <Button
                  variant="outline"
                  size="md"
                  className="mt-8"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Inquiry
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                data-netlify="true"
                name="contact"
                method="POST"
              >
                {/* Honeypot */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human:{' '}
                    <input {...register('bot-field')} data-netlify-honeypot="bot-field" />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput
                    label="Full Name *"
                    id="fullName"
                    name="fullName"
                    register={register}
                    error={errors.fullName?.message}
                  />
                  <FloatingInput
                    label="Phone Number *"
                    id="phone"
                    name="phone"
                    type="tel"
                    register={register}
                    error={errors.phone?.message}
                  />
                  <FloatingInput
                    label="Email Address *"
                    id="email"
                    name="email"
                    type="email"
                    register={register}
                    error={errors.email?.message}
                  />

                  {/* Property Interest */}
                  <div className="relative">
                    <select
                      id="propertyInterest"
                      {...register('propertyInterest')}
                      defaultValue=""
                      className={cn(
                        'w-full border bg-white px-4 py-4 font-inter text-sm text-dark-text outline-none transition-colors duration-200 appearance-none',
                        errors.propertyInterest
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-border-gray focus:border-gold'
                      )}
                    >
                      <option value="" disabled>
                        Property Interest *
                      </option>
                      {propertyOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.propertyInterest && (
                      <p className="mt-1 font-inter text-xs text-red-500">
                        {errors.propertyInterest.message}
                      </p>
                    )}
                  </div>

                  {/* Investment Budget */}
                  <div className="relative md:col-span-2">
                    <select
                      id="investmentBudget"
                      {...register('investmentBudget')}
                      defaultValue=""
                      className={cn(
                        'w-full border bg-white px-4 py-4 font-inter text-sm text-dark-text outline-none transition-colors duration-200 appearance-none',
                        errors.investmentBudget
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-border-gray focus:border-gold'
                      )}
                    >
                      <option value="" disabled>
                        Investment Budget *
                      </option>
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.investmentBudget && (
                      <p className="mt-1 font-inter text-xs text-red-500">
                        {errors.investmentBudget.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2 relative">
                    <textarea
                      id="message"
                      {...register('message')}
                      placeholder=" "
                      rows={4}
                      className="peer w-full border border-border-gray bg-white px-4 pt-6 pb-2 font-inter text-sm text-dark-text outline-none transition-colors duration-200 placeholder-transparent focus:border-gold resize-none"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-4 text-xs text-dark-text/40 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-gold peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:text-xs"
                    >
                      Additional Message (Optional)
                    </label>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <p className="font-inter text-xs text-dark-text/40">
                    * Required fields. Your information is secure and will never be shared.
                  </p>
                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    disabled={submitting}
                    className="w-full sm:w-auto flex items-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Inquiry'
                    )}
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
