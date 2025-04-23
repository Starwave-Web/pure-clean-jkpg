"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "./input";
import { Button } from "./button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./form";

const CallbackForm = () => {
  const t = useTranslations("callbackform");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const formSchema = z.object({
    "form-name": z.string().default("callbackform"),
    "bot-field": z.string().optional(),
    subject: z.string().default("Callback inquiry"),
    phonenumber: z
      .string()
      .min(1, { message: t("validation.requiredField") })
      .max(15, { message: t("validation.characterLimitExceeded") }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(
      formSchema as z.ZodType<{
        "form-name": string;
        "bot-field"?: string;
        subject: string;
        phonenumber: string;
      }>
    ),
    defaultValues: {
      "form-name": "callbackform",
      "bot-field": "",
      subject: "Callback inquiry",
      phonenumber: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      const formData = new FormData();
      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          const value = values[key as keyof typeof values] ?? "";
          formData.append(key, value.toString());
        }
      }
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (res.status === 200) {
        form.reset();
        router.push("/quote");
      } else {
        toast(t("errorTitle"), {
          description: t("errorDescription"),
        });
      }
    } catch (error) {
      console.log(error);
      toast(t("errorTitle"), {
        description: t("errorDescription"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        name="callbackform"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <FormField
          control={form.control}
          name="form-name"
          render={({ field }) => (
            <FormItem>
              <Input type="hidden" {...field} value="callbackform" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bot-field"
          render={({ field }) => (
            <FormItem>
              <Input type="hidden" {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <Input type="hidden" {...field} value="Callback inquiry" />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 justify-between">
          <FormField
            control={form.control}
            name="phonenumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="bg-white h-12"
                    placeholder={t("phoneNumberPlaceholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="bg-white text-primary-blue hover:bg-white/90 active:bg-light-gray"
            variant="primary"
            type="submit"
            disabled={isSubmitting}
          >
            {t("submitButton")}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CallbackForm;
