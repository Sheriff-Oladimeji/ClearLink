import Link from 'next/link'
import React from 'react'

const Button = ({value, styles, link}) => {
  return (
      <Link className={`${styles}  rounded-full text-center py-3 font-semibold px-6 w-max`} href={link}>{value}</Link>
  )
}

export default Button