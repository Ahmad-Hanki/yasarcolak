import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KolonoskopiFooterType } from "../../../../../../types";

const Footer = ({ footer }: { footer: KolonoskopiFooterType }) => {
  return (
    <div className="py-20 lg:w-[80%]">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>{footer.h8}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.q1}
              </div>
              <div className="collapse-content">
                <p>{footer.a1}</p>
              </div>
            </div>
           
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.q2}
              </div>
              <div className="collapse-content">
                <p>{footer.a2}</p>
              </div>
            </div>
           
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.q3}
              </div>
              <div className="collapse-content">
                <p>{footer.a3}</p>
              </div>
            </div>
           
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.q4}
              </div>
              <div className="collapse-content">
                <p>{footer.a4}</p>
              </div>
            </div>
           
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.q5}
              </div>
              <div className="collapse-content">
                <p>{footer.a5}</p>
              </div>
            </div>
           
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.q6}
              </div>
              <div className="collapse-content">
                <p>{footer.a6}</p>
              </div>
            </div>
           
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.q7}
              </div>
              <div className="collapse-content">
                <p>{footer.a7}</p>
              </div>
            </div>
           
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.q8}
              </div>
              <div className="collapse-content">
                <p>{footer.a8}</p>
              </div>
            </div>
           
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.q9}
              </div>
              <div className="collapse-content">
                <p>{footer.a9}</p>
              </div>
            </div>
           
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.q10}
              </div>
              <div className="collapse-content">
                <p>{footer.a10}</p>
              </div>
            </div>
           
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.q11}
              </div>
              <div className="collapse-content">
                <p>{footer.a11}</p>
              </div>
            </div>
           
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.q12}
              </div>
              <div className="collapse-content">
                <p>{footer.a12}</p>
              </div>
            </div>
           
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.q13}
              </div>
              <div className="collapse-content">
                <p>{footer.a13}</p>
              </div>
            </div>
           
            {/* //////////////////////////////////// */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Footer;
