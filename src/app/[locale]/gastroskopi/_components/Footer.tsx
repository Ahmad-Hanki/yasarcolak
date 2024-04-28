import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GastroskopiFooterType } from "../../../../../types";

const Footer = ({ footer }: { footer: GastroskopiFooterType }) => {
  return (
    <div className="py-20 lg:w-[80%]">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>{footer.h5}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.h5c1}
              </div>
              <div className="collapse-content">
                <p>{footer.h5d1}</p>
              </div>
            </div>
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.h5c2}
              </div>
              <div className="collapse-content space-y-7">
                <p>{footer.h5d21}</p>
                <p>{footer.h5d22}</p>
              </div>
            </div>
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.h5c3}
              </div>
              <div className="collapse-content">
                <p>{footer.h5d3}</p>
              </div>
            </div>
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.h5c4}
              </div>
              <div className="collapse-content">
                <p>{footer.h5d4}</p>
              </div>
            </div>
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.h5c5}
              </div>
              <div className="collapse-content">
                <p>{footer.h5d5}</p>
              </div>
            </div>
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.h5c6}
              </div>
              <div className="collapse-content">
                <p>{footer.h5d6}</p>
              </div>
            </div>
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.h5c7}
              </div>
              <div className="collapse-content">
                <p>{footer.h5d7}</p>
              </div>
            </div>
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.h5c8}
              </div>
              <div className="collapse-content">
                <p>{footer.h5d8}</p>
              </div>
            </div>
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.h5c9}
              </div>
              <div className="collapse-content">
                <p>{footer.h5d9}</p>
              </div>
            </div>
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.h5c10}
              </div>
              <div className="collapse-content">
                <p>{footer.h5d10}</p>
              </div>
            </div>
            {/* //////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-secondary/50 dark:bg-secondary/70"
            >
              <div className="collapse-title text-xl font-medium">
                {footer.h5c11}
              </div>
              <div className="collapse-content">
                <p>{footer.h5d11}</p>
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
