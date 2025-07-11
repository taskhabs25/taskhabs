type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src="/images/logo.png"
      alt="LOGO"
      className={className}
    />
  )
}
