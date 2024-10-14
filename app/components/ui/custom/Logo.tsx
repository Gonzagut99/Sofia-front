interface Props {
  theme?: 'light' | 'dark' | 'system'
}
export function Logo({theme}: Props) {
    const themeImgState = theme=="dark" ? '/SofiaLogoDark.png':'/SofiaLogo.png'
  return (
    <figure className="w-[100px] flex items-center">
      <img
        className="w-full"
        src={themeImgState}
        alt="Apptizer Logo"
      />
    </figure>
  )
}