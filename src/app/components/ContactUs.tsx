"use client";

import { useState } from "react";
import PixelHeading from "./PixelHeading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";

import { type ContactFormValues, contactFormSchema } from "../../lib/schema";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      companyName: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setLoading(true);
    setErrorMessage("");
    setSuccess(false);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || result.error) {
        throw new Error(result.error || "Failed to send message");
      }

      setSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="avl-contact signal-contact signal-wrap">
      <div className="relative flex items-start text-white">
        <div className="relative z-10 max-w-lg">
          <PixelHeading lines={["Let’s make", "something happen."]}/>
          <p className="contact-intro-copy">
            A new idea, a stubborn problem, or a business ready for its next chapter. Tell us what you’re thinking.
          </p>
          <a href="mailto:hello@aethoscompany.in" className="mt-8 inline-block text-sm text-blue-400 underline-offset-4 hover:underline">hello@aethoscompany.in</a>
        </div>

      </div>

      <div className="flex items-start justify-center">
        {success ? (
          <div className="w-full max-w-lg space-y-4">
            <Alert className="bg-blue-400/5 border-blue-300/20">
              <CheckCircle2 className="h-4 w-4 text-blue-300" />
              <AlertTitle className="text-white">Success!</AlertTitle>
              <AlertDescription className="text-white/70">
                Your message has been sent successfully. We'll get back to you
                soon!
              </AlertDescription>
            </Alert>
            <Button
              onClick={() => setSuccess(false)}
              variant="outline"
              className="w-full"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-lg space-y-5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" autoComplete="email" placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input autoComplete="given-name" placeholder="Your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input autoComplete="organization" placeholder="Your company" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How can we help?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your project..."
                        className="min-h-[144px] resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {errorMessage && <p role="alert" className="text-sm text-red-300">{errorMessage}</p>}
              <Button type="submit" className="h-12 w-full bg-[#8cb9ff] text-[#08090b] hover:bg-[#adcfff]" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send message
              </Button>
            </form>
          </Form>
        )}
      </div>
    </div>
  );
}

export default function ContactUs() {
  return <ContactForm />;
}
