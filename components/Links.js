import LinkButton from "./LinkButton";
import LinkHeader from "./LinkHeader";


export default function Links() {
  return (
    <div className="bg-gradient-to-b from-[#201f3f] to-slate-500 min-h-screen pb-20">
        <div className="relative">
          <div className="flex pt-16 pb-2 content-center items-center w-full">
            <img
              className="inline-block p-0 m-auto h-24 w-24 rounded-full object-cover"
              src="avatar.png"
              alt=""
            />
          </div>
          <div className="pb-0">
            <p className="text-white text-center m-auto text-xl">
              @username
            </p>
          </div>
          <div className="max-w-2xl m-auto p-6">
            <LinkHeader text="BUY MY GAMES"/>
            <LinkButton text="Buy My Game on Steam" href="#" imgSrc="icons/steam.png"/>
            <LinkButton text="Buy My Game on Nintendo Switch" href="#" imgSrc="icons/nswitch.png"/>

            <LinkHeader text="GET UPDATES"/>
            <LinkButton text="Newsletter" href="#" imgSrc="icons/email.png"/>

            <LinkHeader text="JOIN THE COMMUNITY"/>
            <LinkButton text="Discord" href="#" imgSrc="icons/discord.png"/>

            <LinkHeader text="FOLLOW ME"/>
            <LinkButton text="Twitter" href="#" imgSrc="icons/twitter.png"/>
            <LinkButton text="TikTok" href="#" imgSrc="icons/tiktok.png"/>
            <LinkButton text="Instagram" href="#" imgSrc="icons/instagram.png"/>
            <LinkButton text="Facebook" href="#" imgSrc="icons/facebook.png"/>
            <LinkButton text="YouTube" href="#" imgSrc="icons/youtube.png"/>
            <LinkButton text="Steam" href="#" imgSrc="icons/steam.png"/>

          </div>
        </div>
    </div>
  )
}
