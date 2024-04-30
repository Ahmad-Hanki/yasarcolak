import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-[200px] font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Oops!
          </h1>
          <h1 className="text-bold text-3xl">404 - PAGE NOT FOUND</h1>
          <p className="py-6 max-w-md text-center mx-auto">
            We're sorry, but the page you're looking for doesn't seem to exist.
            It may have been moved or deleted.
          </p>
          <Link href={"/"} className="btn btn-primary">
            Go Back To Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
