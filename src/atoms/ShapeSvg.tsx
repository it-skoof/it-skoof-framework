
export const ShapeSvg = () => {
  return (
    <svg version="1.1" preserveAspectRatio="none" xmlns='https://www.w3.org/svg/2000' viewBox='0 0 100 100'>
        <filter id="fractalNoise">
            <feTurbulence 
            type={'fractalNoise'}
            baseFrequency="10" numOctaves="1"
            seed="1"
            result="fractalNoise"
            />
        </filter>
        <rect width={100} height={100} filter='url(#fractalNoise)'/>
    </svg>
  )
}
