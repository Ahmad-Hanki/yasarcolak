import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmrFooterType } from "../../../../../../types";

const Footer = ({ footer }: { footer: EmrFooterType }) => {
  return (
    <div className="py-20 lg:w-[80%]">
      <div>
        <Card>
          <CardHeader></CardHeader>
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

            {/* //////////////////////////////////// */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Footer;
