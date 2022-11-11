import dynamic from 'next/dynamic'
import React from 'react'
import {FC} from 'react'

type Props = {
    children: any;
}

const NoSsr: FC<Props> = (props: { children: any; }) => <>{props.children}</>

export default dynamic(() => Promise.resolve(NoSsr),{
    ssr: false
})