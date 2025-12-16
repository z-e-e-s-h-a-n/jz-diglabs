import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <section className="not-found-section">
        <h2>
          <span>4</span>
          <Image
            src="/images/404.png"
            alt="404 Image"
            width={100}
            height={100}
          />
          <span>4</span>
        </h2>
        <div>
          <h3>Page Not Found</h3>
          <Button href="/">Back To Home</Button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NotFoundPage;
