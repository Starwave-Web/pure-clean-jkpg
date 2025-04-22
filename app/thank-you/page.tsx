
import { Logo } from "@/components/icons/common";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import Script from "next/script";

const ThankYou = () => {
  return (
    <>
      {/* <Script id="ads-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': ''
          });
        `}
      </Script> */}
      <main>
        <section className="w-full bg-white">
          <div className="container mx-auto px-4 flex flex-col gap-4 md:gap-20 py-20 md:py-40 h-[100vh]">
            <div className=" text-primary-blue flex flex-col gap-4 md:gap-8">
              <div>
                <Logo />
              </div>
              <h1 className="text-[18px]/[21px] font-medium">
                Thank You for
                Your Submission!
              </h1>
              <p className="text-[21px] md:text-[2rem] w-3/4 text-black font-semibold">
                We&apos;ve received your application and will be in touch soon!
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <Link href="/">
                <Button variant="primary">
                  Return to Home page
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ThankYou;
