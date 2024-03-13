import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import URL from "@/assets/URL.svg";
import CustomURL from "@/assets/CustomURL.svg";
import QRCode from "@/assets/QRCode.svg";
import Analysics from "@/assets/Analysics.svg";
import Line from "@/assets/Line.svg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const WhyChooseScissors = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="features"
      className="flex-inline w-full items-center justify-center bg-white px-[5em] pb-[5em] pt-[3em]"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
      >
        <div className="relative mx-auto grid grid-cols-2 items-start justify-center">
          <div className="">
            <div className="flex text-[35px] font-bold items-center justify-start">
                <img alt="logo" className="w-8 h-8" src={Line} />
              Why choose <span className="text-primary">Scissors</span>
            </div>
            <div className="w-[55%]">
              Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones
              for your personal, business, event usage. Our swift QR code
              creation, management and usage tracking with advance analytics for
              all of these is second to none.{" "}
            </div>
          </div>

          <div className="flex flex-col w-full items-start justify-center gap-6">
            <div className="flex flex-row justify-around gap-6">
              <div className="w-full">
                <img alt="logo" className="w-10 h-10 mb-6 mt-4" src={URL} />
                <div className="text-[30px] font-bold">URL Shortening</div>
                <div>
                  Scissor allows you to shorten URLs of your business, events.
                  Shorten your URL at scale, URL redirects.
                </div>
              </div>

              <div className="w-full">
                <img alt="logo" className="w-10 h-10 mb-6 mt-4" src={CustomURL} />
                <div className="text-[30px] font-bold">Custom URLs</div>
                <div className="">
                  With Scissor, you can create custom URLs, with the length you
                  want! A solution for socials and businesses.
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-around gap-6">
              <div className="w-full">
                <img alt="logo" className="w-10 h-10 mb-6 mt-4" src={QRCode} />
                <div className="text-[30px] font-bold">QR Codes</div>
                <div className="">
                  Generate QR codes to your business, events. Bring your
                  audience and customers to your doorstep with this scan and go
                  solution.
                </div>
              </div>

              <div className="w-full">
                <img alt="logo" className="w-10 h-10 mb-6 mt-4" src={Analysics} />
                <div className="text-[30px] font-bold">Data Analytics</div>
                <div>
                  Receive data on the usage of either your shortened URL, custom
                  URLs or generated QR codes. Embedded to monitor progress.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseScissors;
