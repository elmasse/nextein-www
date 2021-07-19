
export default function Nextein ({ alt, solid = true, contour = false, ...props }) {
  if (contour) solid = false
  return (
    <svg {...props} viewBox='0 0 646 455' version='1.1' xmlns='http://www.w3.org/2000/svg'>
      { alt && <title>{alt}</title> }
      <path
        fill={solid ? 'currentColor' : 'none'}
        stroke={!solid ? 'currentColor' : 'none'}
        strokeWidth={contour && contour !== true ? contour : 10}
        d='M33.174,433.52c7.981,23.4 67.868,-89.912 111.527,-89.569c97.325,0.768 439.224,112.5 472.417,94.169c25.9,-14.302 12.937,-368.73 3.552,-419.771c-8.214,-44.658 -24.656,113.831 -59.873,113.512c-98.592,-0.885 -502.879,-136.369 -531.681,-118.838c-32.496,19.776 -17.022,358.689 4.058,420.497Z' 
      />
    </svg>
  )
} 
