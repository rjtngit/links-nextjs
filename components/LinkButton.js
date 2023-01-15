

export default function LinkButton(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="mb-4 border-black border-2 flex items-stretch justify-items-stretch rounded-full border border-transparent bg-white text-base font-medium text-[#3753b9] shadow-sm hover:bg-slate-200 drop-shadow-2xl"
    >
      <img
        className="inline-block p-0 m-1 h-12 w-12 rounded-full"
        src={props.imgSrc}
        alt=""
      />
      <p className="flex-grow text-center m-auto">
        {props.text}
      </p>
      <div
        className="inline-block p-0 m-1 h-12 w-12 rounded-full"
      />
    </a>
  )
}
