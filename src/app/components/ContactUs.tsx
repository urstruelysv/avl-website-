"use client";

import { useRef, useState } from "react";
import PixelHeading from "./PixelHeading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { ArrowUpRight } from "./StudioIcons";
import EmailCopy from "./EmailCopy";
import ContactPaths from "./ContactPaths";
import { trackContactEvent } from "@/lib/analytics";

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
  const websiteField = useRef<HTMLInputElement>(null);

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
        body: JSON.stringify({ ...data, website: websiteField.current?.value || "" }),
      });

      const result = await response.json();

      if (!response.ok || result.error) {
        throw new Error(result.error || "Failed to send message");
      }

      setSuccess(true);
      form.reset();
      if (websiteField.current) websiteField.current.value = "";
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
          <PixelHeading lines={["Start a project."]}/>
          <p className="contact-intro-copy">
            Tell us what you need built, your timeline, and any details you already have.
          </p>
          <EmailCopy />
          <ContactPaths />
        </div>

      </div>

      <div className="flex items-start justify-center">
        {success ? (
          <div className="w-full max-w-lg space-y-4" role="status" aria-live="polite">
            <Alert className="bg-blue-400/5 border-blue-300/20">
              <CheckCircle2 className="h-4 w-4 text-blue-300" />
              <AlertTitle className="text-white">Message sent.</AlertTitle>
              <AlertDescription className="text-white/70">
                Thanks for telling us about your project. You can also book a call or reach us on WhatsApp.
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
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="contact-website">Leave this field empty</label>
                <input ref={websiteField} id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
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
              <Button type="submit" className="signal-button contact-submit" disabled={loading} onClick={() => trackContactEvent("form_submit", "contact_form")}>
                <span>{loading ? "Sending message…" : "Send message"}</span>
                <span className="button-arrow" aria-hidden="true">{loading ? <Loader2 className="animate-spin motion-reduce:animate-none" size={20} /> : <ArrowUpRight size={20} />}</span>
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
