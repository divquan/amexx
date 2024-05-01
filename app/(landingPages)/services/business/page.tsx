import { Award, Bookmark, TickCircle } from "iconsax-react";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col gap-6">
      <div className=" mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
          AMEXT Consult has got your business in mind as well!{" "}
        </h1>
        <p className="text-muted-foreground max-w-lg">
          Get paid while offering your clients high quality services- We partner
          with you to strategically ensure excellence in business.{" "}
        </p>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
          Who Qualifies?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {WhoQualifiesName.map((item, index) => {
            return <WhoQualifiesCard name={item} key={index} />;
          })}
        </div>
        <div className="mb-8 ">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Do you want to get your business on board?{" "}
            </h2>
            <p className="text-muted-foreground max-w-lg">
              All you have to do is to refer AMEX consult to your clients and
              students and get paid on a monthly basis with our commission
              packages.
            </p>
            <p className="text-muted-foreground max-w-lg">
              We have diverse partners, our highest performing partner earns as
              high as $5,000 in commissions monthly. We value our partners.
            </p>
          </div>
          <div className="mb-8 bg-[#FBFBFB] rounded-xl p-2 md:p-4  md:pl-6 ">
            <h4 className="text-2xl md:text-3xl font-semibold mb-6">
              Simple steps to follow{" "}
            </h4>
            <div className="flex flex-col gap-4 relative pl-5 md:pl-12">
              {SimpleStepsToFollow.map((item, index) => {
                return (
                  <SimpleSteps
                    title={item.title}
                    desc={item.desc}
                    key={index}
                  />
                );
              })}
              <div className="absolute top-[90px] bottom-[90px] left-0 md:left-2 flex justify-between flex-col">
                {SimpleStepsToFollow.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      {index < 2 ? (
                        <FaCircleCheck
                          size={18}
                          className="h-5 w-5 rounded-full my-5 "
                          fill="rgba(0, 0, 0, 0.6)"
                        />
                      ) : (
                        <div className="rounded-full h-5 border border-slate-500 w-5 my-5 relative">
                          {!(index === SimpleStepsToFollow.length - 1) && (
                            <div className="rounded-full h-2 w-2 bg-slate-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                          )}
                        </div>
                      )}
                      {!(index === SimpleStepsToFollow.length - 1) && (
                        <div className="h-auto border-l-2 border-l-slate-600 border-dashed mx-2 flex-1"></div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const WhoQualifiesCard = ({ name }: { name: string }) => {
  return (
    <div className="h-[125px] w-full md:w-[144px] bg-[#FBFBFB]  flex flex-col justify-center items-center gap-1 rounded-lg">
      <div className="bg-white p-3 rounded-full">
        <Award />
      </div>
      <span className="text-[15px] text-muted-foreground">{name}</span>
    </div>
  );
};

const WhoQualifiesName = [
  "School Leaders",
  "Colleges",
  "Test Prep Centers",
  "NGOs",
  "Travel Agencies",
];

const SimpleStepsToFollow = [
  {
    title: "Apply to be a partner",
    desc: "We're glad to have you on board! Provide information in the form below to express interest in partnering with us.",
  },
  {
    title: "Let's get to know you",
    desc: "Our team will review your application and interview you.",
  },
  {
    title: "Join us!",
    desc: "You will get feedback from our manager to officially approve you for refferals.",
  },
  {
    title: "Payment",
    desc: "Get your commission at the end of every month for successful referrals",
  },
];

const SimpleSteps = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className=" w-full md:w-[300px] h-[201px] rounded-xl flex flex-col gap-3 items-start  bg-white p-2 md:p-6 border border-[rgba(0, 0, 0, 0.05)]    justify-between    ">
      <div>
        <Bookmark />
        <h3 className="font-bold">{title}</h3>
      </div>
      <span className="text-sm">{desc}</span>
    </div>
  );
};
